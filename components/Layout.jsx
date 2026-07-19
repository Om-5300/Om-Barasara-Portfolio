import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const router = useRouter();
  const domain = "https://ombarasara.com"; // Replace with your actual domain
  const canonicalUrl = `${domain}${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <main
      className={`layout_main layout_bg ${sora.variable}`}
    >
      {/* metadata */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Om Barasara | Full-Stack Developer & AI Agent Specialist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Om Barasara is a Full-stack Developer and AI Agent Specialist specializing in React, Next.js, Python, RAG, and LLM integration. Build intelligent digital solutions." />
        <meta name="keywords" content="Om Barasara, Full-stack Developer, AI Agent, AI Specialist, React Developer, Next.js Developer, Python Developer, RAG, LLM, Portfolio, Web Development" />
        <meta name="author" content="Om Barasara" />
        <meta name="theme-color" content="#f13024" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="Om Barasara | Full-Stack Developer & AI Agent Specialist" />
        <meta property="og:description" content="Expert Full-stack Developer and AI Agent Specialist. Specializing in intelligent RAG systems and high-performance web applications." />
        {/* WhatsApp specifically looks for og:image. It's better to use a PNG/JPG than an SVG for link previews */}
        <meta property="og:image" content={`${domain}/avtar.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content="Om Barasara | Full-Stack Developer & AI Agent Specialist" />
        <meta property="twitter:description" content="Om Barasara is a Full-stack Developer and AI Agent Specialist. Explore his portfolio of AI agents and web solutions." />
        <meta property="twitter:image" content={`${domain}/avtar.png`} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Om Barasara",
              "url": domain,
              "image": `${domain}/avtar.png`,
              "jobTitle": "Full-Stack Developer & AI Agent Specialist",
              "description": "Om Barasara is a Full-stack Developer and AI Agent Specialist with expertise in React, Python, and LLM integration.",
              "sameAs": [
                "https://github.com/Om-5300",
                "https://www.linkedin.com/in/om-barasara/",
                "https://wa.me/919913335300"
              ]
            }),
          }}
        />
      </Head>

      <TopLeftImg />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
