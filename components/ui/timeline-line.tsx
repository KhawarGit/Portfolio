"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[4px] -translate-x-1/2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 lg:block"
    >
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="h-full w-full rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
      />

      {/* Soft glow */}
      <div className="absolute inset-0 blur-sm bg-gradient-to-b from-cyan-400/30 via-blue-500/30 to-violet-500/30" />
    </div>
  );
}