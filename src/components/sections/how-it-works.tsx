import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import { Bluetooth, BrainCircuit, BarChart3, FileDown } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#faf7f2]/60 overflow-hidden border-t border-[#e4e4e7]">
      {/* Background wavy topography pattern (SVG) */}
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
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0a1a4d] leading-none">
              How it Works
            </h2>
          </div>
        </FadeIn>

        {/* Staggered Card deck */}
        <div className="relative max-w-7xl mx-auto">
          {/* Animated Gradient Flow Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-400 via-emerald-400 via-rose-400 to-purple-400 opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            
            {/* Step 1: Capture */}
            <FadeIn delay={0}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] flex flex-col justify-between">
                {/* Info Area (Top) */}
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#0052ff] text-white text-[9px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 1
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0a1a4d] mb-2 group-hover:text-blue-600 transition-colors">Capture</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Record cardiac data using a compatible device — no extra hardware, no complicated setup.
                  </p>
                </div>
                {/* Illustration Area (Bottom) */}
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-50">
                  <img
                    src="/coeur_step_connect.png"
                    alt="Coeur.AI App - Capture data"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Step 2: Analyze */}
            <FadeIn delay={100}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] flex flex-col justify-between">
                {/* Info Area (Top) */}
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#10b981] text-white text-[9px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 2
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0a1a4d] mb-2 group-hover:text-emerald-600 transition-colors">Analyze</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Coeur.AI’s AI processes the recording and flags patterns worth a closer look.
                  </p>
                </div>
                {/* Illustration Area (Bottom) */}
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-50">
                  <img
                    src="/coeur_step_record.png"
                    alt="Coeur.AI App - Analyze recording"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Step 3: Review */}
            <FadeIn delay={200}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-transparent shadow-[0_10px_35px_rgba(10,26,77,0.04)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(200,16,46,0.18)] flex flex-col justify-between">
                {/* Info Area (Top) */}
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#7c3aed] text-white text-[9px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 3
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0a1a4d] mb-2 group-hover:text-purple-600 transition-colors">Review</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Healthcare professionals review the findings alongside their own expertise. Coeur.AI supports the decision — it doesn’t replace it.
                  </p>
                </div>
                {/* Illustration Area (Bottom) */}
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-50">
                  <img
                    src="/coeur_step_analyze.png"
                    alt="Coeur.AI App - Review findings"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Step 4: Act */}
            <FadeIn delay={300}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] flex flex-col justify-between">
                {/* Info Area (Top) */}
                <div className="p-6 text-left">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-[#ff9100] text-white text-[9px] font-bold shadow-sm tracking-wider uppercase mb-3">
                    Step 4
                  </span>
                  <h3 className="text-[22px] font-bold text-[#0a1a4d] mb-2 group-hover:text-amber-600 transition-colors">Act</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed min-h-[52px]">
                    Move forward with more context, and more confidence.
                  </p>
                </div>
                {/* Illustration Area (Bottom) */}
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-50">
                  <img
                    src="/coeur_step_report.png"
                    alt="Coeur.AI App - Take action"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Large Embedded Video Showcase - Full Bleed */}
        <FadeIn delay={400}>
          <div className="mt-28">
            <div className="text-center mb-12 px-6">
              <h3 className="text-[28px] md:text-[36px] font-bold text-[#0a1a4d] leading-tight mb-4">
                Watch the Coeur.AI workflow demo
              </h3>
              <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
                A 2-minute walkthrough of the full clinical workflow — from connecting your digital stethoscope to generating and sharing a comprehensive PDF report with AI findings.
              </p>
            </div>
            
            {/* Cinematic Full-Bleed Video Frame */}
            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black shadow-2xl overflow-hidden aspect-[16/7] md:aspect-[21/9] lg:aspect-[25/9]">
              <video
                src="/video-project1.mp4"
                className="w-full h-full object-cover opacity-90"
                autoPlay
                muted
                loop
                playsInline
                poster="/coeur-app-showcase.png"
                preload="metadata"
              />
              {/* Soft overlay gradients for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
