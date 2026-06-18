"use client";

import { useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {/* Mouse-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%,
            rgba(59,130,246,0.18),
            rgba(139,92,246,0.12) 20%,
            transparent 60%)`,
        }}
      />

      {/* Subtle border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-blue-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}