
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
        // particles: {
        // number: {
        //     value: 180,
        //     density: {
        //     enable: true,
        //     value_area: 1200,
        //     },
        // },

        // color: {
        //     value: "#3b82f6", // or "#ffffff" to match the original exactly
        // },

        // shape: {
        //     type: "random",
        // },

        // opacity: {
        //     value: 0.35,
        //     random: true,
        // },

        // size: {
        //     value: 3,
        //     random: true,
        // },

        // line_linked: {
        //     enable: true,
        //     distance: 220,
        //     color: "#3b82f6",
        //     opacity: 0.25,
        //     width: 1,
        // },

        // move: {
        //     enable: true,
        //     speed: 2.5,
        //     direction: "none",
        //     random: false,
        //     straight: false,
        //     out_mode: "out",
        //     bounce: false,
        //     attract: {
        //     enable: false,
        //     rotateX: 600,
        //     rotateY: 1200,
        //     },
        // },
        // },

        particles: {
          number: {
            value: 240, // ✅ much fewer particles
            density: {
              enable: true,
              value_area: 1600, // ✅ spreads them out more
            },
          },

          color: {
            value: "#3b82f6",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.25, // ✅ softer so text stays readable
            random: true,
          },

          size: {
            value: 2.2, // slightly smaller = cleaner UI
            random: true,
          },

          line_linked: {
            enable: true,
            distance: 260, // ✅ BIGGER connection lines
            color: "#3b82f6",
            opacity: 0.18, // very subtle network
            width: 1,
          },

          move: {
            enable: true,
            speed: 2.0, // slower = premium feel
            direction: "none",
            random: true, // more natural movement
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
            enable: true,
            mode: "grab",
            },

            onclick: {
            enable: true,
            mode: "push",
            },

            resize: true,
        },

        modes: {
            grab: {
            distance: 160,
            line_linked: {
                opacity: 1,
            },
            },

            push: {
            particles_nb: 4,
            },

            bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3,
            },

            repulse: {
            distance: 200,
            duration: 0.4,
            },

            remove: {
            particles_nb: 2,
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