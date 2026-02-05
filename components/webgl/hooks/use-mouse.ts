"use client";

import { useEffect, useCallback } from "react";
import { Vector2 } from "three";

type MouseState = {
  position: Vector2;
  target: Vector2;
  velocity: Vector2;
  isActive: boolean;
};

// Singleton mouse state - shared across all consumers
let mouseState: MouseState = {
  position: new Vector2(0, 0),
  target: new Vector2(0, 0),
  velocity: new Vector2(0, 0),
  isActive: false,
};

let isInitialized = false;

// Easing factor - lower = smoother/slower, higher = snappier
const EASING = 0.12;
const VELOCITY_DECAY = 0.85;

function handleMouseMove(e: MouseEvent) {
  // Normalize to -1 to 1 range (centered)
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = -((e.clientY / window.innerHeight) * 2 - 1); // Flip Y for WebGL
  mouseState.target.set(x, y);
  mouseState.isActive = true;
}

function handleMouseLeave() {
  mouseState.isActive = false;
}

function initMouse() {
  if (isInitialized || typeof window === "undefined") return;

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseleave", handleMouseLeave);
  isInitialized = true;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function cleanupMouse() {
  if (!isInitialized || typeof window === "undefined") return;

  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseleave", handleMouseLeave);
  isInitialized = false;
}

// Call this in useFrame to update position with easing
export function tickMouse(deltaTime: number) {
  const dt = Math.min(deltaTime, 50) / 16.67; // Normalize to 60fps

  // Calculate velocity before updating position
  const dx = mouseState.target.x - mouseState.position.x;
  const dy = mouseState.target.y - mouseState.position.y;

  // Update velocity (for effects that need it)
  mouseState.velocity.x = dx * EASING * dt;
  mouseState.velocity.y = dy * EASING * dt;

  // Apply easing
  mouseState.position.x += mouseState.velocity.x;
  mouseState.position.y += mouseState.velocity.y;

  // Decay velocity
  mouseState.velocity.multiplyScalar(VELOCITY_DECAY);
}

export function getMouse(): MouseState {
  return mouseState;
}

// Get mouse in pixel coordinates
export function getMousePixels(viewportWidth: number, viewportHeight: number): Vector2 {
  return new Vector2(
    ((mouseState.position.x + 1) / 2) * viewportWidth,
    ((1 - mouseState.position.y) / 2) * viewportHeight
  );
}

// Hook for components that need mouse initialization
export function useMouseSetup() {
  useEffect(() => {
    initMouse();
    return () => {
      // Don't cleanup on unmount - other components might be using it
      // Cleanup happens when the app unmounts
    };
  }, []);
}

// Hook for R3F components - returns current position
export function useMouse() {
  const setup = useCallback(() => {
    initMouse();
  }, []);

  useEffect(() => {
    setup();
  }, [setup]);

  return {
    getMouse,
    getMousePixels,
    tickMouse,
  };
}
