import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import {
  SiFramer,
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          FaNodeJs,
        ],
      },
      {
        title: "AI & Backend",
        icons: [FaPython, SiFastapi, SiMongodb, SiMysql, FaRobot, FaBrain],
      },
      {
        title: "Tools",
        icons: [FaFigma, SiFramer, FaDatabase],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full-Stack Developer - Mayora Infotech",
        stage: "Jan 2026 - May 2026",
        description: "Leading the development of an AI-Powered Sales Executive Agent. Implementing RAG (Retrieval-Augmented Generation) and Vector Embeddings to automate lead discovery and personalized client outreach.",
      },
      {
        title: "AI Agent Intern - Aigentora",
        stage: "June 2025 - July 2025",
        description: "Built a sophisticated AI chatbot for equipment rentals using n8n. Integrated Google Calendar and automated PDF generation to create a seamless, end-to-end automation workflow.",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.Tech CSE - Pandit Deendayal Energy University",
        stage: "2022 - 2026",
        description: "Specializing in Computer Science & Engineering. Actively participating in AI research and web development workshops while maintaining a strong academic focus.",
      },
      {
        title: "HSC - Navyug Vidyalaya, Morbi",
        stage: "2020 - 2022",
        description: "Focused on core science subjects. Achieved exceptional results in competitive exams, demonstrating a strong analytical foundation.",
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "Cyber Security Fundamentals - IBM",
        stage: "2023",
        description: "Gained insights into the evolving landscape of cybersecurity, including network security, data protection, and incident response.",
      },
      {
        title: "Incubation & Entrepreneurship - NPTEL",
        stage: "2023",
        description: "Explored the startup ecosystem, learning about business model canvas, funding stages, and the process of bringing innovative ideas to market.",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="about_wrapper">
      <Circles />

      <div className="container about_container">

        {/* 1. Header Section */}
        <div className="about_header">
          <div className="about_header_text">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 about_title"
            >
              Building <span className="text-accent">Intelligent</span> Systems with Modern Tech.
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              className="about_description"
            >
              I am Om Barasara, a tech enthusiast driven by the potential of AI to transform
              how we interact with the digital world. With a strong foundation in Full-stack
              development and a growing expertise in AI Agents, I strive to create solutions
              that are not only functional but also intelligent and intuitive.
            </motion.p>
          </div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="about_main_content">

          {/* Detailed Biography / Philosophy */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="about_philosophy"
          >
            <h3 className="h3">My Journey</h3>
            <p>
              My journey in tech began with a curiosity about how the web works, which quickly evolved into a passion for building complex applications. Currently, I am deeply immersed in the world of Artificial Intelligence, specifically exploring Retrieval-Augmented Generation (RAG) and LLM-powered agents.
            </p>
            <p>
              I believe that the best digital products are born at the intersection of robust backend architecture and seamless user experiences. Whether it's crafting a responsive frontend in React or architecting an AI-driven automation workflow, I am committed to excellence and continuous learning.
            </p>
            <div className="about_quote">
              "Turning complex problems into elegant, intelligent solutions."
            </div>
          </motion.div>

          {/* Info Panel with Tabs */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="about_info_panel"
          >
            {/* Tabs List */}
            <div className="about_tabs_list">
              {aboutData.map((item, itemI) => (
                <button
                  key={itemI}
                  className={`about_tab_btn ${index === itemI ? "active" : ""}`}
                  onClick={() => setIndex(itemI)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Content for Active Tab */}
            <div className="about_items_container">
              {aboutData[index].info.map((item, itemI) => (
                <div key={itemI} className="about_card_item">
                  <div className="about_item_top">
                    <span className="about_item_name">{item.title}</span>
                    {item.stage && <span className="about_item_date">{item.stage}</span>}
                  </div>

                  {/* Skill Icons if any */}
                  {item.icons && (
                    <div className="about_item_icons">
                      {item.icons.map((Icon, iconI) => (
                        <div key={iconI} className="about_skill_icon">
                          <Icon />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.description && (
                    <p className="about_item_desc">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
