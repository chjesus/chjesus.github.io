import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
      width="100%"
      height="100vh"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 50,
              duration: 1,
              size: 10,
              opacity: 1,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
}

export default Particle;
