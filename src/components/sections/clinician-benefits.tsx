"use client";

import { FadeIn } from "@/components/fade-in";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="section-divider py-20 md:py-28 bg-[#faf7f2]/60">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title and Message */}
          <FadeIn delay={0}>
            <div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#0a1a4d] leading-[1.15] mb-6">
                Healthcare isn’t just about having the technology — it’s about the technology actually helping.
              </h2>
              <p className="text-[16px] text-slate-500 leading-relaxed max-w-xl">
                Coeur.AI is designed to stand alongside healthcare professionals, backing up clinical ears with modern diagnostics that save valuable time during high-volume triage.
              </p>
            </div>
          </FadeIn>

          {/* Right Column: Benefits Grid */}
          <FadeIn delay={100}>
            <div className="space-y-6">
              
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 flex gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-blue-200 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052ff] shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1a4d] mb-1">
                    Faster screening, without cutting corners
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Instantly isolates heartbeat patterns and lung auscultation signals to support rapid point-of-care decisions.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 flex gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-emerald-200 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1a4d] mb-1">
                    Designed to fit naturally into clinical workflows
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Requires no complex setups or disruptive steps — backing up years of practice seamlessly.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 flex gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-purple-200 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0a1a4d] mb-1">
                    AI-assisted insights healthcare professionals can rely on
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Advanced machine learning models calibrated specifically to flag key anomalies with clinical consistency.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
