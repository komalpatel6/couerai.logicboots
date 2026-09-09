"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import {
  ArrowRight, ShieldCheck, Zap,
  Activity, Clock, FileSpreadsheet,
  Stethoscope, CheckCircle2, Sparkles, Layers
} from "lucide-react";

export default function ImpactStatsSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px]">

        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Next-Generation Clinical Workflow
            </div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#1C1C1C] leading-[1.12] tracking-[-0.02em] mb-5">
              Overcoming the Limitations of <br className="hidden sm:inline" />
              <span className="text-[#E8234A]">Conventional Auscultation.</span>
            </h2>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              Traditional stethoscopes rely on subjective human hearing in noisy clinics. 
              Coeur.AI equips every clinician with objective acoustic spectrograms and instant neural triage.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">

          {/* ── CARD 1 (Large Bento, 7 Cols): Conventional vs. Coeur.AI ── */}
          <FadeIn delay={50} className="lg:col-span-7">
            <div className="card-elevated p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-md bg-[#E8234A]/10 text-[#E8234A] text-[12px] font-bold tracking-wide uppercase">
                    Clinical Comparison
                  </span>
                  <span className="text-[13px] text-[#6B7280] font-medium">Standard of Care Upgrade</span>
                </div>

                <h3 className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] tracking-tight leading-tight mb-4">
                  Transform Subjective Murmur Detection Into Objective Data
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8">
                  Studies show up to 43% of asymptomatic valvular murmurs are missed during standard primary care checkups due to acoustic ambient noise and human ear limitations.
                </p>

                {/* Comparison Split Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Conventional Side */}
                  <div className="bg-[#F8F5EE] rounded-xl p-5 border border-[#E5DFD3]/80">
                    <div className="text-[13px] font-bold text-[#1C1C1C] flex items-center gap-2 mb-3">
                      <Stethoscope className="w-4 h-4 text-[#6B7280]" />
                      Analog Auscultation
                    </div>
                    <ul className="space-y-2 text-[13px] text-[#6B7280]">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        High inter-observer variability
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        No permanent acoustic record
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        Dependent on ambient noise level
                      </li>
                    </ul>
                  </div>

                  {/* Coeur.AI Side */}
                  <div className="bg-white rounded-xl p-5 border border-[#E8234A]/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#E8234A]/10 rounded-bl-full pointer-events-none" />
                    <div className="text-[13px] font-bold text-[#E8234A] flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#E8234A]" />
                      Coeur.AI Neural Triage
                    </div>
                    <ul className="space-y-2 text-[13px] text-[#1C1C1C] font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8234A] shrink-0 mt-0.5" />
                        Spectrogram PCG visualization
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8234A] shrink-0 mt-0.5" />
                        Standardized EHR-ready export
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E8234A] shrink-0 mt-0.5" />
                        On-device active noise reduction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DFD3]">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#E8234A] hover:text-[#C4182E] transition-colors"
                >
                  Explore clinical validation studies
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 2 (Bento, 5 Cols): Real-time Velocity & Offline Privacy ── */}
          <FadeIn delay={100} className="lg:col-span-5">
            <div className="card-elevated p-8 md:p-10 h-full flex flex-col justify-between bg-gradient-to-b from-white to-[#FDFBF7]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] mb-6">
                  <Clock className="w-6 h-6" />
                </div>

                <div className="text-[38px] md:text-[44px] font-bold text-[#1C1C1C] tracking-tight leading-none mb-2">
                  &lt; 5 Seconds
                </div>
                <div className="text-[14px] font-semibold text-[#E8234A] mb-4">
                  Point-of-Care Neural Latency
                </div>

                <p className="text-[15px] text-[#6B7280] leading-relaxed mb-6">
                  Coeur.AI executes compressed acoustic neural networks locally on your mobile device. Zero cloud dependency ensures instant triage even in remote clinics or emergency rooms.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3]">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-[13px] font-medium text-[#1C1C1C]">
                      Zero patient voice or metadata leaks
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3]">
                    <Layers className="w-5 h-5 text-[#E8234A] shrink-0" />
                    <span className="text-[13px] font-medium text-[#1C1C1C]">
                      Offline AES-256 local encrypted storage
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5DFD3] flex items-center justify-between">
                <span className="text-[12px] text-[#6B7280]">HIPAA & GDPR Ready</span>
                <span className="text-[12px] font-bold text-[#1C1C1C]">iOS & Android</span>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 3 (Bento, 6 Cols): Valvular Pathology Detection ── */}
          <FadeIn delay={150} className="lg:col-span-6">
            <div className="card-elevated p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] text-white flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1C1C1C]">Broad Acoustic Spectrum</h3>
                    <p className="text-[12px] text-[#6B7280]">Comprehensive cardio-respiratory biomarkers</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { title: "Aortic Stenosis", tag: "Systolic Ejection Murmur", acc: "96.8% Acc" },
                    { title: "Mitral Regurgitation", tag: "Holosystolic Murmur", acc: "97.2% Acc" },
                    { title: "S3 / S4 Gallop", tag: "Heart Failure Acoustic Marker", acc: "95.4% Acc" },
                    { title: "Wheeze & Crackles", tag: "Pulmonary Crackle Detection", acc: "96.1% Acc" },
                  ].map((item) => (
                    <div key={item.title} className="p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3]">
                      <div className="text-[14px] font-bold text-[#1C1C1C] mb-1">{item.title}</div>
                      <div className="text-[11px] text-[#6B7280] mb-2">{item.tag}</div>
                      <span className="inline-block text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {item.acc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[13px] text-[#6B7280]">
                Trained and benchmarked on over 45,000+ curated and peer-reviewed cardiac sound recordings.
              </p>
            </div>
          </FadeIn>

          {/* ── CARD 4 (Bento, 6 Cols): Instant EHR Documentation ── */}
          <FadeIn delay={200} className="lg:col-span-6">
            <div className="card-elevated p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#E8234A] text-white flex items-center justify-center shadow-md">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1C1C1C]">EHR Structured Export</h3>
                    <p className="text-[12px] text-[#6B7280]">Eliminate manual medical transcription</p>
                  </div>
                </div>

                <p className="text-[15px] text-[#6B7280] leading-relaxed mb-6">
                  Generate formatted, audit-ready clinical notes with PCG waveform snippets in one tap. Seamlessly attach to Epic, Cerner, AthenaHealth, or export as encrypted PDF reports for specialist referrals.
                </p>

                <div className="bg-[#F8F5EE] rounded-xl p-4 border border-[#E5DFD3] space-y-2 mb-4 font-mono text-[11.5px] text-[#1C1C1C]">
                  <div className="flex justify-between pb-1 border-b border-[#E5DFD3]/60">
                    <span className="text-[#6B7280]">Finding:</span>
                    <span className="font-bold text-emerald-600">Grade 1/6 Mid-Systolic Flow Murmur</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-[#E5DFD3]/60">
                    <span className="text-[#6B7280]">Peak Intensity:</span>
                    <span className="font-bold">2nd Right Intercostal Space</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Recommendation:</span>
                    <span className="font-bold">Routine Annual Surveillance</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#1C1C1C]">HL7 / FHIR Standard Ready</span>
                <Link href="/demo" className="btn-primary h-9 px-4 text-[12.5px]">
                  Request Demo
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
