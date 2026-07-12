"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: -1 },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 250,
                links: { opacity: 0.8, color: "#d99a2b" }
              }
            },
          },
          particles: {
            color: { value: "#d99a2b" },
            links: {
              color: "#d99a2b",
              distance: 180,
              enable: true,
              opacity: 0.25,
              width: 1.5,
              triangles: {
                enable: true,
                opacity: 0.05
              }
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.8,
              straight: true,
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 65,
            },
            opacity: { value: 0.6 },
            shape: { 
              type: ["triangle", "square", "polygon"],
              polygon: { sides: 6 }
            },
            size: { value: { min: 2, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
