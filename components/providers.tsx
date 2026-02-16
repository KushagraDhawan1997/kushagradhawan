"use client";

import { Theme, ThemePanel, Box } from "@kushagradhawan/kookie-ui";
import { WebGLImagesProvider } from "@/components/webgl";

// TODO: Re-enable WebGL
// WebGL is globally disabled. To restore it:
//
// 1. Add imports:
//    import { useState, useEffect } from "react";
//    import dynamic from "next/dynamic";
//    import { useReducedMotion } from "@/components/webgl";
//    import { useLenisSetup } from "@/components/webgl/hooks/use-lenis";
//
// 2. Add WebGLCanvas dynamic import:
//    const WebGLCanvas = dynamic(
//      () => import("@/components/webgl/webgl-canvas").then((mod) => mod.WebGLCanvas),
//      { ssr: false },
//    );
//
// 3. Add detection hooks (useIsMobile, useIsSafari) and WebGLLayer component.
//    See git history: git diff HEAD~1 -- components/providers.tsx
//
// 4. Change <WebGLImagesProvider enabled={false}> to enabled={webglEnabled}
//    and render <WebGLLayer /> as a child.

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme
      accentColor="gray"
      grayColor="auto"
      material="solid"
      radius="medium"
      fontFamily="sans"
    >
      <WebGLImagesProvider enabled={false}>
        {children}
      </WebGLImagesProvider>
      <ThemePanel defaultOpen={false} />
    </Theme>
  );
}

export { Box };
