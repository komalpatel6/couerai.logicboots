"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#clinical-evidence", label: "Clinical Evidence" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F5EE]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#E5DFD3]"
            : "bg-[#F8F5EE]/75 backdrop-blur-sm border-b border-[#E5DFD3]/40"
        }`}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6 md:px-8 max-w-[1360px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Coeur.AI home">
            <div className="h-10 w-10 rounded-xl bg-[#E8234A] flex items-center justify-center shadow-[0_2px_10px_rgba(232,35,74,0.3)] group-hover:bg-[#C4182E] transition-all duration-200 group-hover:scale-[1.03]">
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
              <div className="flex items-center gap-1.5">
                <span className="text-[19px] font-bold text-[#1C1C1C] tracking-tight group-hover:text-[#E8234A] transition-colors">
                  Coeur.AI
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#E8234A]/10 text-[#E8234A] tracking-wide">
                  PRO
                </span>
              </div>
              <span className="text-[9.5px] font-medium text-[#6B7280] tracking-wider uppercase mt-0.5">
                AI Cardiac Auscultation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-[#E5DFD3]/80 shadow-sm" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-150 ${
                    isActive
                      ? "text-[#E8234A] bg-[#E8234A]/8 font-semibold"
                      : "text-[#1C1C1C]/85 hover:text-[#E8234A] hover:bg-black/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-[13.5px] font-medium text-[#1C1C1C] hover:text-[#E8234A] px-3.5 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/demo"
              className="btn-primary h-10 px-5 text-[13.5px]"
            >
              <span>Request Demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 text-[#1C1C1C] hover:text-[#E8234A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8234A]/30 rounded-xl bg-white/80 border border-[#E5DFD3]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#F8F5EE] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[72px] items-center justify-between px-6 border-b border-[#E5DFD3]">
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
            <div className="flex flex-col">
              <span className="text-[19px] font-bold text-[#1C1C1C]">Coeur.AI</span>
              <span className="text-[9.5px] font-medium text-[#6B7280] tracking-wide uppercase">by LogicBoots</span>
            </div>
          </Link>
          <button
            className="p-2.5 text-[#1C1C1C] hover:text-[#E8234A] transition-colors rounded-xl bg-white border border-[#E5DFD3]"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-6 pt-6 gap-2 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3.5 px-4 rounded-xl text-[16px] font-medium text-[#1C1C1C] hover:bg-white hover:text-[#E8234A] border border-transparent hover:border-[#E5DFD3] transition-all"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 pt-6 border-t border-[#E5DFD3] flex flex-col gap-3">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full h-12 text-[15px]"
            >
              <span>Request Clinical Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-secondary w-full h-12 text-[15px]"
            >
              Contact Sales & Medical Affairs
            </Link>
          </div>

          <div className="mt-auto py-6 flex items-center justify-center gap-6 text-[12px] text-[#6B7280]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E8234A]" />
              HIPAA & GDPR Ready
            </span>
            <span className="flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-[#E8234A]" />
              CE & FDA Pathway
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
