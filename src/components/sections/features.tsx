"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse, Wind, Activity, UserCheck, Users,
  ArrowUpRight, ChevronDown, ChevronUp, Stethoscope
} from "lucide-react";

interface UseCase {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: string;
}

const useCases: UseCase[] = [
  {
    icon: <HeartPulse className="h-4 w-4" />,
    tag: "Primary Care & OPD",
    title: "Routine Health Checks & Rapid Triage",
    description: "Equip primary physicians and nurses to identify silent valvular heart disease and murmurs in under 5 seconds during standard general checkups.",
    image: "/an.jpeg",
    imageAlt: "Doctor in clinic using digital stethoscope tool",
    metrics: "40% earlier triage",
  },
  {
    icon: <Users className="h-4 w-4" />,
    tag: "Rural & Community Health",
    title: "Decentralized Screening Camps",
    description: "In rural clinics and mass outreach programs where cardiologists are unavailable, frontline health workers screen hundreds with automated offline AI grading.",
    image: "/rs.jpeg",
    imageAlt: "Healthcare worker in a rural setting checking a patient",
    metrics: "100% offline ready",
  },
  {
    icon: <Activity className="h-4 w-4" />,
    tag: "Cardiology & Inpatient",
    title: "Post-Operative & Ward Monitoring",
    description: "Track acoustic valve restoration and detect prosthetic valve dysfunction or congestive fluid buildup in surgical step-down units.",
    image: "/pa.jpeg",
    imageAlt: "Post-operative patient monitoring home care",
    metrics: "Trend longitudinal PCG",
  },
  {
    icon: <Wind className="h-4 w-4" />,
    tag: "Cardiopulmonary Rehab",
    title: "Rehabilitation & Heart Failure Tracking",
    description: "Objectively document exercise-induced acoustic changes, S3 gallop resolution, and pulmonary crackle clearance across therapy sessions.",
    image: "/rb.jpeg",
    imageAlt: "Patient in physical cardiopulmonary rehabilitation session",
    metrics: "EHR trend export",
  },
  {
    icon: <UserCheck className="h-4 w-4" />,
    tag: "Medical Education",
    title: "Auscultation Training & Simulation",
    description: "Train medical residents and fellows with real-time visual spectrogram feedback, synchronizing acoustic perception with clinical teaching.",
    image: "/f5.jpg",
    imageAlt: "Medical team and residents reviewing cardiac sound data",
    metrics: "Visual PCG spectrograms",
  },
];

const INITIAL_VISIBLE = 3;

export default function SolutionPartsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? useCases : useCases.slice(0, INITIAL_VISIBLE);

  return (
    <section id="solution" className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px]">

        {/* Section header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
              <Stethoscope className="w-3.5 h-3.5" />
              Clinical Applications
            </div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#1C1C1C] leading-[1.12] tracking-[-0.02em] mb-5">
              Empowering Care Across Every <br className="hidden sm:inline" />
              <span className="text-[#E8234A]">Point of the Patient Journey.</span>
            </h2>
            <p className="text-[17px] text-[#6B7280] leading-relaxed">
              From busy outpatient clinics and rural screening drives to inpatient cardiology wards, Coeur.AI seamlessly integrates without altering physical workflow.
            </p>
          </div>
        </FadeIn>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCards.map((uc, i) => (
            <FadeIn key={uc.tag} delay={i * 80}>
              <div className="group relative bg-white rounded-2xl border border-[#E5DFD3] flex flex-col h-full shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={uc.image}
                    alt={uc.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1C1C1C] shadow-sm border border-white/60">
                    {uc.metrics}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">

                  {/* Category tag */}
                  <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#E8234A] mb-2.5">
                    {uc.tag}
                  </p>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-[#1C1C1C] leading-snug mb-3 group-hover:text-[#E8234A] transition-colors">
                    {uc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14.5px] text-[#6B7280] leading-relaxed mb-6 flex-1">
                    {uc.description}
                  </p>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#E5DFD3]/80 flex items-center justify-between">
                    <Link
                      href="/demo"
                      className="text-[13.5px] font-bold text-[#1C1C1C] group-hover:text-[#E8234A] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request Clinical Protocol</span>
                      <ArrowUpRight className="h-4 w-4 text-[#E8234A]" />
                    </Link>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Toggle Button */}
        <FadeIn delay={150}>
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary h-11 px-6 text-[14px]"
            >
              <span>{showAll ? "Show Fewer Use Cases" : "View All 5 Clinical Use Cases"}</span>
              {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
