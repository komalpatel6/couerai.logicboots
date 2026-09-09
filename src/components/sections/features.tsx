"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import { HeartPulse, Wind, Activity, UserCheck, Users, ArrowUpRight, ChevronDown } from "lucide-react";

interface UseCase {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const useCases: UseCase[] = [
  {
    icon: <HeartPulse className="h-4 w-4" />,
    tag: "Remote Diagnostics",
    title: "Rural Healthcare",
    description: "In most villages, the nearest cardiologist is hours away. A health worker with Coeur.AI can record a heart or lung sound on the spot and get an instant AI read.",
    image: "/rs.jpeg",
    imageAlt: "Healthcare worker in a rural setting checking a patient",
  },
  {
    icon: <Activity className="h-4 w-4" />,
    tag: "Recovery Tracking",
    title: "Post-Operative Patients",
    description: "Recovery after heart surgery doesn't end when the patient leaves the hospital. Coeur.AI lets doctors track how the heart sounds week after week.",
    image: "/pa.jpeg",
    imageAlt: "Post-operative patient monitoring home care",
  },
  {
    icon: <UserCheck className="h-4 w-4" />,
    tag: "Clinical Support",
    title: "Doctors",
    description: "A quick recording, an AI-assisted read, and the doctor still makes the final call. Especially useful during busy OPD hours for faster, more consistent triage.",
    image: "/an.jpeg",
    imageAlt: "Doctor in clinic using digital stethoscope tool",
  },
  {
    icon: <Wind className="h-4 w-4" />,
    tag: "Cardiopulmonary Rehab",
    title: "Rehab Centers",
    description: "Rehab teams can record and compare a patient's sounds across sessions — turning 'I think he's improving' into something they can actually show.",
    image: "/rb.jpeg",
    imageAlt: "Patient in physical cardiopulmonary rehabilitation session",
  },
  {
    icon: <Users className="h-4 w-4" />,
    tag: "Community Health",
    title: "Mass Screening",
    description: "Health camps mean hundreds of people and very little time. Coeur.AI speeds that up — a quick recording, an AI flag, and the team moves to the next person.",
    image: "/f5.jpg",
    imageAlt: "Mass health camp screening line setup",
  },
];

const INITIAL_VISIBLE = 3;

export default function SolutionPartsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? useCases : useCases.slice(0, INITIAL_VISIBLE);

  return (
    <section id="solution" className="section-divider py-10 md:py-14 bg-[#EDE8DC]">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Section header */}
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.15] tracking-tight text-[#1C1C1C] max-w-xl mx-auto">
                Where Coeur.AI Makes a Difference
              </h2>
              <p className="mt-4 text-[16px] text-slate-500 max-w-2xl leading-relaxed mx-auto">
                From remote field campaigns to post-operative hospital tracking, Coeur.AI extends clinical reach and adds crucial diagnostic layers.
              </p>
            </div>
        </FadeIn>

        {/* Card grid — always 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((uc, i) => (
            <FadeIn key={uc.tag} delay={i * 60}>
              <div className="group relative bg-[#FDFAF5] rounded-2xl flex flex-col h-full shadow-sm hover:shadow-[0_16px_40px_rgba(10,26,77,0.08)] transition-all duration-300">

                {/* Image — own overflow-hidden */}
                <div className="relative h-52 overflow-hidden rounded-t-2xl bg-slate-100 shrink-0">
                  <Image
                    src={uc.image}
                    alt={uc.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 pb-7">

                  {/* Category tag */}
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#E8234A] mb-2">
                    {uc.tag}
                  </p>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-[#1C1C1C] leading-snug mb-3">
                    {uc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-slate-500 leading-relaxed flex-1">
                    {uc.description}
                  </p>

                  {/* Footer row */}
                  <div className="flex items-end justify-between mt-6">
                    <span className="text-[13.5px] font-semibold text-[#E8234A] underline underline-offset-2 decoration-[#E8234A]/30 cursor-default">
                      Learn More
                    </span>
                  </div>
                </div>

                {/* Circular arrow button — corner overlay like logicboots.com */}
                <div className="absolute bottom-0 right-0 h-12 w-12 rounded-tl-2xl bg-[#E8234A] flex items-center justify-center shadow-[0_4px_14px_rgba(200,16,46,0.3)] group-hover:bg-[#C4182E] transition-colors duration-200">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile-friendly bottom toggle */}
        {!showAll && (
          <FadeIn delay={200}>
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#0a1a4d] text-white text-[13.5px] font-semibold hover:bg-[#0d2266] transition-colors duration-200 shadow-md"
              >
                View All Use Cases <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
}
