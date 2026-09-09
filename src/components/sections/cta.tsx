import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px] text-center">
        
        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8234A]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8F5EE] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5EE] border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-5 shadow-sm">
                <Stethoscope className="w-3.5 h-3.5" />
                Empower Your Clinical Practice
              </div>

              <h2 className="text-[34px] sm:text-[46px] md:text-[52px] font-bold leading-[1.08] tracking-[-0.03em] text-[#1C1C1C] mb-6">
                Bring Instant Neural Auscultation <br className="hidden sm:inline" />
                <span className="text-[#E8234A]">to Your Point of Care.</span>
              </h2>

              <p className="text-[17px] md:text-[19px] text-[#6B7280] leading-relaxed mb-10">
                Join forward-thinking cardiology departments, primary care networks, and global research institutions using Coeur.AI to identify silent valvular lesions earlier.
              </p>
            </FadeIn>

            {/* Buttons / Actions */}
            <FadeIn delay={80}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                {/* Primary Demo CTA */}
                <Link 
                  href="/demo" 
                  className="btn-primary-lg w-full sm:w-auto text-[15px] shadow-lg shadow-[#E8234A]/20"
                >
                  <span>Schedule Clinical Demonstration</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Google Play badge */}
                <Link
                  href="https://play.google.com/store/apps/details?id=com.logicboots.coeurai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-lg w-full sm:w-auto text-[14px]"
                  aria-label="Download Coeur.AI on Google Play"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1C1C1C] shrink-0" aria-hidden="true">
                    <path d="M3.18 23.76a2 2 0 0 0 2.24-.22l12.49-7.2-2.82-2.82L3.18 23.76ZM.5 1.34A2 2 0 0 0 0 2.68v18.64a2 2 0 0 0 .5 1.34l.07.07 10.46-10.46v-.24L.57 1.27.5 1.34ZM20.32 10.54l-2.94-1.7-3.18 3.18 3.18 3.18 2.96-1.71a2.12 2.12 0 0 0 0-2.95ZM5.42.46 17.91 7.66 15.09 10.48 4.63.02a2 2 0 0 1 .79.44Z" />
                  </svg>
                  <span>Get on Google Play</span>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 text-[13px] text-[#6B7280]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E8234A]" />
                  No credit card required for pilot access
                </span>
                <span className="hidden sm:inline-block text-neutral-300">•</span>
                <span className="hidden sm:inline-block">
                  Dedicated onboarding & EHR configuration
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Showcase Image Banner */}
          <FadeIn delay={150}>
            <div className="mt-12 rounded-2xl overflow-hidden bg-[#F8F5EE] border border-[#E5DFD3] shadow-md">
              <Image
                src="/coeur-app-showcase.png"
                alt="Coeur.AI Application Dashboard and Features Showcase"
                width={1400}
                height={700}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
