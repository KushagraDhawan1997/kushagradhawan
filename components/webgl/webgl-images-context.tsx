"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";

export type ImageBounds = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type RegisteredImage = {
  id: string;
  ref: RefObject<HTMLImageElement | null>;
  bounds: ImageBounds | null;
  textureUrl: string | null;
  borderRadius: number;
};

type WebGLImagesContextValue = {
  getImages: () => Map<string, RegisteredImage>;
  registerImage: (
    id: string,
    ref: RefObject<HTMLImageElement | null>,
    borderRadius?: number
  ) => void;
  unregisterImage: (id: string) => void;
  updateImageBounds: (id: string, bounds: ImageBounds) => void;
  updateTextureUrl: (id: string, url: string) => void;
  subscribe: (callback: () => void) => () => void;
  isEnabled: boolean;
};

const WebGLImagesContext = createContext<WebGLImagesContextValue | null>(null);

export function useWebGLImages() {
  const context = useContext(WebGLImagesContext);
  if (!context) {
    throw new Error(
      "useWebGLImages must be used within a WebGLImagesProvider"
    );
  }

  // Subscribe to changes and get current images
  const images = useSyncExternalStore(
    context.subscribe,
    context.getImages,
    context.getImages
  );

  return {
    images,
    isEnabled: context.isEnabled,
  };
}

// For components that only need to register (trackers) - subscribes to isEnabled changes
export function useWebGLImagesRegistry() {
  const context = useContext(WebGLImagesContext);
  if (!context) {
    throw new Error(
      "useWebGLImagesRegistry must be used within a WebGLImagesProvider"
    );
  }

  // Subscribe to get isEnabled updates (e.g., Safari detection after hydration)
  useSyncExternalStore(
    context.subscribe,
    () => context.isEnabled,
    () => context.isEnabled
  );

  return {
    registerImage: context.registerImage,
    unregisterImage: context.unregisterImage,
    updateImageBounds: context.updateImageBounds,
    updateTextureUrl: context.updateTextureUrl,
    isEnabled: context.isEnabled,
  };
}

type WebGLImagesProviderProps = {
  children: ReactNode;
  enabled?: boolean;
};

export function WebGLImagesProvider({
  children,
  enabled = true,
}: WebGLImagesProviderProps) {
  // Use ref for the mutable Map - no re-renders on mutation
  const imagesRef = useRef<Map<string, RegisteredImage>>(new Map());
  const subscribersRef = useRef<Set<() => void>>(new Set());
  const versionRef = useRef(0);

  const notify = useCallback(() => {
    versionRef.current++;
    subscribersRef.current.forEach((callback) => callback());
  }, []);

  const getImages = useCallback(() => imagesRef.current, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribersRef.current.add(callback);
    return () => subscribersRef.current.delete(callback);
  }, []);

  const registerImage = useCallback(
    (
      id: string,
      ref: RefObject<HTMLImageElement | null>,
      borderRadius: number = 0
    ) => {
      // Create new Map reference so useSyncExternalStore detects change
      const newMap = new Map(imagesRef.current);
      newMap.set(id, { id, ref, bounds: null, textureUrl: null, borderRadius });
      imagesRef.current = newMap;
      notify();
    },
    [notify]
  );

  const unregisterImage = useCallback(
    (id: string) => {
      // Create new Map reference so useSyncExternalStore detects change
      const newMap = new Map(imagesRef.current);
      newMap.delete(id);
      imagesRef.current = newMap;
      notify();
    },
    [notify]
  );

  const updateImageBounds = useCallback(
    (id: string, bounds: ImageBounds) => {
      const existing = imagesRef.current.get(id);
      if (existing) {
        existing.bounds = bounds;
        // Don't notify for bounds updates - these happen frequently
        // The useFrame loop reads directly from the ref
      }
    },
    []
  );

  const updateTextureUrl = useCallback(
    (id: string, url: string) => {
      const existing = imagesRef.current.get(id);
      if (existing && existing.textureUrl !== url) {
        // Create new Map reference so useSyncExternalStore detects change
        const newMap = new Map(imagesRef.current);
        const updatedImage = { ...existing, textureUrl: url };
        newMap.set(id, updatedImage);
        imagesRef.current = newMap;
        notify();
      }
    },
    [notify]
  );

  // Stable context value - never changes reference
  const contextValue = useRef<WebGLImagesContextValue>({
    getImages,
    registerImage,
    unregisterImage,
    updateImageBounds,
    updateTextureUrl,
    subscribe,
    isEnabled: enabled,
  });

  // Update isEnabled synchronously for immediate reads
  contextValue.current.isEnabled = enabled;

  // Notify subscribers when enabled changes (in effect to avoid render-phase updates)
  useEffect(() => {
    notify();
  }, [enabled, notify]);

  return (
    <WebGLImagesContext.Provider value={contextValue.current}>
      {children}
    </WebGLImagesContext.Provider>
  );
}
