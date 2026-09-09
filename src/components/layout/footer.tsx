"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, Mail, Phone, Shield, CheckCircle2 } from "lucide-react";

const navigationLinks = [
  { href: "/#features", label: "Features & Bento" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#clinical-evidence", label: "Clinical Evidence" },
  { href: "/pricing", label: "Pricing & Matrix" },
  { href: "/demo", label: "Schedule Demo" },
];

const clinicalLinks = [
  { href: "/#features", label: "Aortic Stenosis Screening" },
  { href: "/#features", label: "Mitral Regurgitation Triage" },
  { href: "/#features", label: "Pediatric Murmur Detection" },
  { href: "/#how-it-works", label: "EHR FHIR / HL7 Connectors" },
  { href: "/demo", label: "Institutional Pilots" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/contact", label: "HIPAA Security Statement" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#F8F5EE] border-t border-[#E5DFD3] text-[#1C1C1C] pt-16 pb-12">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px]">
        
        {/* Newsletter Capsule Card */}
        <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-xl">
              <span className="text-[12px] font-bold text-[#E8234A] uppercase tracking-widest mb-1.5 block">
                Clinical Research Bulletins
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] tracking-tight mb-2">
                Stay Ahead in AI-Assisted Cardiology
              </h3>
              <p className="text-[14.5px] text-[#6B7280] leading-relaxed">
                Receive peer-reviewed auscultation studies, model benchmark updates, and multi-center clinical trial findings directly in your inbox.
              </p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-3 px-6 py-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Thank you. You have been subscribed to clinical updates.</span>
              </div>
            ) : (
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-2.5 max-w-md"
              >
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your clinical email" 
                  className="w-full sm:w-72 h-12 px-4 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] text-[#1C1C1C] placeholder-[#6B7280] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8234A]/20 focus:border-[#E8234A]"
                  aria-label="Clinical email for newsletter"
                />
                <button 
                  type="submit"
                  className="btn-primary w-full sm:w-auto h-12 px-6 text-sm whitespace-nowrap shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="Coeur.AI home">
              <div className="h-10 w-10 rounded-xl bg-[#E8234A] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#C4182E] transition-colors">
                <Image
                  src="/co-log.png"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain brightness-0 invert"
                  alt="Coeur.AI logo"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[19px] font-bold text-[#1C1C1C] tracking-tight">Coeur.AI</span>
                <span className="text-[9.5px] font-medium text-[#6B7280] uppercase tracking-wider mt-0.5">
                  by LogicBoots
                </span>
              </div>
            </Link>
            <p className="text-[13.5px] text-[#6B7280] leading-relaxed max-w-xs">
              Next-generation clinical decision support platform transforming standard stethoscopes with real-time on-device acoustic neural intelligence.
            </p>
            <div className="flex items-center gap-2 text-[12px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              100% On-Device Neural Engine
            </div>
          </div>

          {/* Col 2: Platform Navigation */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#1C1C1C] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {navigationLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#6B7280] hover:text-[#E8234A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Clinical Modules */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#1C1C1C] mb-4">
              Clinical Modules
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {clinicalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#6B7280] hover:text-[#E8234A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#1C1C1C] mb-4">
              Trust &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#6B7280] hover:text-[#E8234A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Channels */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#1C1C1C] mb-4">
              Clinical Inquiries
            </h4>
            <ul className="space-y-3 text-[13.5px] text-[#6B7280]">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#E8234A]" />
                <span>+91 80 4710 4710</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#E8234A]" />
                <a href="mailto:contact@logicboots.com" className="hover:text-[#E8234A] transition-colors">
                  contact@logicboots.com
                </a>
              </li>
            </ul>
            
            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <Link
                href="https://www.linkedin.com/showcase/coeurai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-xl bg-white border border-[#E5DFD3] hover:border-[#E8234A] hover:text-[#E8234A] flex items-center justify-center text-[#1C1C1C] transition-colors shadow-sm"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/logicboots"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="h-9 w-9 rounded-xl bg-white border border-[#E5DFD3] hover:border-[#E8234A] hover:text-[#E8234A] flex items-center justify-center text-[#1C1C1C] transition-colors shadow-sm"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 rounded-xl bg-white border border-[#E5DFD3] hover:border-[#E8234A] hover:text-[#E8234A] flex items-center justify-center text-[#1C1C1C] transition-colors shadow-sm"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Regulatory & CDS Disclaimer Note */}
        <div className="border-t border-[#E5DFD3] pt-6 pb-6 text-[12px] text-[#6B7280] leading-relaxed">
          <div className="flex items-start gap-2.5">
            <Shield className="h-4 w-4 text-[#E8234A] shrink-0 mt-0.5" />
            <p>
              <strong>Clinical Decision Support Disclaimer:</strong> Coeur.AI is an assistive diagnostic intelligence platform designed to augment the point-of-care workflow of certified healthcare professionals. It does not replace comprehensive echocardiography, 12-lead ECG, or the independent clinical judgment of a licensed physician.
            </p>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-[#E5DFD3] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-[#6B7280]">
          <p>
            &copy; {new Date().getFullYear()} Coeur.AI by LogicBoots. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#E8234A] transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-[#E8234A] transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link href="/medical-disclaimer" className="hover:text-[#E8234A] transition-colors">Medical Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
