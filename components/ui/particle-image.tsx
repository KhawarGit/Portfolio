
"use client";

import { useEffect } from "react";

type ParticleImageProps = {
  className?: string;
};

export default function ParticleImage({
  className = "",
}: ParticleImageProps) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="/images/particle-image/particle-image.min.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "/images/particle-image/particle-image.min.js";

      script.onload = () => {
        requestAnimationFrame(() => {
          window.particleImageDisplay?.("particle-image");
        });
      };

      document.body.appendChild(script);
    } else {
      requestAnimationFrame(() => {
        window.particleImageDisplay?.("particle-image");
      });
    }
  }, []);

  return (
    <div
      id="particle-image"
      data-params-src="/images/particle-image/params.json"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    />
  );
}