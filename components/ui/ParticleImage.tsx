"use client";

import { useEffect } from "react";

export default function ParticleImage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/images/particle-image/particle-image.min.js";

    script.onload = () => {
      // wait one frame so DOM + dataset is fully ready
      requestAnimationFrame(() => {
        if (window.particleImageDisplay) {
          window.particleImageDisplay("particle-image");
        } else {
          console.error("particleImageDisplay not found");
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="particle-image"
      data-params-src="/images/particle-image/params.json"
      style={{
        width: "100%",
        height: "100vh",
        background: "black"
      }}
    />
  );
}