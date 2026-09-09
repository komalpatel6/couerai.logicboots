"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Cpu, Play, CheckCircle2, Heart } from "lucide-react";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F5EE]">
      {/* Background radial highlight & subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] bg-gradient-to-tr from-[#E8234A]/8 via-[#F3EFE6] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 max-w-[1360px] relative z-10">
        
        {/* Top Centered Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-16">
          
          {/* Trust Pill Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5DFD3] shadow-sm mb-6 hover:border-[#E8234A]/40 transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#E8234A] animate-pulse" />
            <span className="text-[13px] font-semibold text-[#1C1C1C] tracking-tight">
              Clinical Decision Support Platform v2.4
            </span>
            <span className="text-[11px] font-medium text-[#6B7280] bg-[#F8F5EE] px-2 py-0.5 rounded-md border border-[#E5DFD3]">
              Real-Time AI
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[66px] font-bold tracking-[-0.03em] leading-[1.08] text-[#1C1C1C] mb-6"
          >
            Intelligent Cardiac Auscultation <br className="hidden sm:inline" />
            <span className="text-[#E8234A]">at the Point of Care.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-[17px] sm:text-[19px] md:text-[20px] text-[#6B7280] max-w-3xl leading-relaxed font-normal mb-8"
          >
            Transform standard stethoscope acoustic data into real-time phonocardiogram triage.
            Detect valvular murmurs, S3/S4 gallops, and structural anomalies in seconds with on-device AI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
          >
            <Link
              href="/demo"
              className="btn-primary-lg w-full sm:w-auto text-[15px] shadow-lg shadow-[#E8234A]/20 hover:shadow-[#E8234A]/30"
            >
              <span>Schedule Clinical Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/#how-it-works"
              className="btn-secondary-lg w-full sm:w-auto text-[15px]"
            >
              <Play className="h-4 w-4 text-[#E8234A] fill-[#E8234A]/20" />
              <span>Watch 2-Min Overview</span>
            </Link>
          </motion.div>

          {/* Trust Micro-Pills */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#6B7280] font-medium"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E8234A]" />
              100% Offline On-Device Inference
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E8234A]" />
              HIPAA & GDPR Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#E8234A]" />
              Universal Stethoscope Support
            </span>
          </motion.div>
        </div>

        {/* Interactive Product Showcase & Clinical Telemetry Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer Chrome Frame */}
          <div className="relative rounded-2xl md:rounded-3xl bg-white border border-[#E5DFD3] p-3 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-3 py-2.5 mb-3 bg-[#F8F5EE]/80 rounded-xl border border-[#E5DFD3]/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E5DFD3]" />
                <span className="w-3 h-3 rounded-full bg-[#E5DFD3]" />
                <span className="w-3 h-3 rounded-full bg-[#E5DFD3]" />
                <span className="text-[12px] font-mono text-[#6B7280] ml-2">coeur-telemetry-v2.4.live</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Auscultation Feed
                </span>
                <span className="text-[11px] font-medium text-[#6B7280] hidden sm:inline">
                  Patient ID: #CR-88219
                </span>
              </div>
            </div>

            {/* Main Interactive Telemetry Canvas Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Left Column: Live Phonocardiogram & Spectral View */}
              <div className="lg:col-span-8 bg-[#1C1C1C] rounded-xl p-5 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                
                {/* Header within Screen */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8234A]/20 flex items-center justify-center border border-[#E8234A]/30">
                      <Heart className="w-4 h-4 text-[#E8234A] animate-heartbeat" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white">Aortic Valve Area (2nd ICS R)</div>
                      <div className="text-[11px] text-neutral-400">Frequency: 20Hz - 2,000Hz (Filtered PCG)</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[20px] font-bold text-white font-mono leading-none">72 <span className="text-[12px] font-normal text-neutral-400">BPM</span></div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">Regular Rhythm</div>
                  </div>
                </div>

                {/* Simulated Phonocardiogram Waveform SVG */}
                <div className="relative z-10 my-4 py-2">
                  <svg className="w-full h-24 stroke-[#E8234A]" fill="none" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <path
                      d="M 0 50 Q 15 50 25 50 Q 30 20 35 80 Q 40 10 45 90 Q 50 45 55 50 Q 75 50 85 50 Q 95 30 105 70 Q 115 50 140 50 Q 155 50 165 50 Q 170 20 175 80 Q 180 10 185 90 Q 190 45 195 50 Q 215 50 225 50 Q 235 30 245 70 Q 255 50 280 50 Q 295 50 305 50 Q 310 20 315 80 Q 320 10 325 90 Q 330 45 335 50 Q 355 50 365 50 Q 375 30 385 70 Q 395 50 420 50 Q 435 50 445 50 Q 450 20 455 80 Q 460 10 465 90 Q 470 45 475 50 L 500 50"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* S1 / S2 Timing Guides */}
                  <div className="flex justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                    <span className="text-[#E8234A] font-bold">S1 (Mitral/Tricuspid)</span>
                    <span className="text-neutral-500">Systole</span>
                    <span className="text-sky-400 font-bold">S2 (Aortic/Pulmonic)</span>
                    <span className="text-neutral-500">Diastole</span>
                    <span className="text-[#E8234A] font-bold">S1 Next</span>
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-neutral-300" />
                    Neural Inference: <strong className="text-white">12ms (Apple Neural Engine / Hexagon NPU)</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    ✓ Signal Quality: Optimal (99.1%)
                  </span>
                </div>
              </div>

              {/* Right Column: Instant AI Triage Card */}
              <div className="lg:col-span-4 bg-[#F8F5EE] rounded-xl p-5 border border-[#E5DFD3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#6B7280]">
                      AI Classification
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E8234A]/10 text-[#E8234A]">
                      98.4% Match
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#1C1C1C] mb-1">
                    Normal Acoustic Profile
                  </h3>
                  <p className="text-[12.5px] text-[#6B7280] leading-snug mb-4">
                    Crisp S1 and S2 physiological split. No hemodynamically significant regurgitation or stenosis detected.
                  </p>

                  {/* Classification Breakdown */}
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-[11.5px] font-medium text-[#1C1C1C] mb-1">
                        <span>Aortic Stenosis Risk</span>
                        <span className="text-emerald-600 font-semibold">Low (&lt;1%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="w-[1%] h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11.5px] font-medium text-[#1C1C1C] mb-1">
                        <span>Mitral Regurgitation</span>
                        <span className="text-emerald-600 font-semibold">Low (1.2%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="w-[1.2%] h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11.5px] font-medium text-[#1C1C1C] mb-1">
                        <span>Acoustic S3/S4 Gallop</span>
                        <span className="text-emerald-600 font-semibold">Negative</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="w-[0.4%] h-full bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action in Card */}
                <div className="mt-5 pt-3 border-t border-[#E5DFD3]">
                  <Link
                    href="/demo"
                    className="w-full py-2.5 px-3 rounded-lg bg-[#1C1C1C] hover:bg-[#E8234A] text-white text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Export Full EHR Report (.pdf)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Telemetry Badge Left */}
          <div className="hidden md:flex absolute -left-6 -bottom-6 bg-white p-4 rounded-2xl border border-[#E5DFD3] shadow-xl items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#1C1C1C]">Sub-5s Analysis</div>
              <div className="text-[11px] text-[#6B7280]">Instant point-of-care feedback</div>
            </div>
          </div>

          {/* Floating Telemetry Badge Right */}
          <div className="hidden md:flex absolute -right-6 -top-6 bg-white p-4 rounded-2xl border border-[#E5DFD3] shadow-xl items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#1C1C1C]">Zero Cloud Latency</div>
              <div className="text-[11px] text-[#6B7280]">100% offline patient privacy</div>
            </div>
          </div>
        </motion.div>

        {/* Global Partner & Clinical Accreditation Ticker */}
        <div className="mt-20 pt-10 border-t border-[#E5DFD3]/80">
          <p className="text-center text-[12px] font-bold uppercase tracking-widest text-[#6B7280] mb-8">
            Supported by Leading Clinical Research & Technology Ecosystems
          </p>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex items-center animate-infinite-scroll">
              
              {/* First set of grayscale partner logos */}
              <div className="flex items-center gap-14 px-6 shrink-0 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <Image src="/dpiit.png" alt="DPIIT recognition" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/iiits.png" alt="IIIT Sonipat partner" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/meity.png" alt="Ministry of Electronics and Information Technology" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/stpi.png" alt="Software Technology Parks of India" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/tides.png" alt="TIDES Business Incubator, IIT Roorkee" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/metech.png" alt="MassTech digital health collaborative" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/mid.png" alt="Medical Innovation Hub" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/harvard.png" alt="Harvard HBS Foundry" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/mass-robotics.png" alt="Mass Robotics Health" width={110} height={40} className="h-8 w-auto object-contain" />
              </div>

              {/* Duplicate set for seamless continuous marquee */}
              <div className="flex items-center gap-14 px-6 shrink-0 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" aria-hidden="true">
                <Image src="/dpiit.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/iiits.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/meity.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/stpi.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/tides.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/metech.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/mid.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/harvard.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
                <Image src="/mass-robotics.png" alt="" width={110} height={40} className="h-8 w-auto object-contain" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
