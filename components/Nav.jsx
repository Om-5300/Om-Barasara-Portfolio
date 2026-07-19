import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  // Background Prefetching: Start prefetching all routes when menu is opened
  useEffect(() => {
    if (isOpen) {
      navData.forEach((link) => {
        router.prefetch(link.path);
      });
    }
  }, [isOpen, router]);

  // Handle menu toggle
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Desktop Navigation Pill */}
      <nav className="nav_wrapper">
        <div className="nav_container">
          {navData.map((link, i) => (
            <Link
              className={`nav_link ${router.pathname === link.path ? "active" : ""}`}
              href={link.path}
              key={i}
            >
              <div className="nav_icon">
                <link.Icon aria-hidden />
              </div>
              <span className="nav_text">{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Header Bar (Only visible when menu is open) */}
      <div className={`mobile_menu_header ${isOpen ? "open" : ""}`}>
         <div className="mobile_menu_logo">
            <Image src="/logo.svg" alt="logo" width={180} height={35} priority />
         </div>
      </div>

      {/* Mobile Burger Button */}
      <div
        className={`burger_btn ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile_nav_overlay ${isOpen ? "open" : ""}`}>
        <div className="mobile_nav_links">
          {navData.map((link, i) => (
            <Link
              className={`mobile_nav_link ${router.pathname === link.path ? "active" : ""}`}
              href={link.path}
              key={i}
              // Menu closes automatically via router.asPath useEffect
            >
              <link.Icon />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
