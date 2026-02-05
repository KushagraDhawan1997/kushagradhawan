"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh, ShaderMaterial } from "three";

// Vertex shader - full screen quad
const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader - Tyndall light rays from top-right
// Optimized: removed noise, reduced trig ops, single ray frequency
const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  uniform float uIsDark;

  varying vec2 vUv;

  void main() {
    // Early discard for transparent pixels (saves fragment processing)
    if (uOpacity < 0.01) {
      discard;
    }

    // Light source position (top-right corner)
    vec2 toLight = vec2(1.2, 1.2) - vUv;
    float dist = length(toLight);

    // Distance falloff - rays fade as they travel from source
    float falloff = 1.0 - smoothstep(0.0, 1.8, dist);
    falloff *= falloff; // Cheaper than pow(x, 1.5)

    // Early out for pixels too far from light source
    if (falloff < 0.01) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Ray pattern using angle
    float angle = atan(toLight.y, toLight.x);

    // Two ray frequencies for richer look (still cheaper than original 3)
    float rays = pow(abs(sin(angle * 6.0)), 5.0) * 0.7;
    rays += pow(abs(sin(angle * 14.0)), 8.0) * 0.3;

    // Directional falloff - favor bottom-left direction
    vec2 rayDir = toLight / dist;
    float dirFalloff = max(0.0, -rayDir.x - rayDir.y) * 0.6 + 0.4;

    // Combine
    float intensity = rays * falloff * dirFalloff;

    // Color based on theme
    // Dark mode: warm golden light
    // Light mode: cool shadow rays
    vec3 darkColor = vec3(1.0, 0.95, 0.85);
    vec3 lightColor = vec3(0.0, 0.05, 0.12); // Dark blue-ish shadow
    vec3 rayColor = mix(lightColor, darkColor, uIsDark);

    gl_FragColor = vec4(rayColor, intensity * uOpacity * 0.22);
  }
`;

export function TyndallRays({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const { size } = useThree();

  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uOpacity: { value: 0 },
        uIsDark: { value: 0 },
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

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Always visible now (both light and dark mode)
    mesh.visible = true;

    // Smooth transition for theme change
    const targetIsDark = isDark ? 1 : 0;
    material.uniforms.uIsDark.value +=
      (targetIsDark - material.uniforms.uIsDark.value) * 0.08;

    // Always full opacity
    material.uniforms.uOpacity.value = 1;

    // Position - full screen quad
    mesh.position.set(0, 0, 50);
    mesh.scale.set(size.width, size.height, 1);
  });

  return (
    <mesh ref={meshRef} frustumCulled={false} material={material}>
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
}
