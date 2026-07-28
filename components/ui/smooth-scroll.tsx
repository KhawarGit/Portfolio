"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

// Intercepts clicks on same-page hash links (nav items, the hero's
// "scroll down" cue, CTA buttons) ourselves and drives them through
// Lenis. Letting Lenis's built-in `anchors` option handle this instead
// raced with next/link's own hash-scroll behavior and produced a janky
// jump-then-correct instead of a smooth glide.
function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, "", hash);
      lenis.scrollTo(target as HTMLElement, { offset: -84, duration: 1.1 });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.5,
      }}
    >
      <AnchorScrollHandler />
      {children}
    </ReactLenis>
  );
}
