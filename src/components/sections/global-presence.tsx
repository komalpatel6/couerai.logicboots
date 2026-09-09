"use client";

import { FadeIn } from "@/components/fade-in";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function GlobalPresenceSection() {
  return (
    <section id="global-presence" className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px]">

        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
                <Globe className="w-3.5 h-3.5" />
                Global Clinical Footprint
              </div>
              <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#1C1C1C] leading-[1.12] tracking-[-0.02em] mb-4">
                Deployable Across Diverse <br className="hidden sm:inline" />
                <span className="text-[#E8234A]">Healthcare Ecosystems.</span>
              </h2>
              <p className="text-[17px] text-[#6B7280] leading-relaxed">
                From high-density tertiary university hospitals in North America and Europe to frontline rural medical centers in Asia, Coeur.AI operates 100% reliably anywhere point-of-care auscultation is performed.
              </p>
            </div>

            <div className="shrink-0">
              <Link 
                href="/demo" 
                className="btn-primary-lg text-[15px]"
              >
                <span>Request Institutional Pilot</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Impact Metrics Row */}
        <FadeIn delay={80}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-sm">
              <div className="text-[32px] md:text-[38px] font-bold text-[#1C1C1C] stat-number mb-1">
                45,000<span className="text-[#E8234A]">+</span>
              </div>
              <div className="text-[13.5px] font-bold text-[#1C1C1C] mb-1">Annotated PCG Datasets</div>
              <div className="text-[12px] text-[#6B7280]">Validated against echocardiograms</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-sm">
              <div className="text-[32px] md:text-[38px] font-bold text-[#1C1C1C] stat-number mb-1">
                12<span className="text-[#E8234A]">+</span>
              </div>
              <div className="text-[13.5px] font-bold text-[#1C1C1C] mb-1">Clinical Trial Sites</div>
              <div className="text-[12px] text-[#6B7280]">Active research collaborations</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-sm">
              <div className="text-[32px] md:text-[38px] font-bold text-[#1C1C1C] stat-number mb-1">
                &lt; 5<span className="text-[#E8234A]">s</span>
              </div>
              <div className="text-[13.5px] font-bold text-[#1C1C1C] mb-1">Inference Latency</div>
              <div className="text-[12px] text-[#6B7280]">Zero cloud bandwidth required</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-sm">
              <div className="text-[32px] md:text-[38px] font-bold text-[#1C1C1C] stat-number mb-1">
                99.9<span className="text-[#E8234A]">%</span>
              </div>
              <div className="text-[13.5px] font-bold text-[#1C1C1C] mb-1">Uptime Reliability</div>
              <div className="text-[12px] text-[#6B7280]">Local on-device execution</div>
            </div>
          </div>
        </FadeIn>

        {/* Global Map Display Frame */}
        <FadeIn delay={150}>
          <div className="relative rounded-3xl overflow-hidden border border-[#E5DFD3] bg-white p-4 md:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <div className="relative rounded-2xl overflow-hidden bg-[#F8F5EE] border border-[#E5DFD3]/60">
              <Image
                src="/global-map.png"
                alt="Coeur.AI global clinical validation footprint and partner network"
                width={1400}
                height={700}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 px-2 text-[12.5px] text-[#6B7280]">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8234A]" />
                  Active Clinical Research Sites (Boston, Delhi, Roorkee)
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Primary Care Pilot Deployments
                </span>
              </div>
              <div className="font-semibold text-[#1C1C1C]">
                ISO 13485 Quality Management Compliant
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
