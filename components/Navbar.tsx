import { NAV_LINKS } from "../constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface NavbarProps {
  NAV_LINKS: typeof NAV_LINKS;
}

const Navbar = ({ NAV_LINKS }: NavbarProps) => {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar__logoLink">
      <Image src="/hilink-logo.svg" alt="logo" width={74} height={74} />
      </Link>

      <ul className="navbar__links">
        {NAV_LINKS?.map((link) => (
          <li key={link.key} className="navbar__item">
            <Link href={link.href} className="navbar__link">
            {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" full={false} />
      </div>

      <button className="navbar__menuBtn" type="button">
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>
    </nav>
  );
};

export default Navbar
