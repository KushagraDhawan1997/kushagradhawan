"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Theme, ThemePanel, Box } from "@kushagradhawan/kookie-ui";
import { WebGLImagesProvider, useReducedMotion } from "@/components/webgl";
import { useLenisSetup } from "@/components/webgl/hooks/use-lenis";

// Flip to true to re-enable WebGL (see memory/webgl-audit.md for known issues)
const ENABLE_WEBGL = false;

// Dynamic import to avoid SSR issues with Three.js
const WebGLCanvas = dynamic(
  () =>
    import("@/components/webgl/webgl-canvas").then((mod) => mod.WebGLCanvas),
  { ssr: false },
);

const MOBILE_BREAKPOINT = 768;

// Detect Safari - known performance issues with WebGL + Lenis
function useIsSafari() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return isSafari;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

function WebGLLayer() {
  const isMobile = useIsMobile();
  const isSafari = useIsSafari();
  const prefersReducedMotion = useReducedMotion();

  const shouldEnableWebGL =
    ENABLE_WEBGL && !isMobile && !isSafari && !prefersReducedMotion;

  // Lenis runs independently of the WebGL flag so smooth scroll can be tested in isolation
  const shouldEnableLenis =
    ENABLE_WEBGL && !isMobile && !isSafari && !prefersReducedMotion;
  useLenisSetup(shouldEnableLenis);

  if (!shouldEnableWebGL) {
    return null;
  }

  return <WebGLCanvas />;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const isSafari = useIsSafari();
  const prefersReducedMotion = useReducedMotion();
  const webglEnabled =
    ENABLE_WEBGL && !isMobile && !isSafari && !prefersReducedMotion;

  return (
    <Theme
      accentColor="gray"
      grayColor="auto"
      material="solid"
      radius="medium"
      fontFamily="mono"
    >
      <WebGLImagesProvider enabled={webglEnabled}>
        {children}
        <WebGLLayer />
      </WebGLImagesProvider>
      <ThemePanel defaultOpen={false} />
    </Theme>
  );
}

export { Box };
