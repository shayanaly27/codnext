"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About Us", href: "#why-codnext" },
  { name: "Why CodNext", href: "#why-codnext" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full  backdrop-blur-md">
      <nav className="mx-auto flex h-22 max-w-700 items-center justify-between px-5 sm:px-8 lg:h-22 lg:px-13">
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/logo/codnext-logo.png"
            alt="CodNext"
            width={185}
            height={52}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-[45px]">
          {navLinks.map((link) => {
            const isActive = pathname === "/" && link.href === "#home";
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative inline-block py-2 text-[15px] font-semibold transition-colors ${
                    isActive ? "text-[#a338ff]" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#a83dff] to-[#694dff] shadow-[0_0_9px_#9842ff]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden h-[49px] w-[170px] items-center justify-center gap-3 rounded-[8px] bg-gradient-to-r from-[#0097f5] to-[#9b00ed] text-[15px] font-semibold text-white shadow-[0_0_18px_rgba(35,68,255,0.2)] transition-transform hover:scale-[1.02] lg:flex"
        >
          Let&apos;s Talk
          <span aria-hidden="true" className="text-[22px] font-normal leading-none">↗</span>
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative flex h-5 w-5 flex-col justify-center" aria-hidden="true">
            <span
              className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ease-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-white/10 bg-[#050912] px-5 transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "max-h-[700px] translate-y-0 pb-6 pt-3 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 border-transparent pb-0 pt-0 opacity-0"
        }`}
      >
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === "/" && link.href === "#home";
              return (
                <li key={link.name} className="border-b border-white/[0.08] last:border-0">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block py-4 text-base font-semibold ${isActive ? "text-[#a338ff]" : "text-white/85"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-5">
              <Link
                href="#contact"
                onClick={closeMenu}
                className="flex h-12 items-center justify-center gap-3 rounded-[8px] bg-gradient-to-r from-[#0097f5] to-[#9b00ed] text-sm font-semibold text-white"
              >
                Let&apos;s Talk <span aria-hidden="true" className="text-xl">↗</span>
              </Link>
            </li>
          </ul>
      </div>
    </header>
  );
}