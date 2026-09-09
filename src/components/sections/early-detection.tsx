"use client";

import { FadeIn } from "@/components/fade-in";
import {
  ArrowRight, ShieldCheck, Zap,
  Activity, Clock, Users, Check
} from "lucide-react";

export default function ImpactStatsSection() {
  return (
    <section className="section-divider py-20 md:py-28 bg-[#FDFAF5]">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">

        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#1C1C1C] leading-[1.15] tracking-tight max-w-2xl mx-auto">
              Smarter Cardiac Screening,{" "}
              <span className="text-[#E8234A]">Without the Complexity</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* ── CARD 1: The Challenge ── */}
          <FadeIn delay={60}>
            <div className="group relative bg-[#FDF8F3] rounded-3xl border border-rose-100/60 overflow-hidden h-full hover:shadow-[0_20px_50px_rgba(200,16,46,0.06)] transition-all duration-400">
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">

                {/* Heading */}
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#1C1C1C] leading-[1.2] tracking-tight mb-4">
                  Better Screening<br />
                  Shouldn&apos;t Be{" "}
                  <span className="text-[#E8234A]">Complicated</span>
                </h3>

                {/* Thin accent line */}
                <div className="w-10 h-[2px] bg-[#E8234A]/40 rounded-full mb-6" />

                {/* Body */}
                <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
                  Heart conditions often need timely attention, but efficient screening isn&apos;t always within
                  reach. Healthcare professionals need tools that are fast, reliable, and easy to use —
                  not ones that add extra steps.
                </p>

                {/* Feature list */}
                <ul className="space-y-5 mb-10 flex-1">
                  {[
                    { icon: Clock,    text: "Delayed detection puts patients at risk" },
                    { icon: Users,    text: "Rural areas lack specialist access" },
                    { icon: Activity, text: "Existing tools add workflow friction" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3.5">
                      <span className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                        <Icon className="h-3.5 w-3.5 text-[#E8234A]" />
                      </span>
                      <span className="text-[14px] text-slate-600 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto flex items-center gap-2 text-[13.5px] font-bold text-[#E8234A] group-hover:gap-3 transition-all duration-200">
                  That&apos;s where Coeur.AI comes in
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── CARD 2: Meet Coeur.AI ── */}
          <FadeIn delay={120}>
            <div className="group relative bg-[#F5F0E8] rounded-3xl border border-blue-100/60 overflow-hidden h-full hover:shadow-[0_20px_50px_rgba(10,26,77,0.07)] transition-all duration-400">
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">

                {/* Heading */}
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#1C1C1C] leading-[1.2] tracking-tight mb-4">
                  AI That Supports<br />
                  <span className="text-[#E8234A]">Healthcare Professionals</span>
                </h3>

                {/* Thin accent line */}
                <div className="w-10 h-[2px] bg-[#E8234A]/40 rounded-full mb-6" />

                {/* Body */}
                <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
                  Coeur.AI is an AI-powered cardiac screening device built by{" "}
                  <strong className="text-[#1C1C1C] font-semibold">LogicBoots</strong>.
                  It analyzes cardiac data and surfaces patterns healthcare professionals can act on —
                  right alongside their own clinical judgment.
                </p>

                {/* Feature check list */}
                <ul className="space-y-5 mb-10 flex-1">
                  {[
                    "Real-time cardiac sound analysis",
                    "AI-assisted pattern detection",
                    "Designed for everyday clinical workflows",
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-3.5">
                      <span className="h-8 w-8 rounded-full bg-[#FDFAF5] border border-blue-100 flex items-center justify-center shrink-0">
                        <Check className="h-3.5 w-3.5 text-[#E8234A]" />
                      </span>
                      <span className="text-[14px] text-slate-600 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>

                {/* Action pills */}
                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-[#FDFAF5] border border-slate-200 px-4 h-10 rounded-xl text-[12.5px] font-semibold text-[#1C1C1C] shadow-sm">
                    <Zap className="h-3.5 w-3.5 text-[#E8234A]" />
                    Simple to use
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#E8234A] hover:bg-[#C4182E] px-4 h-10 rounded-xl text-[12.5px] font-semibold text-white transition-colors duration-150 shadow-[0_4px_14px_rgba(200,16,46,0.25)]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Built for Healthcare
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
