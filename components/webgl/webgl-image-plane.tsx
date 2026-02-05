"use client";

import { useRef, useMemo, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { ShaderMaterial, PlaneGeometry, Mesh } from "three";
import { useWebGLImages, type RegisteredImage } from "./webgl-images-context";
import { getLenis } from "./hooks/use-lenis";
import { getMouse } from "./hooks/use-mouse";

// Hover effect configuration
const HOVER_SCALE = 1.03; // 3% scale increase on hover
const PARALLAX_STRENGTH = 0.02; // UV offset multiplier for parallax depth

// Shared geometry - subdivided plane for smooth vertex distortion
let sharedGeometry: PlaneGeometry | null = null;
function getSharedGeometry() {
  if (!sharedGeometry) {
    // 32x32 segments for smooth pinch deformation
    sharedGeometry = new PlaneGeometry(1, 1, 32, 32);
  }
  return sharedGeometry;
}

// Vertex shader - applies geometry pinch and passes screen position
const vertexShader = /* glsl */ `
  uniform float uVelocity;
  uniform vec2 uViewportSize;

  varying vec2 vUv;
  varying vec2 vScreenPos;

  void main() {
    vUv = uv;

    // Get world position
    vec4 worldPos = modelViewMatrix * vec4(position, 1.0);

    // Calculate screen position (normalized 0-1)
    vec2 screenPos = worldPos.xy / uViewportSize + 0.5;
    vScreenPos = screenPos;

    // --- Geometry pinch based on screen position ---
    vec2 screenCenter = vec2(0.5, 0.5);
    vec2 screenDelta = screenPos - screenCenter;
    float screenDist = length(screenDelta);

    // Inverse falloff - center affected most, edges least
    float maxDist = 0.707;
    float pinchStrength = 1.0 - smoothstep(0.0, maxDist, screenDist);

    // Pinch the geometry toward/away from center
    float pinchAmount = pinchStrength * uVelocity * 15.0;
    vec2 pinchDir = normalize(screenDelta + 0.0001);
    worldPos.xy -= pinchDir * pinchAmount * screenDist;

    gl_Position = projectionMatrix * worldPos;
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform vec2 uTextureSize;
  uniform vec2 uContainerSize;
  uniform float uVelocity;
  uniform float uHoverProgress;
  uniform vec2 uMouseLocal;
  uniform float uParallaxStrength;
  uniform float uHoverScale;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec2 vScreenPos;

  void main() {
    // Calculate aspect ratios
    float textureAspect = uTextureSize.x / uTextureSize.y;
    float containerAspect = uContainerSize.x / uContainerSize.y;

    vec2 uv = vUv;

    // --- Hover zoom: scale UV toward center (zoom into image) ---
    // Scale > 1 means we sample a smaller area = zoom in
    float zoomScale = mix(1.0, uHoverScale, uHoverProgress);
    uv = (uv - 0.5) / zoomScale + 0.5;

    // --- Magnetic parallax: shift UV opposite to mouse position ---
    // Mouse local is 0-1, center at 0.5. We shift opposite to create depth illusion.
    vec2 mouseOffset = (uMouseLocal - 0.5) * 2.0; // -1 to 1
    vec2 parallaxOffset = -mouseOffset * uParallaxStrength * uHoverProgress;
    uv += parallaxOffset;

    // --- Wall-level chromatic aberration based on screen position ---
    vec2 screenCenter = vec2(0.5, 0.5);
    vec2 screenDelta = vScreenPos - screenCenter;
    float aberration = abs(uVelocity) * 0.002;
    vec2 aberrationDir = normalize(screenDelta + 0.0001) * aberration;

    // "Cover" behavior - scale to fill, crop excess
    vec2 uvR = uv + aberrationDir;
    vec2 uvG = uv;
    vec2 uvB = uv - aberrationDir;

    if (containerAspect > textureAspect) {
      // Container is wider - scale by width, crop height
      float scale = containerAspect / textureAspect;
      uvR.y = (uvR.y - 0.5) / scale + 0.5;
      uvG.y = (uvG.y - 0.5) / scale + 0.5;
      uvB.y = (uvB.y - 0.5) / scale + 0.5;
    } else {
      // Container is taller - scale by height, crop width
      float scale = textureAspect / containerAspect;
      uvR.x = (uvR.x - 0.5) / scale + 0.5;
      uvG.x = (uvG.x - 0.5) / scale + 0.5;
      uvB.x = (uvB.x - 0.5) / scale + 0.5;
    }

    float r = texture2D(uTexture, uvR).r;
    float g = texture2D(uTexture, uvG).g;
    float b = texture2D(uTexture, uvB).b;

    gl_FragColor = vec4(r, g, b, uOpacity);
  }
`;

type ImagePlaneProps = {
  image: RegisteredImage;
};

function ImagePlane({ image }: ImagePlaneProps) {
  const meshRef = useRef<Mesh>(null);
  const smoothVelocityRef = useRef(0);
  const textureReadyRef = useRef(false);
  // PERF: Reusable arrays to avoid allocations in useFrame hot path
  const containerSizeRef = useRef<[number, number]>([0, 0]);
  const viewportSizeRef = useRef<[number, number]>([0, 0]);
  const mouseLocalRef = useRef<[number, number]>([0.5, 0.5]);
  // Hover state refs for smooth transitions
  const hoverProgressRef = useRef(0);
  // Fade-in opacity ref
  const opacityRef = useRef(0);
  const { size } = useThree();

  // Load texture - drei handles caching
  const texture = useTexture(image.textureUrl!);

  // Material with cover behavior, scroll effects, and hover interactions
  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uTextureSize: { value: [1, 1] },
        uContainerSize: { value: [1, 1] },
        uVelocity: { value: 0 },
        uViewportSize: { value: [1, 1] },
        // Hover effect uniforms
        uHoverProgress: { value: 0 },
        uHoverScale: { value: HOVER_SCALE },
        uMouseLocal: { value: [0.5, 0.5] },
        uParallaxStrength: { value: PARALLAX_STRENGTH },
        // Fade-in opacity
        uOpacity: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });
  }, []);

  // Update texture and size when texture changes
  useEffect(() => {
    // Reset ready state and opacity when texture changes
    textureReadyRef.current = false;
    opacityRef.current = 0;
    material.uniforms.uTexture.value = texture;
    if (texture.image) {
      const img = texture.image as HTMLImageElement;
      material.uniforms.uTextureSize.value = [
        img.width || img.naturalWidth || 1,
        img.height || img.naturalHeight || 1,
      ];
      // Mark texture as ready only after dimensions are set
      textureReadyRef.current = true;
    }
  }, [material, texture]);

  // Dispose material on unmount
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  // Shared geometry
  const geometry = useMemo(() => getSharedGeometry(), []);

  // Cache viewport dimensions
  const viewportWidth = size.width;
  const viewportHeight = size.height;

  useFrame(() => {
    const mesh = meshRef.current;
    const bounds = image.bounds;
    if (!mesh || !bounds) return;

    // Read directly from Lenis for zero-latency sync
    // Use window.scrollY as fallback to match how bounds are calculated
    const lenis = getLenis();
    const scrollY = lenis?.scroll ?? window.scrollY;

    // Smooth velocity for effects
    const rawVelocity = lenis?.velocity ?? 0;
    const clampedVelocity = Math.max(-8, Math.min(8, rawVelocity));
    smoothVelocityRef.current +=
      (clampedVelocity - smoothVelocityRef.current) * 0.08;

    // --- Hover detection ---
    const mouse = getMouse();
    // Convert normalized mouse (-1 to 1) to screen pixels
    const mouseScreenX = ((mouse.position.x + 1) / 2) * viewportWidth;
    const mouseScreenY = ((1 - mouse.position.y) / 2) * viewportHeight;

    // Check if mouse is within this image's bounds (accounting for scroll)
    const viewportTop = bounds.top - scrollY;
    const isHovered =
      mouse.isActive &&
      mouseScreenX >= bounds.left &&
      mouseScreenX <= bounds.left + bounds.width &&
      mouseScreenY >= viewportTop &&
      mouseScreenY <= viewportTop + bounds.height;

    // Calculate local mouse position within the image (0-1 normalized)
    if (isHovered) {
      mouseLocalRef.current[0] = (mouseScreenX - bounds.left) / bounds.width;
      mouseLocalRef.current[1] = (mouseScreenY - viewportTop) / bounds.height;
    }

    // Smooth hover transition (easing in/out)
    const targetHover = isHovered ? 1 : 0;
    const hoverEasing = isHovered ? 0.08 : 0.06; // Faster in, slower out
    hoverProgressRef.current +=
      (targetHover - hoverProgressRef.current) * hoverEasing;

    // Update uniforms - reuse arrays to avoid allocations
    containerSizeRef.current[0] = bounds.width;
    containerSizeRef.current[1] = bounds.height;
    material.uniforms.uContainerSize.value = containerSizeRef.current;
    material.uniforms.uVelocity.value = smoothVelocityRef.current;
    viewportSizeRef.current[0] = viewportWidth;
    viewportSizeRef.current[1] = viewportHeight;
    material.uniforms.uViewportSize.value = viewportSizeRef.current;

    // Hover uniforms
    material.uniforms.uHoverProgress.value = hoverProgressRef.current;
    material.uniforms.uMouseLocal.value = mouseLocalRef.current;

    // Fade-in animation when texture is ready
    if (textureReadyRef.current && opacityRef.current < 1) {
      opacityRef.current += (1 - opacityRef.current) * 0.08;
      if (opacityRef.current > 0.999) opacityRef.current = 1;
    }
    material.uniforms.uOpacity.value = opacityRef.current;

    // Position calculation
    const x = bounds.left - viewportWidth / 2 + bounds.width / 2;
    const y = -viewportTop + viewportHeight / 2 - bounds.height / 2;

    mesh.position.x = x;
    mesh.position.y = y;
    mesh.scale.x = bounds.width;
    mesh.scale.y = bounds.height;

    // Viewport culling - also hide if texture not ready to prevent flicker
    mesh.visible =
      textureReadyRef.current &&
      viewportTop < viewportHeight + 100 &&
      viewportTop + bounds.height > -100;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

export function WebGLImagePlanes() {
  const { images } = useWebGLImages();

  // Memoize filtered array to avoid recreation on every render
  const readyImages = useMemo(() => {
    return Array.from(images.values()).filter(
      (img) => img.textureUrl && img.bounds,
    );
  }, [images]);

  return (
    <>
      {readyImages.map((image) => (
        // Each ImagePlane gets its own Suspense boundary so loading one texture
        // doesn't cause all other images to disappear (useTexture suspends)
        <Suspense key={image.id} fallback={null}>
          <ImagePlane image={image} />
        </Suspense>
      ))}
    </>
  );
}
