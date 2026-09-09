import { FadeIn } from "@/components/fade-in";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#EDE8DC]/60 overflow-hidden border-t border-[#D9D0BF]">
      {/* Background topography wave */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100,150 C300,100 500,300 800,200 C1100,100 1300,250 1600,150" stroke="#0a1a4d" strokeWidth="2" strokeLinecap="round" />
          <path d="M-100,350 C300,250 600,450 900,300 C1200,150 1300,350 1600,300" stroke="#0a1a4d" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 5" />
          <path d="M-100,550 C200,600 500,400 800,550 C1100,700 1300,500 1600,600" stroke="#0a1a4d" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-[#E8234A] uppercase mb-4">
              Point-of-Care Workflow
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1C1C1C] leading-none">
              How It Works
            </h2>
            <p className="mt-4 text-[16px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Four streamlined steps from initial stethoscope placement to actionable clinical summaries.
            </p>
          </div>
        </FadeIn>

        {/* Staggered Card deck */}
        <div className="relative max-w-7xl mx-auto">
          {/* Flow Line */}
          <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#E8234A]/30 via-emerald-400/30 via-purple-400/30 to-amber-400/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            
            {/* Step 1: Capture */}
            <FadeIn delay={0}>
              <div className="group relative bg-[#FDFAF5] rounded-3xl overflow-hidden border border-[#D9D0BF]/50 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between h-full">
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#E8234A] text-white text-[10px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 1
                  </span>
                  <h3 className="text-[22px] font-bold text-[#1C1C1C] mb-2 group-hover:text-[#E8234A] transition-colors">Capture</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Record high-fidelity cardiac and pulmonary acoustic data using any compatible digital stethoscope.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/coeur_step_connect.png"
                      alt="Coeur.AI App - Connect stethoscope and capture auscultation data"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 2: Analyze */}
            <FadeIn delay={100}>
              <div className="group relative bg-[#FDFAF5] rounded-3xl overflow-hidden border border-[#D9D0BF]/50 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between h-full">
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#10b981] text-white text-[10px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 2
                  </span>
                  <h3 className="text-[22px] font-bold text-[#1C1C1C] mb-2 group-hover:text-[#E8234A] transition-colors">Analyze</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    On-device neural models process the PCG waveforms and surface acoustic anomaly patterns in real time.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/coeur_step_record.png"
                      alt="Coeur.AI App - Analyze recording waveforms with AI"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 3: Review */}
            <FadeIn delay={200}>
              <div className="group relative bg-[#FDFAF5] rounded-3xl overflow-hidden border border-[#D9D0BF]/50 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between h-full">
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#7c3aed] text-white text-[10px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 3
                  </span>
                  <h3 className="text-[22px] font-bold text-[#1C1C1C] mb-2 group-hover:text-[#E8234A] transition-colors">Review</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Practitioners review highlighted murmur or wheeze probabilities alongside their expert clinical assessment.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/coeur_step_analyze.png"
                      alt="Coeur.AI App - Clinician reviewing preliminary findings"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 4: Act */}
            <FadeIn delay={300}>
              <div className="group relative bg-[#FDFAF5] rounded-3xl overflow-hidden border border-[#D9D0BF]/50 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between h-full">
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#f59e0b] text-white text-[10px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 4
                  </span>
                  <h3 className="text-[22px] font-bold text-[#1C1C1C] mb-2 group-hover:text-[#E8234A] transition-colors">Act</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Export structured PDF summaries for patient records or specialist referral triage in one tap.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src="/coeur_step_report.png"
                      alt="Coeur.AI App - Generate diagnostic PDF report"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Embedded Video Showcase */}
        <FadeIn delay={400}>
          <div className="mt-24">
            <div className="text-center mb-10 px-6">
              <h3 className="text-[28px] md:text-[36px] font-bold text-[#1C1C1C] leading-tight mb-3">
                Watch the Coeur.AI Clinical Workflow
              </h3>
              <p className="text-[15px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
                A 2-minute walkthrough of the diagnostic pipeline — from device pairing to automated sound pattern classification and PDF export.
              </p>
            </div>
            
            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black shadow-2xl overflow-hidden aspect-[16/7] md:aspect-[21/9] lg:aspect-[25/9]">
              <video
                src="/video-project1.mp4"
                className="w-full h-full object-cover opacity-90"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/coeur-app-showcase.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
