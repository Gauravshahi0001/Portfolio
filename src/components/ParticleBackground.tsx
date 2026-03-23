"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "bubble" },
        },
        modes: {
          push: { quantity: 4 },
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
            size: 4,
          },
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#00f0ff", "#7000ff", "#ff00d0"],
        },
        links: {
          color: "#00f0ff",
          distance: 150,
          enable: true,
          opacity: 0.03,
          width: 0.5,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: 0.15,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: { 
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          }
        },
        shape: { type: "circle" },
        size: {
          value: { min: 0.5, max: 2.5 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          }
        },
        zIndex: {
          value: { min: 0, max: 100 },
          opacityRate: 0.5,
        }
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="fixed inset-0 z-0 pointer-events-none"
        options={options}
      />
    );
  }

  return null;
}
