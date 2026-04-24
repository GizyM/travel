import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="mb-24 flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-6 lg:px-20">
        <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
          <Link href="/" className="mb-10 shrink-0">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="flex flex-col gap-4 text-[14px] text-[#7b7b7b]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="/" className="transition hover:text-[#30af5b]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <div className="flex flex-col gap-4 text-[14px] text-[#7b7b7b]">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 transition hover:text-[#30af5b] md:flex-col lg:flex-row"
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    <span className="whitespace-nowrap font-semibold">
                      {link.value}
                    </span>
                  </Link>
                ))}
              </div>
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <ul className="flex gap-4">
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href="/" className="transition hover:opacity-70">
                      <Image src={link} alt="social icon" width={24} height={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="h-px w-full bg-[#a2a2a2]" />

        <p className="w-full text-center text-[14px] text-[#7b7b7b]">
          2024 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap text-[18px] font-bold">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;