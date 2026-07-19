import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Bulb from "../components/Bulb";
import Circles from "../components/Circles";
import Socials from "../components/Socials";
import { fadeIn } from "../variants";

// Dynamic Import for heavy background component
const ParticlesContainer = dynamic(() => import("../components/ParticlesContainer"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="home_wrapper">
      {/* 1. Background Layers */}
      <ParticlesContainer />
      <div className="home_gradient" />
      <Circles />

      {/* 2. Content Container */}
      <div className="home_container">
        <div className="home_layout">
          <div className="explosion_bg" aria-hidden />

          {/* TEXT SECTION */}
          <div className="home_text_section">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="home_subtitle"
            >
              I am <span className="text-accent" style={{ fontWeight: 600 }}>Om Barasara</span>, a Full-stack Developer and AI Agent Specialist.
              I specialize in building intelligent digital solutions, from scalable
              web applications to AI-powered automation agents.
            </motion.p>

            <div className="home_btn_container">
              {/* Projects Button */}
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                className="relative"
              >
                <ProjectsBtn />
              </motion.div>

              {/* Redesigned Social Icons */}
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate="show"
                className="flex items-center"
              >
                <Socials />
              </motion.div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="home_image_section">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="home_avatar_box"
            >
              <Avatar />
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. Decorative Elements */}
      <Bulb />
    </div>
  );
};

export default Home;
