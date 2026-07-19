import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Development",
    description: "Building scalable web applications using React, Next.js, and Node.js.",
  },
  {
    Icon: RxRocket,
    title: "AI Solutions",
    description: "Developing intelligent AI agents and RAG systems using Python and LLMs.",
  },
  {
    Icon: RxCrop,
    title: "Backend Design",
    description: "Architecting robust APIs and databases with FastAPI, MongoDB, and MySQL.",
  },
  {
    Icon: RxPencil2,
    title: "UI/UX Design",
    description: "Creating intuitive and modern user interfaces with Figma and Tailwind CSS.",
  },
  {
    Icon: RxReader,
    title: "Automation",
    description: "Streamlining workflows using n8n and AI-driven process automation.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="services_grid">
      {serviceData.map((item, i) => (
        <div className="service_card" key={i}>
          {/* icon */}
          <div className="service_icon">
            <item.Icon aria-hidden />
          </div>

          {/* title & description */}
          <div>
            <div className="service_card_title">{item.title}</div>
            <p className="service_card_desc">{item.description}</p>
          </div>

          {/* arrow */}
          <div className="service_arrow">
            <RxArrowTopRight aria-hidden />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;
