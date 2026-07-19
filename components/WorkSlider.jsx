import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";

const projectsData = [
  {
    title: "The Art Leaf",
    category: "Luxury Clothes Studio",
    description: "A premium handcrafted luxury art studio platform. Specializes in bespoke designer fabrics, signature fine art, and custom home decor with dynamic service integration.",
    path: "/thumb1.jpg", // Replace with a screenshot of theartleaf.in for best results
    live: "https://theartleaf.in/",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"]
  },
  {
    title: "Pet Shop Accessories",
    category: "Full Stack Development",
    description: "An e-commerce platform for pet accessories, enabling customers to browse and purchase products easily. Features a fully functional store with secure checkout.",
    path: "/thumb2.jpg",
    live: "https://github.com/Om-5300/pet-shop",
    tech: ["React.js", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Real Estate Business",
    category: "Web Application",
    description: "A modern, responsive business website for a real estate company to showcase residential and commercial properties with professional user experience.",
    path: "/thumb3.jpg",
    live: "https://nilkanthrealestate.com",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },
  {
    title: "Construction Website",
    category: "Web Development",
    description: "A premium business website for a heavy equipment rental company. Integrated with AI-powered chatbots and automated PDF quotation systems using n8n.",
    path: "/thumb4.jpg",
    live: "https://patelengineeringandearthmovers.in/",
    tech: ["React.js", "Tailwind CSS", "Vite", "n8n Automation"]
  },
];

const WorkSlider = () => {
  return (
    <div className="work_grid">
      {projectsData.map((project, i) => (
        <div className="project_card" key={i}>
          {/* Image */}
          <div className="project_image_box">
            <Image
              src={project.path}
              alt={project.title}
              width={500}
              height={300}
              className="project_img"
            />
          </div>

          {/* Info */}
          <div className="project_info">
            <span className="project_category">{project.category}</span>
            <h3 className="project_title">{project.title}</h3>
            <p className="project_description">{project.description}</p>

            {/* Tech Stack */}
            <div className="project_tech_stack">
              {project.tech.map((tag, index) => (
                <span key={index} className="tech_tag">{tag}</span>
              ))}
            </div>

            {/* Links */}
            <div className="project_links">
              <Link
                href={project.live}
                target="_blank"
                className="project_link_btn live"
              >
                Live <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSlider;
