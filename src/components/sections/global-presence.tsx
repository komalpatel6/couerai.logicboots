import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GlobalPresenceSection() {
  return (
    <section className="relative bg-[#0a1a4d] pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8234A]" />
              <p className="text-[11px] font-semibold text-rose-300 tracking-[0.15em] uppercase">
                Clinical Deployment Reach
              </p>
            </div>
            <h2 className="text-[36px] md:text-[48px] lg:text-[52px] font-bold leading-[1.15] tracking-tight text-white mb-6">
              Wherever Screening Is Needed
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-8">
              Hospitals. Outpatient clinics. Rural health missions. Clinical research centers. Coeur.AI is built to operate flexibly across diverse clinical environments — bringing reliable auscultation intelligence to more communities.
            </p>
            <Link 
              href="/demo" 
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-[#E8234A] hover:bg-[#C4182E] text-white text-[15px] font-semibold transition-all duration-150 shadow-lg hover:shadow-[0_4px_20px_rgba(232,35,74,0.4)] hover:-translate-y-0.5"
            >
              Request Institutional Pilot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* World Map Image Showcase */}
        <FadeIn delay={150}>
          <div className="relative mt-12 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1e3a8a]/20 to-[#0f172a]/40 backdrop-blur-sm shadow-2xl">
            <Image
              src="/global-map.png"
              alt="Coeur.AI global presence map and clinical validation footprint"
              width={1400}
              height={700}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </FadeIn>

      </div>

      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8234A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
