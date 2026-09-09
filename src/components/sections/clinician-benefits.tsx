"use client";

import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Award } from "lucide-react";

export default function ClinicianBenefitsSection() {
  return (
    <section id="clinical-evidence" className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinical Rationale & Key Evidence Counters (6 Cols) */}
          <FadeIn delay={0} className="lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
                <Award className="w-3.5 h-3.5" />
                Validated Clinical Outcomes
              </div>

              <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-bold text-[#1C1C1C] leading-[1.12] tracking-[-0.02em] mb-6">
                Technology That Elevates <br />
                <span className="text-[#E8234A]">Clinical Confidence.</span>
              </h2>

              <p className="text-[17px] text-[#6B7280] leading-relaxed mb-8">
                Coeur.AI does not replace clinical judgment; it augments it with instantaneous phonetic telemetry, eliminating subjective hearing variance in fast-paced medical wards.
              </p>

              {/* Stat Counters Matrix */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-sm">
                  <div className="text-[36px] font-bold text-[#1C1C1C] tracking-tight mb-1 stat-number">
                    96.8<span className="text-[#E8234A]">%</span>
                  </div>
                  <div className="text-[13px] font-bold text-[#1C1C1C] mb-1">Sensitivity Rate</div>
                  <div className="text-[12px] text-[#6B7280]">For hemodynamically significant murmurs</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-sm">
                  <div className="text-[36px] font-bold text-[#1C1C1C] tracking-tight mb-1 stat-number">
                    &lt; 5<span className="text-[#E8234A]">s</span>
                  </div>
                  <div className="text-[13px] font-bold text-[#1C1C1C] mb-1">Inference Latency</div>
                  <div className="text-[12px] text-[#6B7280]">Point-of-care feedback with zero cloud dependency</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/demo" className="btn-primary h-11 px-6 text-[14px]">
                  <span>Request Full Clinical Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Benefits Cards (6 Cols) */}
          <FadeIn delay={100} className="lg:col-span-6">
            <div className="space-y-4">
              
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl border border-[#E5DFD3] p-6 flex gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#1C1C1C] mb-1">
                    Rapid Triage Without Cutting Corners
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed">
                    Automated segmentation isolates S1, S2, systolic murmurs, diastolic rumbles, and wheezes in real time during standard physical exams.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl border border-[#E5DFD3] p-6 flex gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#1C1C1C] mb-1">
                    Frictionless EHR Integration
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed">
                    One-tap export creates HL7 / FHIR compliant diagnostic attachments for Epic, Cerner, and AthenaHealth, eliminating manual transcription hours.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl border border-[#E5DFD3] p-6 flex gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#1C1C1C] shrink-0">
                  <ShieldCheck className="h-5 w-5 text-[#E8234A]" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#1C1C1C] mb-1">
                    Absolute Patient Privacy & HIPAA Security
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed">
                    On-device neural inference processes audio strictly in local memory. No audio stream or identifiable health information leaves the physician&apos;s handset without explicit consent.
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
