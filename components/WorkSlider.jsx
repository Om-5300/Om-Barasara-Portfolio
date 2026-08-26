import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";

const projectsData = [

  {
    title: "Fostec Equipment",
    category: "Construction Machinery",
    description:
      "A modern industrial website for FOSTEC Equipment Pvt. Ltd., focused on self-loading concrete mixers and heavy-duty construction machinery, featuring products, applications, benefits and dealer enquiries.",
    path: "/fostecequipment.png",
    live: "https://fostec-equipment.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },


  {
    title: "Stronghold Engineering India",
    category: "Infrastructure Engineering",
    description:
      "A professional engineering website for Stronghold Engineering India, showcasing bridge bearings, expansion joints, rubber products, steel fabrication and specialized bridge repair and rehabilitation solutions.",
    path: "/Stronghold_Engineering_India.png",
    live: "https://stronghold-engineering.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "Patel Engineering and Earthmovers",
    category: "Construction & Heavy Equipment",
    description:
      "A premium business website for a heavy equipment rental company. Integrated with AI-powered chatbots and automated PDF quotation systems using n8n.",
    path: "/patelengineeringandearthmovers.jpg",
    live: "https://patelengineeringandearthmovers.in/",
    tech: ["React.js", "Tailwind CSS", "Vite", "n8n Automation"]
  },

  {
    title: "Nilkanth Real Estate",
    category: "Real Estate",
    description:
      "A modern, responsive business website for a real estate company to showcase residential and commercial properties with a professional user experience.",
    path: "/nilkanthrealestate.jpg",
    live: "https://nilkanthrealestate.com",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "BPC Projects & Infrastructure",
    category: "Construction & Infrastructure",
    description:
      "A premium corporate website for BPC Projects and Infrastructure Pvt Ltd, showcasing its five decades of experience in commercial, industrial, healthcare, government and public infrastructure construction.",
    path: "/bpc_infrastructure_pvt_ltd.png",
    live: "https://bpc-pvt-ltd.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "RNS Construction",
    category: "Construction & Infrastructure",
    description:
      "A premium construction website for RNS Construction, showcasing residential and commercial construction services, completed projects, quality standards and a professional end-to-end building process.",
    path: "/rns_construction.png",
    live: "https://rns-construction-frt.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "Sun Engineers",
    category: "Engineering & Industrial",
    description:
      "A professional industrial website for Sun Engineers, showcasing high-tonnage hydraulic presses, CNC woodworking machinery, custom machine design, hydraulic systems and in-house manufacturing capabilities.",
    path: "/sun_engineers.png",
    live: "https://sun-engineers-digital.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "Virkrupa Engineers",
    category: "Industrial Fabrication",
    description:
      "A professional industrial website for Virkrupa Engineers, specializing in heavy and light-duty fabrication, CNC laser cutting, structural fabrication, stainless steel silos, storage tanks and custom industrial solutions.",
    path: "/virkrupa_engineers.png",
    live: "https://virkrupa-engineeringworks.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "HK Construction",
    category: "Road Construction",
    description:
      "A professional website for H.K. Construction, showcasing end-to-end road construction services including earthwork, sub-base preparation, asphalt finishing, drainage and civil infrastructure projects across Gujarat.",
    path: "/HK_Construction.png",
    live: "https://h-k-construction.vercel.app/",
    tech: ["React.js", "Tailwind CSS", "Vite", "JavaScript"]
  },

  {
    title: "The Art Leaf",
    category: "Luxury Clothes Studio",
    description:
      "A premium handcrafted luxury art studio platform specializing in bespoke designer fabrics, signature fine art, and custom home decor with dynamic service integration.",
    path: "/theartleaf.jpg",
    live: "https://theartleaf.in/",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"]
  },


  {
    title: "Leflour",
    category: "Agri-Commodities",
    description:
      "A premium digital catalog and business platform for high-quality flour and agricultural products, featuring an integrated enquiry system and product showcase.",
    path: "/leflour.jpg",
    live: "https://www.leflour.in/",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP"]
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
