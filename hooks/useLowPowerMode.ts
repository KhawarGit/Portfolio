"use client";

import { useEffect, useState } from "react";

/**
 * Heuristic check for devices that will struggle with heavy WebGL/canvas
 * effects: few CPU cores, low RAM (Chrome-only API), a narrow/mobile
 * viewport, or the user explicitly asking for reduced motion. Used to
 * scale back decorative animation complexity rather than disabling it
 * outright.
 */
export function isLowPowerDevice(): boolean {
  if (typeof window === "undefined") return false;

  const nav = window.navigator as Navigator & { deviceMemory?: number };
  const fewCores = (nav.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (nav.deviceMemory ?? 8) <= 4;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const narrowViewport = window.innerWidth < 768;

  return reducedMotion || lowMemory || (fewCores && narrowViewport);
}

/**
 * React hook form of `isLowPowerDevice`, for components that need to
 * react to it in their JSX output. Starts `false` (matching SSR) and
 * flips synchronously on mount before paint — safe for imperative
 * effects, but avoid using it to gate whether a whole subtree's own
 * heavy effects run, since that first `false` render can still kick
 * off expensive work before this resolves. Prefer `isLowPowerDevice()`
 * called directly inside that effect instead.
 */
export function useLowPowerMode() {
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    setLowPower(isLowPowerDevice());
  }, []);

  return lowPower;
}
