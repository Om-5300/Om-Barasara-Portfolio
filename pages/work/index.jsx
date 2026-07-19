import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Dynamic Import for the heavy slider component
const WorkSlider = dynamic(() => import("../../components/WorkSlider"), {
  ssr: false,
});

const Work = () => {
  return (
    <div className="work_wrapper">
      <Circles />
      <div className="container work_container">

        {/* Header Section */}
        <div className="work_header">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 work_title"
          >
            My work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="work_subtitle"
          >
            I take pride in building robust and visually appealing digital products.
            Here is a showcase of my projects, ranging from full-stack e-commerce
            solutions to advanced AI-powered automation agents.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="work_grid_section"
        >
          <WorkSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
