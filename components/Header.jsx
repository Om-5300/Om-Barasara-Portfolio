import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header_wrapper">
      <div className="header_container">
        <div className="header_flex">
          {/* LOGO on the Left */}
          <Link href="/" style={{ color: 'transparent', paddingTop: '0.5rem' }}>
            <Image
              src="/logo.png"
              alt="logo"
              width={250}
              height={48}
              priority
              className="header_logo"
            />
          </Link>

          {/* NAV LINKS on the Right (Integrated from Nav.jsx) */}
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
