"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/fade-in";

function useCountUp(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

import { Play, ShieldCheck } from "lucide-react";

export default function ImpactStatsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf7f2]/30 relative overflow-hidden border-t border-slate-100">
      {/* Background graphic grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* Left Column: The Challenge */}
          <FadeIn delay={0}>
            <div className="group relative bg-white rounded-[32px] p-8 md:p-10 shadow-[0_15px_45px_rgba(10,26,77,0.03)] hover:shadow-[0_25px_60px_rgba(200,16,46,0.05)] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden min-h-[480px]">
              {/* Subtle card background gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/20 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[#c8102e] text-[10px] font-bold tracking-wider uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
                    The Challenge
                  </span>
                </div>

                <h3 className="text-[30px] md:text-[36px] font-extrabold text-[#0a1a4d] leading-[1.15] mb-4 tracking-tight">
                  Better Screening
                  <br />
                  Shouldn’t Be <span className="text-[#c8102e]">Complicated</span>
                </h3>

                {/* Red divider line */}
                <div className="w-12 h-[2px] bg-[#c8102e] mb-6 rounded-full" />

                <p className="text-[14.5px] text-slate-500 leading-relaxed max-w-md">
                  Heart conditions often need timely attention, but efficient screening isn’t always within
                  reach. Healthcare professionals need tools that are fast, reliable, and easy to use — not
                  ones that add extra steps.
                </p>
              </div>

              {/* Stethoscope asset placeholder positioned absolutely inside card */}
              <div className="absolute bottom-4 right-2 w-[145px] h-[160px] pointer-events-none z-0 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500">
                <img
                  src="/f4.jpg"
                  alt="Digital Stethoscope device"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative z-10 mt-12">
                <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#c8102e] bg-rose-50/70 border border-rose-100/50 px-4 py-2 rounded-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
                  That’s where Coeur.AI comes in.
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Meet Coeur.AI */}
          <FadeIn delay={100}>
            <div className="group relative bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff]/75 rounded-[32px] p-8 md:p-10 shadow-[0_15px_45px_rgba(10,26,77,0.03)] hover:shadow-[0_25px_60px_rgba(0,82,255,0.06)] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden min-h-[480px]">

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052ff] text-[10px] font-bold tracking-wider uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0052ff] animate-pulse" />
                    Meet Coeur.AI
                  </span>
                </div>

                <h3 className="text-[30px] md:text-[36px] font-extrabold text-[#0a1a4d] leading-[1.15] mb-4 tracking-tight">
                  AI That Supports
                  <br />
                  <span className="text-[#0052ff]">Healthcare Professionals</span>
                </h3>

                {/* Blue divider line */}
                <div className="w-12 h-[2px] bg-[#0052ff] mb-6 rounded-full" />

                <p className="text-[14px] text-slate-500 leading-relaxed max-w-sm">
                  Coeur.AI is an AI-powered cardiac screening device built by <strong className="text-[#0052ff] font-bold">LogicBoots</strong>.
                  <br /><br />
                  It analyzes cardiac data and surfaces patterns healthcare professionals can act on — right alongside their own clinical judgment.
                </p>
              </div>

              {/* Phone App on Platform asset positioned absolutely inside card */}
              <div className="absolute bottom-6 right-2 w-[162px] h-[200px] pointer-events-none z-0 opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500">
                <img
                  src="/f2.jpg"
                  alt="Coeur.AI mobile application layout on platform"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Bottom Actions Row */}
              <div className="relative z-10 mt-12 flex flex-wrap items-center gap-4">
                {/* Simple to Use action badge */}
                <div className="flex items-center gap-3 bg-white/90 border border-white px-4 py-2.5 rounded-2xl shadow-sm hover:bg-white transition-colors duration-200 cursor-default">
                  <div className="h-7 w-7 rounded-full bg-blue-50 flex items-center justify-center text-[#0052ff]">
                    <Play className="h-3.5 w-3.5 fill-[#0052ff] stroke-[#0052ff] ml-0.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-[#0a1a4d] leading-none mb-0.5 uppercase tracking-wider">Simple to use</p>
                    <p className="text-[9.5px] text-slate-400 font-medium leading-none">Intuitive. Fast. Efficient.</p>
                  </div>
                </div>

                {/* Built for Everyday Healthcare Action Button */}
                <div className="flex items-center gap-3 bg-[#0052ff] hover:bg-[#0040d0] px-4 py-2.5 rounded-2xl shadow-md transition-colors duration-200 text-white cursor-default">
                  <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold leading-none mb-0.5 uppercase tracking-wider">Built for everyday healthcare</p>
                    <p className="text-[9.5px] text-white/70 font-medium leading-none">Reliable. Secure. Effective.</p>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
