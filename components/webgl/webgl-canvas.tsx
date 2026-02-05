"use client";

import { Suspense, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color } from "three";
import { useWebGLImages } from "./webgl-images-context";
import { WebGLImagePlanes } from "./webgl-image-plane";
import { LiquidGlassBubbleWrapper } from "./liquid-glass-bubble";
import { TyndallRays } from "./tyndall-rays";
import { DustParticles } from "./dust-particles";
import { startR3FSync, stopR3FSync, tickLenis } from "./hooks/use-lenis";
import { useMouseSetup } from "./hooks/use-mouse";

// Detect Safari - runs once at module load
const isSafari =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Theme colors
const LIGHT_BG = 0xffffff;
const DARK_BG = 0x111111;

// Scene controller for Lenis sync and theme-aware background
function SceneController({ isDark }: { isDark: boolean }) {
  const { gl } = useThree();

  // Initialize mouse tracking
  useMouseSetup();

  // Set background color based on theme
  useEffect(() => {
    const bgColor = isDark ? DARK_BG : LIGHT_BG;
    gl.setClearColor(new Color(bgColor), 1);
  }, [gl, isDark]);

  useFrame((state) => {
    tickLenis(state.clock.elapsedTime * 1000);
  });

  return null;
}

export function WebGLCanvas() {
  const { isEnabled, images } = useWebGLImages();
  const [isDark, setIsDark] = useState(false);

  // Safari-optimized DPR: cap at 1.5 to reduce pixel count
  // Chrome/Firefox: allow up to 2
  const dpr = useMemo<[number, number]>(
    () => (isSafari ? [1, 1.5] : [1, 2]),
    []
  );

  // Detect theme from Radix/Kookie UI Theme component
  useEffect(() => {
    const checkTheme = () => {
      // Radix Themes uses .light/.dark classes on the theme root element
      const root = document.documentElement;
      const themeContainer = document.querySelector(".radix-themes");

      // Check if dark class exists on the theme container or root
      const isDarkMode =
        themeContainer?.classList.contains("dark") ||
        root.classList.contains("dark") ||
        root.getAttribute("data-theme") === "dark" ||
        document.body.classList.contains("dark");

      setIsDark(isDarkMode);
    };

    checkTheme();

    // PERF: Only observe specific elements, not entire DOM subtree
    const observer = new MutationObserver(checkTheme);

    // Watch the Radix theme container directly (most common case)
    const themeContainer = document.querySelector(".radix-themes");
    if (themeContainer) {
      observer.observe(themeContainer, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // Also watch documentElement for data-theme changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", checkTheme);
    };
  }, []);

  // Take over Lenis RAF when canvas mounts, release when unmounts
  useEffect(() => {
    if (!isEnabled || images.size === 0) return;

    startR3FSync();
    return () => stopR3FSync();
  }, [isEnabled, images.size]);

  if (!isEnabled || images.size === 0) {
    return null;
  }

  const bgColor = isDark ? "#111111" : "#ffffff";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <Canvas
        orthographic
        camera={{
          zoom: 1,
          position: [0, 0, 500],
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        dpr={dpr}
        style={{ background: bgColor }}
        frameloop="always"
      >
        <SceneController isDark={isDark} />
        <Suspense fallback={null}>
          <WebGLImagePlanes />
          <TyndallRays isDark={isDark} />
          <DustParticles isDark={isDark} />
          <LiquidGlassBubbleWrapper isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  );
}
