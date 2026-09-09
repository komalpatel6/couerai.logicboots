"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

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

  // Keyboard accessibility: close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-[#EDE8DC]"
            : "bg-[#FDFAF5]/90 backdrop-blur-sm border-b border-[#EDE8DC]/50"
        }`}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6 md:px-8 max-w-[1400px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Coeur.AI home">
            <div className="h-10 w-10 rounded-xl bg-[#E8234A] flex items-center justify-center shadow-sm group-hover:bg-[#C4182E] transition-colors">
              <Image
                src="/co-log.png"
                width={24}
                height={24}
                className="h-6 w-6 object-contain brightness-0 invert"
                alt="Coeur.AI Logo"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[20px] font-bold text-[#1C1C1C] tracking-tight group-hover:text-[#E8234A] transition-colors">
                Coeur.AI<sup className="text-[10px] font-normal text-slate-400">®</sup>
              </span>
              <span className="text-[9px] font-medium text-[#6B6455] tracking-wide uppercase">
                by LogicBoots
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1 text-[14.5px] font-medium text-[#1C1C1C]/80 hover:text-[#E8234A] transition-colors duration-150"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-[#9ca3af] group-hover:text-[#E8234A]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#E8234A] hover:bg-[#C4182E] text-white text-[13.5px] font-semibold transition-all duration-150 shadow-sm hover:shadow-[0_4px_14px_rgba(232,35,74,0.3)] hover:-translate-y-0.5"
            >
              Get Access
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#1C1C1C] hover:text-[#E8234A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8234A]/30 rounded-lg"
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
        className={`fixed inset-0 z-40 flex flex-col bg-[#FDFAF5] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[72px] items-center justify-between px-6 border-b border-[#EDE8DC]">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <div className="h-10 w-10 rounded-xl bg-[#E8234A] flex items-center justify-center">
              <Image
                src="/co-log.png"
                width={24}
                height={24}
                className="h-6 w-6 object-contain brightness-0 invert"
                alt="Coeur.AI Logo"
              />
            </div>
            <span className="text-[20px] font-bold text-[#1C1C1C]">Coeur.AI</span>
          </Link>
          <button
            className="p-2 text-[#1C1C1C] hover:text-[#E8234A] transition-colors"
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
              className="py-4 text-[16px] font-medium text-[#1C1C1C] hover:text-[#E8234A] border-b border-[#EDE8DC]/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 pb-6">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#E8234A] hover:bg-[#C4182E] text-white text-[15px] font-semibold transition-colors w-full shadow-md"
            >
              Get Access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
