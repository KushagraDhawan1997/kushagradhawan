"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  InstancedMesh,
  Object3D,
  ShaderMaterial,
  PlaneGeometry,
  InstancedBufferAttribute,
} from "three";

// More particles for richer effect
const PARTICLE_COUNT = 150;

// Light source position (normalized, matches tyndall-rays)
const LIGHT_X = 1.2;
const LIGHT_Y = 1.2;

// Depth layers for focus effect (negative z = behind images at z=0)
const NEAR_Z = -5; // Sharp, in focus, just behind images
const FAR_Z = -30; // Blurry, out of focus, further back

// Vertex shader - passes blur amount to fragment
const vertexShader = /* glsl */ `
  attribute float aBlur;
  attribute float aBrightness;

  varying vec2 vUv;
  varying float vBlur;
  varying float vBrightness;

  void main() {
    vUv = uv;
    vBlur = aBlur;
    vBrightness = aBrightness;

    // Apply instance transform then project
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Fragment shader - soft circular particle with variable blur
const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  uniform float uIsDark;

  varying vec2 vUv;
  varying float vBlur;
  varying float vBrightness;

  void main() {
    // Soft circular particle using UV coordinates
    vec2 center = vUv - 0.5;
    float dist = length(center) * 2.0;

    // Discard pixels outside circle
    if (dist > 1.0) {
      discard;
    }

    // Variable softness based on blur amount (subtle effect)
    float softness = 0.4 + vBlur * 0.25; // Range: 0.4 (sharp) to 0.65 (soft)
    float alpha = 1.0 - smoothstep(0.0, softness, dist);

    // Blurry particles are slightly more transparent
    float blurAlphaFactor = 1.0 - vBlur * 0.2;

    // Color based on theme
    // Dark mode: warm light dust
    // Light mode: dark shadow dust
    vec3 darkColor = vec3(1.0, 0.95, 0.88) * vBrightness;
    vec3 lightColor = vec3(0.1, 0.08, 0.05) * vBrightness;
    vec3 color = mix(lightColor, darkColor, uIsDark);

    gl_FragColor = vec4(color, alpha * uOpacity * blurAlphaFactor * 0.6);
  }
`;

type Particle = {
  baseX: number;
  baseY: number;
  z: number;
  speed: number;
  phase: number;
  size: number;
  blur: number; // 0 = sharp, 1 = blurry
  brightness: number;
  distanceFromLight: number;
};

export function DustParticles({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<InstancedMesh>(null);
  const { size } = useThree();
  const dummy = useMemo(() => new Object3D(), []);

  // Generate particles with density weighted toward light source
  const particles = useMemo<Particle[]>(() => {
    const result: Particle[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Use rejection sampling to bias toward top-right
      let x: number, y: number, distFromLight: number;

      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;

        const dx = LIGHT_X - (x * 0.5 + 0.5);
        const dy = LIGHT_Y - (y * 0.5 + 0.5);
        distFromLight = Math.sqrt(dx * dx + dy * dy);
      } while (Math.random() > Math.pow(1 - distFromLight / 2, 2));

      // Random depth - determines blur
      const depthRandom = Math.random();
      // Bias toward extremes for more obvious depth effect
      const biasedDepth = depthRandom < 0.3 ? depthRandom * 0.5 :
                          depthRandom > 0.7 ? 0.75 + depthRandom * 0.25 :
                          depthRandom;
      const z = FAR_Z + biasedDepth * (NEAR_Z - FAR_Z);

      // Blur based on distance from "focal plane" (middle z)
      const focalZ = (NEAR_Z + FAR_Z) / 2;
      const distFromFocal = Math.abs(z - focalZ) / ((NEAR_Z - FAR_Z) / 2);
      const blur = Math.min(1, distFromFocal);

      // Size varies - blurry particles slightly larger (subtle bokeh)
      const baseSize = 2 + Math.random() * 3;
      const sizeWithBokeh = baseSize * (1 + blur * 0.4);

      result.push({
        baseX: x,
        baseY: y,
        z,
        speed: 0.15 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
        size: sizeWithBokeh,
        blur,
        brightness: 0.85 + Math.random() * 0.15,
        distanceFromLight: distFromLight,
      });
    }

    return result;
  }, []);

  // Create instanced attributes for blur and brightness
  const { blurAttr, brightnessAttr } = useMemo(() => {
    const blurArray = new Float32Array(PARTICLE_COUNT);
    const brightnessArray = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < particles.length; i++) {
      blurArray[i] = particles[i].blur;
      brightnessArray[i] = particles[i].brightness;
    }

    return {
      blurAttr: new InstancedBufferAttribute(blurArray, 1),
      brightnessAttr: new InstancedBufferAttribute(brightnessArray, 1),
    };
  }, [particles]);

  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uOpacity: { value: 1 },
        uIsDark: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
  }, []);

  const geometry = useMemo(() => {
    const geo = new PlaneGeometry(1, 1);
    geo.setAttribute("aBlur", blurAttr);
    geo.setAttribute("aBrightness", brightnessAttr);
    return geo;
  }, [blurAttr, brightnessAttr]);

  // Cleanup
  useEffect(() => {
    return () => {
      material.dispose();
      geometry.dispose();
    };
  }, [material, geometry]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Always visible now (both light and dark mode)
    mesh.visible = true;

    const time = state.clock.elapsedTime;

    // Smooth transition for theme change
    const targetIsDark = isDark ? 1 : 0;
    material.uniforms.uIsDark.value +=
      (targetIsDark - material.uniforms.uIsDark.value) * 0.08;

    // Update particle positions
    const halfWidth = size.width * 0.5;
    const halfHeight = size.height * 0.5;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Floating motion - more movement, slight parallax for depth
      const speedFactor = 1 - p.blur * 0.3;
      const floatX = Math.sin(time * p.speed * speedFactor + p.phase) * 0.08;
      const floatY = Math.cos(time * p.speed * speedFactor * 0.8 + p.phase) * 0.06;
      // Add secondary drift for more organic feel
      const driftX = Math.sin(time * p.speed * 0.3 + p.phase * 2.0) * 0.03;
      const driftY = Math.cos(time * p.speed * 0.25 + p.phase * 1.5) * 0.025;

      // Convert to world coordinates
      const worldX = (p.baseX + floatX + driftX) * halfWidth;
      const worldY = (p.baseY + floatY + driftY) * halfHeight;

      dummy.position.set(worldX, worldY, p.z);

      // Size based on distance from light
      const lightFactor = Math.max(0.5, 1 - p.distanceFromLight * 0.3);
      dummy.scale.setScalar(p.size * lightFactor);

      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, PARTICLE_COUNT]}
      frustumCulled={false}
    />
  );
}
