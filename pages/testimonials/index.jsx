import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="testimonials_wrapper">
      <div className="container testimonials_container">

        {/* Header Section */}
        <div className="testimonials_header">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 testimonials_title"
          >
            What clients <span className="text-accent">say.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="testimonials_subtitle"
          >
            I have had the pleasure of working with some amazing clients and teams.
            Here is what they have to say about our collaborations and the
            impact of the intelligent systems we've built together.
          </motion.p>
        </div>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="testimonials_slider_box"
        >
          <TestimonialSlider />
        </motion.div>

      </div>
    </div>
  );
};

export default Testimonials;
