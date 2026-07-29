import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="pt-20 md:pt-28 pb-0 md:pb-0 bg-[#f8fafc]/50 section-divider">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl text-center">
        
        {/* Header copy */}
        <FadeIn>
          <h2 className="text-[36px] md:text-[50px] font-bold leading-tight tracking-tight text-[#0a1a4d] mb-4">
            Let’s Make Cardiac Screening Smarter
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#0a1a4d]/75 leading-relaxed max-w-2xl mx-auto mb-10">
            See how Coeur.AI brings AI and healthcare together to support faster, more informed screening.
          </p>
        </FadeIn>

        {/* Buttons / Actions */}
        <FadeIn delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            
            {/* Demo CTA */}
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-[#0052ff] hover:bg-[#0040d0] text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Google Play badge */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.logicboots.coeurai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 h-14 px-6 rounded-xl border border-slate-200 bg-white hover:border-[#0052ff]/30 hover:shadow-md transition-all duration-200"
              aria-label="Download Coeur AI on Google Play"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#0a1a4d] shrink-0" aria-hidden="true">
                <path d="M3.18 23.76a2 2 0 0 0 2.24-.22l12.49-7.2-2.82-2.82L3.18 23.76ZM.5 1.34A2 2 0 0 0 0 2.68v18.64a2 2 0 0 0 .5 1.34l.07.07 10.46-10.46v-.24L.57 1.27.5 1.34ZM20.32 10.54l-2.94-1.7-3.18 3.18 3.18 3.18 2.96-1.71a2.12 2.12 0 0 0 0-2.95ZM5.42.46 17.91 7.66 15.09 10.48 4.63.02a2 2 0 0 1 .79.44Z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold leading-none mb-0.5 uppercase tracking-wider">GET IT ON</p>
                <p className="text-[14px] font-semibold text-[#0a1a4d] leading-none">Google Play</p>
              </div>
            </Link>

            {/* Apple App Store badge — coming soon */}
            <span
              className="inline-flex items-center gap-3 h-14 px-6 rounded-xl border border-slate-100 bg-slate-50/50 cursor-not-allowed opacity-60 select-none"
              title="App Store — Coming Soon"
              aria-label="Download on the App Store (coming soon)"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-slate-400 shrink-0" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold leading-none mb-0.5 uppercase tracking-wider">DOWNLOAD ON THE</p>
                <p className="text-[14px] font-semibold text-slate-400 leading-none">App Store <span className="text-[9px] font-normal text-slate-400/70 lowercase">soon</span></p>
              </div>
            </span>

          </div>
        </FadeIn>

        {/* Showcase Image Banner */}
        <FadeIn delay={150}>
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.005]">
            <img
              src="/coeur-app-showcase.png"
              alt="Coeur AI Application Dashboard and Features Showcase"
              className="w-full h-auto object-cover"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
