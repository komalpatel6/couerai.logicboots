"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features", hasDropdown: false },
  { href: "/#how-it-works", label: "How It Works", hasDropdown: false },
  { href: "/#global-presence", label: "Global Presence", hasDropdown: false },
  { href: "/pricing", label: "Pricing", hasDropdown: false },
  { href: "/contact", label: "Contact", hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6 md:px-8 max-w-[1400px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Coeur.AI home">
            <div className="h-10 w-10 rounded-md bg-[#1e40af] flex items-center justify-center">
              <img src="/co-log.png" className="h-6 w-6 object-contain brightness-0 invert" alt="" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[20px] font-bold text-[#0d0d0d] tracking-tight">
                Coeur.AI<sup className="text-[10px] font-normal">®</sup>
              </span>
              <span className="text-[9px] font-medium text-[#6b7280] tracking-wide">
                by LogicBoots
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1 text-[15px] font-medium text-[#374151] hover:text-[#0d0d0d] transition-colors duration-150"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-[#9ca3af] group-hover:text-[#6b7280]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-[14px] font-semibold transition-all duration-150 shadow-sm hover:shadow-md"
            >
              Get Access
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-white" aria-hidden="true">
                <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#374151] hover:text-[#0d0d0d] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[72px] items-center justify-between px-6 border-b border-[#e5e7eb]">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <div className="h-10 w-10 rounded-md bg-[#1e40af] flex items-center justify-center">
              <img src="/co-log.png" className="h-6 w-6 object-contain brightness-0 invert" alt="" aria-hidden="true" />
            </div>
            <span className="text-[20px] font-bold text-[#0d0d0d]">Coeur.AI</span>
          </Link>
          <button
            className="p-2 text-[#374151] hover:text-[#0d0d0d] transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-6 pt-4 gap-0 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[17px] font-medium text-[#374151] hover:text-[#0d0d0d] border-b border-[#f3f4f6] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 pb-6">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 h-12 rounded-md bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-[16px] font-semibold transition-colors w-full"
            >
              Get Access
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
