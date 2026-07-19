import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiWhatsappLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/om-barasara/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Om-5300",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:ombarasara123@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/919913335300",
    Icon: RiWhatsappLine,
  },
];

const Socials = () => {
  return (
    <div className="socials_container">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="social_link"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
