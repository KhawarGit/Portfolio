
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: (tagId: string, params: unknown) => void;
    pJSDom?: Array<{
      pJS: {
        fn: {
          vendors: {
            destroypJS: () => void;
          };
        };
      };
    }>;
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    const initParticles = async () => {
      await import("particles.js");

      // Destroy previous instance if it exists
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }

      // Remove leftover canvas if present
      const existingCanvas = document.querySelector("#particles-js canvas");
      if (existingCanvas) {
        existingCanvas.remove();
      }

      if (!window.particlesJS) return;

      window.particlesJS("particles-js", {
particles: {
  number: {
    value: 1300,
    density: {
      enable: true,
      value_area: 1000,
    },
  },

  color: {
    value: "#ffffff",
  },

  shape: {
    type: "circle",
  },

  opacity: {
    value: 0.5,
    random: false,
  },

  size: {
    value: 2,
    random: false,
  },

  line_linked: {
    enable: true,
    distance: 150,
    color: "#ffffff",
    opacity: 0.15,
    width: 1,
  },

  move: {
    enable: true,
    speed: 0.8,
    direction: "none",
    random: false,
    straight: false,
    out_mode: "bounce",
    bounce: false,
  },
},

interactivity: {
  detect_on: "window",

  events: {
    onhover: {
      enable: true,
      mode: "grab",
    },
    resize: true,
  },

  modes: {
    grab: {
      distance: 180,
      line_linked: {
        opacity: 0.35,
      },
    },
  },
},
        retina_detect: true,
      });
    };

    // Delay initialization slightly so the layout is ready
    const timer = setTimeout(() => {
      initParticles();
    }, 100);

    // Reinitialize on resize
    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);

      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 h-full w-full"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "auto"
      }}
    />
  );
}