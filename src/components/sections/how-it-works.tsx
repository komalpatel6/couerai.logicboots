"use client";

import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, Shield } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Acoustic Capture",
    badge: "Connect & Record",
    description: "Place any standard digital stethoscope on canonical auscultation points (Aortic, Pulmonic, Tricuspid, Mitral).",
    image: "/coeur_step_connect.png",
    alt: "Connect digital stethoscope and record acoustic PCG stream",
  },
  {
    step: "02",
    title: "Neural Spectral Triage",
    badge: "On-Device Inference",
    description: "Deep convolutional models process frequency spectra (20Hz - 2,000Hz) locally in under 12ms with zero cloud delay.",
    image: "/coeur_step_record.png",
    alt: "On-device AI analyzing PCG waveform spectra",
  },
  {
    step: "03",
    title: "Clinician Verification",
    badge: "Human-in-the-Loop",
    description: "Physicians review automated murmur grading and spectrogram waveforms alongside their patient physical exam.",
    image: "/coeur_step_analyze.png",
    alt: "Physician reviewing AI murmur severity and confidence score",
  },
  {
    step: "04",
    title: "One-Tap EHR Export",
    badge: "HL7 / FHIR / PDF",
    description: "Generate structured, audit-ready clinical notes and export encrypted reports directly into EHR systems.",
    image: "/coeur_step_report.png",
    alt: "Exporting diagnostic PDF and HL7 EHR report",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#F8F5EE] overflow-hidden border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px] relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Point-of-Care Pipeline
            </div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#1C1C1C] leading-[1.12] tracking-[-0.02em] mb-5">
              From Acoustic Waveform to <br className="hidden sm:inline" />
              <span className="text-[#E8234A]">Diagnostic Certainty in 4 Steps.</span>
            </h2>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              Designed by clinicians to eliminate transcription delays and minimize diagnostic variance without changing physical examination habits.
            </p>
          </div>
        </FadeIn>

        {/* 4-Step Progressive Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          {steps.map((item, idx) => (
            <FadeIn key={item.step} delay={idx * 70}>
              <div className="group relative bg-white rounded-2xl border border-[#E5DFD3] p-6 flex flex-col justify-between h-full shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                
                {/* Step Pill Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[28px] font-mono font-bold text-[#E8234A]/30 group-hover:text-[#E8234A] transition-colors">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#F8F5EE] border border-[#E5DFD3] text-[11px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-[19px] font-bold text-[#1C1C1C] mb-2 group-hover:text-[#E8234A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B7280] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Device Screen Preview Container */}
                <div className="w-full aspect-[4/5] relative rounded-xl overflow-hidden bg-[#F8F5EE] border border-[#E5DFD3]/80 shadow-inner">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Embedded Video Showcase Player */}
        <FadeIn delay={250}>
          <div className="card-elevated p-6 md:p-10 max-w-5xl mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#E8234A] uppercase tracking-widest mb-2">
                  <Play className="w-3.5 h-3.5 fill-[#E8234A]" />
                  Clinical Walkthrough
                </div>
                <h3 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] tracking-tight">
                  See Coeur.AI in Live Clinical Auscultation
                </h3>
              </div>
              <Link
                href="/demo"
                className="btn-primary h-10 px-5 text-[13.5px] shrink-0"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Video Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1C1C1C] aspect-[16/9] border border-[#E5DFD3] shadow-lg">
              <video
                src="/video-project1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/coeur-app-showcase.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Video Telemetry Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px] font-medium bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8234A] animate-pulse" />
                  <span>Real-Time Auscultation Session • 1080p 60fps</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Encrypted Point-to-Point</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
