import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#F13024",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
