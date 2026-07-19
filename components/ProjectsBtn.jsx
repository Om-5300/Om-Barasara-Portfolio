import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="projects_btn_wrapper">
      <Link
        href="/work"
        className="projects_btn_link"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="projects_btn_img"
        />
        <HiArrowRight
          className="projects_btn_icon"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
