'use client';

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#ff0000", "#ff4500", "#cc0000", "#ff8c00"], // Fire colors
          },
          move: {
            direction: "top", // Flames rise
            enable: true,
            outModes: {
              default: "destroy", // Destroy when reaching top
            },
            random: true,
            speed: { min: 2, max: 6 },
            straight: false,
            trail: {
              enable: false,
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200, // Very dense for flame effect
          },
          opacity: {
            value: { min: 0.1, max: 0.9 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
              destroy: "min" // Fade out as they rise
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 10, max: 40 }, // Large overlapping particles for flame base
            animation: {
              enable: true,
              speed: 5,
              sync: false,
              destroy: "min" // Shrink as they rise
            },
          },
          blendMode: "screen", // Creates that intense glowing fire effect
        },
        emitters: {
          direction: "top",
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.1
          },
          rate: {
            delay: 0.1,
            quantity: 5
          },
          size: {
            width: 100,
            height: 0
          },
          position: {
            y: 100, // Emit from the very bottom
            x: 50
          }
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
