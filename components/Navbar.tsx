import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-5 flex items-center justify-between relative z-30">
      <Link href="/" className="shrink-0">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          priority
        />
      </Link>

      <ul className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-[16px] font-normal text-[#e3e3e3] pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center justify-center shrink-0">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center bg-transparent border-none p-0 cursor-pointer shrink-0"
        aria-label="Open menu"
      >
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </button>
    </nav>
  );
};

export default Navbar;