"use client";

import { motion } from "framer-motion";

interface TimelineNodeProps {
  className?: string;
}

export default function TimelineNode({
  className = "",
}: TimelineNodeProps) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center ${className}`}
    >
      {/* Outer pulse */}
      <motion.div
        className="absolute h-10 w-10 rounded-full bg-blue-500/20 blur-sm"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle ring */}
      <div className="absolute h-7 w-7 rounded-full border border-violet-400/40 bg-white/80 backdrop-blur dark:bg-neutral-950/80" />

      {/* Core */}
      <motion.div
        className="relative h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 shadow-lg"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}