import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Transition = () => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#131424",
        zIndex: 9999,
        pointerEvents: "none"
      }}
      variants={transitionVariants}
      initial="animate"
      animate="exit"
      transition={{ duration: 0.1, ease: "linear" }}
    />
  );
};

export default Transition;
