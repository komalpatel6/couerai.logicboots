import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GlobalPresenceSection() {
  return (
    <section className="relative bg-[#0a1a4d] pt-16 md:pt-24 pb-8 md:pb-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <p className="text-[11px] font-semibold text-white/60 tracking-[0.15em] uppercase">
                Where It Can Be Used
              </p>
            </div>
            <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-bold leading-[1.15] tracking-tight text-white mb-6">
              Wherever Screening Is Needed
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-8">
              Hospitals. Clinics. Community health camps. Research studies. Coeur.AI is built to work across different healthcare settings — bringing reliable cardiac screening to more people, in more places.
            </p>
            <Link 
              href="/demo" 
              className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#0052ff] hover:bg-[#0040d0] text-white text-[15px] font-semibold transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* World Map Image Showcase */}
        <FadeIn delay={150}>
          <div className="relative mt-12 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1e3a8a]/20 to-[#0f172a]/20 backdrop-blur-sm shadow-2xl">
            <img
              src="/global-map.png"
              alt="Global Presence Map and Clinical Performance Metrics"
              className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </FadeIn>

      </div>

      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
