"use client";

import Script from "next/script";

export default function ParticlesBackground() {
  const initParticles = () => {
    if (typeof window !== "undefined" && (window as any).particlesJS) {
        (window as any).particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      },
    },

    color: {
      value: "#60a5fa", // blue
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.8,
      random: false,
    },

    size: {
      value: 3,
      random: true,
    },

    line_linked: {
      enable: true,
      distance: 85, // connectRadius
      color: "#60a5fa",
      opacity: 0.35,
      width: 1.3,
    },

    move: {
      enable: true,
      speed: 4, // matches demo speed
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },

  interactivity: {
    detect_on: "window",

    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },

      onclick: {
        enable: false,
      },

      resize: true,
    },

    modes: {
      repulse: {
        distance: 45,
        duration: 0.2,
      },

      grab: {
        distance: 90,
        line_linked: {
          opacity: 0.5,
        },
      },

      push: {
        particles_nb: 4,
      },
    },
  },

  retina_detect: true,
});
    }
  };

  return (
    <>
      <Script
        src="/particles/particles.js"
        strategy="afterInteractive"
        onLoad={initParticles}
      />
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <div
        id="particles-js"
        className="w-full h-full"
      />
      </div>
    </>
  );
}