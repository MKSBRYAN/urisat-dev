'use client'
import React from "react";
import Particles from "react-tsparticles";
const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: { number: { value: 50 }, size: { value: 3 } },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
};
export default ParticlesBackground;
