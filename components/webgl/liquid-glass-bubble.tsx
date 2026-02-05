"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import {
  Mesh,
  Vector3,
  ShaderMaterial,
  Vector2,
  Scene,
  LinearFilter,
  RGBAFormat,
} from "three";
import { getMouse, tickMouse } from "./hooks/use-mouse";
import { useWebGLImages } from "./webgl-images-context";
import { getLenis } from "./hooks/use-lenis";

// Lens configuration
const LENS_RADIUS_FULL = 150; // pixels when over image (bigger lens)
const LENS_RADIUS_DOT = 6; // pixels when outside image (small pointer)
const LENS_EXPAND_PADDING = 48; // pixels of safe area around images where lens expands

// Interactive element selectors
const INTERACTIVE_SELECTORS = 'a, button, [role="button"], [role="link"], input, textarea, select, [tabindex]:not([tabindex="-1"])';

/**
 * Check if an element or any of its ancestors is interactive
 */
function isInteractiveElement(element: Element | null): boolean {
  if (!element) return false;

  // Walk up the DOM tree to check for interactive ancestors
  let current: Element | null = element;
  while (current && current !== document.body) {
    if (current.matches(INTERACTIVE_SELECTORS)) {
      return true;
    }
    // Also check for click handlers via data attribute or cursor style
    const style = window.getComputedStyle(current);
    if (style.cursor === 'pointer') {
      return true;
    }
    current = current.parentElement;
  }
  return false;
}

// Theme colors (must match WebGLCanvas)
const LIGHT_BG = 0xffffff;
const DARK_BG = 0x111111;

// Vertex shader - simple pass-through for circle geometry
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec2 vScreenUv;

  void main() {
    vUv = uv;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 clipPos = projectionMatrix * mvPosition;
    vScreenUv = (clipPos.xy / clipPos.w) * 0.5 + 0.5;

    gl_Position = clipPos;
  }
`;

// Fragment shader - MeshTransmissionMaterial-like lens refraction
const fragmentShader = /* glsl */ `
  uniform sampler2D uSceneTexture;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec2 uMouseVelocity;
  uniform float uOpacity;
  uniform float uIsOverImage;
  uniform float uIsOverInteractive;
  uniform float uIsDark;

  // Transmission material properties
  uniform float uIor;
  uniform float uThickness;
  uniform float uChromaticAberration;

  varying vec2 vUv;
  varying vec2 vScreenUv;

  void main() {
    vec2 centeredUv = vUv - 0.5;
    float dist = length(centeredUv) * 2.0;

    // Smooth circular mask with nice falloff
    float circleMask = 1.0 - smoothstep(0.92, 1.0, dist);

    // Dot mode - colors flip based on theme
    if (uIsOverImage < 0.5) {
      // Light mode: black dot, light gray interactive
      // Dark mode: white dot, dark gray interactive
      float lightModeColor = uIsOverInteractive > 0.5 ? 0.75 : 0.0;
      float darkModeColor = uIsOverInteractive > 0.5 ? 0.35 : 1.0;
      float gray = uIsDark > 0.5 ? darkModeColor : lightModeColor;
      gl_FragColor = vec4(vec3(gray), uOpacity * circleMask);
      return;
    }

    // === Lens mode: transmission material style refraction ===

    // Calculate lens normal (as if viewing a convex lens from front)
    // This creates a dome-like normal field
    float lensHeight = sqrt(max(0.0, 1.0 - dist * dist));
    vec3 normal = normalize(vec3(centeredUv * 2.0, lensHeight));

    // View direction (looking straight at screen)
    vec3 viewDir = vec3(0.0, 0.0, 1.0);

    // Refraction calculation based on Snell's law
    float eta = 1.0 / uIor;
    vec3 refracted = refract(-viewDir, normal, eta);

    // The refraction offset is based on the refracted ray and thickness
    // Thicker glass = more displacement
    vec2 refractOffset = refracted.xy * uThickness * 0.015;

    // Add velocity-based wobble for liquid feel
    float wobble = sin(uTime * 3.0 + dist * 6.0) * length(uMouseVelocity) * 0.008;
    refractOffset += centeredUv * wobble;

    // Sample with chromatic aberration
    vec2 baseUv = vScreenUv + refractOffset;

    // Chromatic aberration - separate RGB channels slightly
    float aberration = uChromaticAberration * (1.0 - lensHeight);
    vec2 aberrationDir = normalize(centeredUv + 0.001);

    float r = texture2D(uSceneTexture, baseUv + aberrationDir * aberration).r;
    float g = texture2D(uSceneTexture, baseUv).g;
    float b = texture2D(uSceneTexture, baseUv - aberrationDir * aberration).b;

    vec3 refractedColor = vec3(r, g, b);

    // Fresnel effect - edges are more reflective/lighter
    float fresnel = pow(1.0 - dot(viewDir, normal), 3.0);

    // Subtle specular highlights
    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
    vec3 halfVec = normalize(lightDir + viewDir);
    float specular = pow(max(dot(normal, halfVec), 0.0), 64.0) * 0.15;

    // Combine
    vec3 finalColor = refractedColor;

    // Subtle fresnel highlight at edges
    finalColor += vec3(1.0) * fresnel * 0.12;
    finalColor += vec3(1.0) * specular;

    // Very subtle glass tint
    finalColor *= vec3(0.99, 0.995, 1.0);

    float alpha = uOpacity * circleMask;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

type LiquidGlassBubbleProps = {
  scene: Scene;
  images: Map<string, import("./webgl-images-context").RegisteredImage>;
  isDark: boolean;
};

export function LiquidGlassBubble({
  scene,
  images,
  isDark,
}: LiquidGlassBubbleProps) {
  const meshRef = useRef<Mesh>(null);
  const { size, gl, camera } = useThree();
  const lastTimeRef = useRef(0);
  const targetPos = useRef(new Vector3(0, 0, 100));
  const currentPos = useRef(new Vector3(0, 0, 100));
  const scaleRef = useRef(0);
  const isOverImageRef = useRef(false);
  const targetRadiusRef = useRef(LENS_RADIUS_DOT);
  const currentRadiusRef = useRef(LENS_RADIUS_DOT);
  // PERF: Track last size to avoid unnecessary uniform updates
  const lastSizeRef = useRef({ width: 0, height: 0 });

  // FBO to capture scene for refraction
  const fbo = useFBO(size.width, size.height, {
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    format: RGBAFormat,
    stencilBuffer: false,
    depthBuffer: true,
  });

  // Update FBO size
  useEffect(() => {
    fbo.setSize(size.width, size.height);
  }, [fbo, size.width, size.height]);

  // Create material with MeshTransmissionMaterial-like properties
  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uSceneTexture: { value: null },
        uResolution: { value: new Vector2(1, 1) },
        uTime: { value: 0 },
        uMouseVelocity: { value: new Vector2(0, 0) },
        uOpacity: { value: 0 },
        uIsOverImage: { value: 0 },
        uIsOverInteractive: { value: 0 },
        uIsDark: { value: 0 },
        // Transmission material properties
        uIor: { value: 1.25 },
        uThickness: { value: 3.0 },
        uChromaticAberration: { value: 0.06 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Calculate delta time
    const currentTime = state.clock.elapsedTime * 1000;
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    // Update mouse first to check if active
    tickMouse(deltaTime);
    const mouse = getMouse();

    // PERF: Skip expensive FBO render when lens is not visible
    // This saves a full scene render per frame when mouse is inactive
    if (!mouse.isActive && scaleRef.current < 0.01) {
      mesh.visible = false;
      return;
    }

    // Render scene to FBO (without the lens)
    mesh.visible = false;
    gl.setRenderTarget(fbo);
    const bgColor = isDark ? DARK_BG : LIGHT_BG;
    gl.setClearColor(bgColor, 1);
    gl.clear(true, true, false); // Clear color and depth
    gl.render(scene, camera);

    // Convert mouse position to screen coordinates
    const screenX = ((mouse.position.x + 1) / 2) * window.innerWidth;
    const screenY = ((1 - mouse.position.y) / 2) * window.innerHeight;

    // Get current scroll position
    // Use window.scrollY as fallback to match how bounds are calculated
    const lenis = getLenis();
    const scrollY = lenis?.scroll ?? window.scrollY;

    // Check if mouse is over any registered image bounds (with padding for safe area)
    let isOverImage = false;
    for (const image of images.values()) {
      if (!image.bounds) continue;
      const { top, left, width, height } = image.bounds;
      // bounds.top is relative to document, need to account for scroll
      const boundsTop = top - scrollY;
      // Expand hit area by padding for smoother UX
      if (
        screenX >= left - LENS_EXPAND_PADDING &&
        screenX <= left + width + LENS_EXPAND_PADDING &&
        screenY >= boundsTop - LENS_EXPAND_PADDING &&
        screenY <= boundsTop + height + LENS_EXPAND_PADDING
      ) {
        isOverImage = true;
        break;
      }
    }

    // Check if mouse is over interactive DOM elements (links, buttons, etc.)
    let isOverInteractive = false;
    if (!isOverImage) {
      const elementUnderCursor = document.elementFromPoint(screenX, screenY);
      isOverInteractive = isInteractiveElement(elementUnderCursor);
    }

    gl.setRenderTarget(null);
    mesh.visible = true;

    // Update target radius based on content type
    isOverImageRef.current = isOverImage;
    if (isOverImage) {
      targetRadiusRef.current = LENS_RADIUS_FULL;
    } else {
      targetRadiusRef.current = LENS_RADIUS_DOT;
    }

    // Smooth radius animation (faster when expanding, slower when shrinking)
    const radiusEasing = isOverImage || isOverInteractive ? 0.12 : 0.15;
    currentRadiusRef.current +=
      (targetRadiusRef.current - currentRadiusRef.current) * radiusEasing;

    // Update uniforms
    material.uniforms.uSceneTexture.value = fbo.texture;
    // PERF: Only update resolution when size actually changes
    if (
      lastSizeRef.current.width !== size.width ||
      lastSizeRef.current.height !== size.height
    ) {
      material.uniforms.uResolution.value.set(size.width, size.height);
      lastSizeRef.current.width = size.width;
      lastSizeRef.current.height = size.height;
    }
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uMouseVelocity.value.set(
      mouse.velocity.x,
      mouse.velocity.y,
    );

    // Smooth transition for isOverImage (controls glass vs solid dot in shader)
    const targetIsOverImage = isOverImage ? 1 : 0;
    material.uniforms.uIsOverImage.value +=
      (targetIsOverImage - material.uniforms.uIsOverImage.value) * 0.15;

    // Smooth transition for isOverInteractive (controls fake bubble in shader)
    const targetIsOverInteractive = isOverInteractive ? 1 : 0;
    material.uniforms.uIsOverInteractive.value +=
      (targetIsOverInteractive - material.uniforms.uIsOverInteractive.value) * 0.15;

    // Update theme
    material.uniforms.uIsDark.value = isDark ? 1 : 0;

    // Position - cache half sizes to avoid repeated division
    const halfWidth = size.width * 0.5;
    const halfHeight = size.height * 0.5;
    const worldX = mouse.position.x * halfWidth;
    const worldY = mouse.position.y * halfHeight;
    targetPos.current.set(worldX, worldY, 100);
    currentPos.current.lerp(targetPos.current, 0.15);
    mesh.position.copy(currentPos.current);

    // Scale animation (visibility)
    const targetScale = mouse.isActive ? 1 : 0;
    scaleRef.current += (targetScale - scaleRef.current) * 0.1;

    // Apply radius with visibility scale
    mesh.scale.setScalar(currentRadiusRef.current * scaleRef.current);

    // Opacity - always 1.0 when active, 0 when inactive
    const targetOpacity = mouse.isActive ? 1.0 : 0;
    material.uniforms.uOpacity.value +=
      (targetOpacity - material.uniforms.uOpacity.value) * 0.1;
  });

  return (
    <mesh ref={meshRef} frustumCulled={false} material={material}>
      <circleGeometry args={[1, 64]} />
    </mesh>
  );
}

// Wrapper component that manages the scene
export function LiquidGlassBubbleWrapper({ isDark }: { isDark: boolean }) {
  const { scene } = useThree();
  const { images } = useWebGLImages();

  return <LiquidGlassBubble scene={scene} images={images} isDark={isDark} />;
}
