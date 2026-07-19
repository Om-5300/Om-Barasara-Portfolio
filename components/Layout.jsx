import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`layout_main layout_bg ${sora.variable}`}
    >
      {/* metadata */}
      <Head>
        <title>Om Barasara | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Om Barasara is a Full-stack Developer and AI Agent Specialist with expertise in React, Python, and LLM integration."
        />
        <meta
          name="keywords"
          content="Om Barasara, Full-stack Developer, AI Agent, React, Next.js, Python, RAG, LLM"
        />
        <meta name="author" content="Om Barasara" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
