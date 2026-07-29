import Link from "next/link";
import { Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";

const aboutLinks = [
  { href: "https://logicboots.com", label: "About Us", external: true },
  { href: "/#partners", label: "Our Partners" },
  { href: "/#milestones", label: "Milestones" },
  { href: "/contact", label: "Support" },
];

const serviceLinks = [
  { href: "/#solution", label: "Solutions" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

const infoLinks = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Legal Info" },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 md:mt-16 bg-gradient-to-b from-[#0a1a4d] to-[#050c26] text-white">
      {/* Background pattern and radial gradient glow matching brand colors */}
      <div className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.12),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,82,255,0.08),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl pb-12 pt-6 relative z-10">
        
        {/* Newsletter Capsule Card Overlapping Top */}
        <div className="relative -translate-y-20 rounded-3xl bg-[#131e42]/90 backdrop-blur-md border border-white/10 p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                Join Newsletter
              </h3>
              <p className="text-[14px] text-slate-300 leading-relaxed">
                Stay up-to-date with our latest clinical advancements, AI features, and cardiac technology updates.
              </p>
            </div>
            <div className="flex w-full lg:w-auto items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full max-w-md mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-white placeholder-slate-400 text-sm px-4 focus:outline-none w-full lg:w-60"
              />
              <button className="bg-[#0052ff] hover:bg-[#0040d0] active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shrink-0 shadow-md">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mt-[-30px] mb-12">
          
          {/* Col 1: Logo & Description */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Coeur AI home">
              <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <img src="/co-log.png" className="h-6 w-6 object-contain brightness-0 invert" alt="" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-bold text-white tracking-tight">Coeur AI</span>
                <span className="text-[9px] font-medium text-white/60 uppercase tracking-[0.14em] mt-0.5">
                  LogicBoots
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-white/80 leading-relaxed max-w-xs">
              AI-powered cardiac and respiratory diagnostics — putting clinical intelligence in every clinician's hands.
            </p>
          </div>

          {/* Col 2: About Us */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4 uppercase tracking-wider">
              About Us
            </h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4 uppercase tracking-wider">
              Service
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Further Info */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4 uppercase tracking-wider">
              Further Information
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-[15px] font-bold text-white mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-white/75" />
                <span>+91 80 4710 4710</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-white/75" />
                <span>info@logicboots.com</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/showcase/coeurai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Youtube"
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/60">
          <p>
            Copyright &copy; {new Date().getFullYear()} Coeur AI | Powered by LogicBoots
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
