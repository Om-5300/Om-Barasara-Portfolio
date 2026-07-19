import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Dynamic Import for the heavy slider component
const ServiceSlider = dynamic(() => import("../../components/ServiceSlider"), {
  ssr: false,
});

const Services = () => {
  return (
    <div className="services_wrapper">
      <Circles />
      <div className="container services_container">

        {/* Header Section */}
        <div className="services_header">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 services_title"
          >
            My services <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="services_subtitle"
          >
            I offer specialized services in modern web development and
            AI automation to help businesses scale and innovate. From building
            intelligent RAG systems to crafting pixel-perfect UI/UX designs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="services_grid_section"
        >
          <ServiceSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
