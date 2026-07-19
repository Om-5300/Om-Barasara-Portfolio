import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

// Global Styles
import "../styles/globals.css";

// Component & Page Styles
import "../styles/Nav.css";
import "../styles/Header.css";
import "../styles/Socials.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Services.css";
import "../styles/Work.css";
import "../styles/Testimonials.css";
import "../styles/Contact.css";
import "../styles/Layout.css";
import "../styles/Avatar.css";
import "../styles/ProjectsBtn.css";
import "../styles/Transition.css";
import "../styles/Decorations.css";
import "../styles/ServiceSlider.css";
import "../styles/WorkSlider.css";
import "../styles/TestimonialSlider.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
