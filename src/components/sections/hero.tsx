"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, Activity, ShieldCheck, Cpu, Play,
  CheckCircle2, Heart, Volume2, VolumeX
} from "lucide-react";

interface PathologyPreset {
  id: string;
  name: string;
  shortLabel: string;
  valveArea: string;
  bpm: number;
  matchScore: string;
  statusTag: string;
  statusType: "normal" | "warning" | "danger";
  description: string;
  frequencyRange: string;
  signalQuality: string;
  asRisk: { label: string; percent: number; color: string };
  mrRisk: { label: string; percent: number; color: string };
  gallopRisk: { label: string; percent: number; color: string };
  s1Label: string;
  systoleLabel: string;
  s2Label: string;
  diastoleLabel: string;
  svgPath: string;
}

const presets: PathologyPreset[] = [
  {
    id: "normal",
    name: "Normal Physiological Auscultation",
    shortLabel: "Normal (S1/S2)",
    valveArea: "Aortic & Mitral Valve (Canonical)",
    bpm: 72,
    matchScore: "98.8% Normal",
    statusTag: "Normal Acoustic Profile",
    statusType: "normal",
    description: "Crisp physiological S1 and S2 valve closure split. No pathological murmurs, gallops, or stenosis signatures detected.",
    frequencyRange: "20Hz – 600Hz",
    signalQuality: "Optimal (99.4%)",
    asRisk: { label: "Low (< 0.8%)", percent: 1, color: "bg-emerald-500" },
    mrRisk: { label: "Low (0.5%)", percent: 1, color: "bg-emerald-500" },
    gallopRisk: { label: "Negative (0.2%)", percent: 1, color: "bg-emerald-500" },
    s1Label: "S1 (Mitral/Tricuspid)",
    systoleLabel: "Quiet Systole",
    s2Label: "S2 (Aortic/Pulmonic)",
    diastoleLabel: "Quiet Diastole",
    svgPath: "M 0 50 Q 15 50 25 50 Q 30 20 35 80 Q 40 10 45 90 Q 50 45 55 50 Q 75 50 85 50 Q 95 30 105 70 Q 115 50 140 50 Q 155 50 165 50 Q 170 20 175 80 Q 180 10 185 90 Q 190 45 195 50 Q 215 50 225 50 Q 235 30 245 70 Q 255 50 280 50 Q 295 50 305 50 Q 310 20 315 80 Q 320 10 325 90 Q 330 45 335 50 Q 355 50 365 50 Q 375 30 385 70 Q 395 50 420 50 Q 435 50 445 50 Q 450 20 455 80 Q 460 10 465 90 Q 470 45 475 50 L 500 50",
  },
  {
    id: "as",
    name: "Aortic Stenosis (Systolic Ejection Murmur)",
    shortLabel: "Aortic Stenosis",
    valveArea: "2nd Right Intercostal Space (Aortic)",
    bpm: 78,
    matchScore: "96.8% AS Pattern",
    statusTag: "Valvular Stenosis Detected",
    statusType: "danger",
    description: "Crescendo-decrescendo systolic murmur peaking in mid-systole with attenuated A2 aortic closure component.",
    frequencyRange: "100Hz – 1,400Hz (High-Freq Turbulence)",
    signalQuality: "High Confidence (98.2%)",
    asRisk: { label: "High Risk (96.8%)", percent: 96.8, color: "bg-[#E8234A]" },
    mrRisk: { label: "Low (4.2%)", percent: 4.2, color: "bg-emerald-500" },
    gallopRisk: { label: "Low (2.1%)", percent: 2.1, color: "bg-emerald-500" },
    s1Label: "S1 Onset",
    systoleLabel: "Diamond Murmur Peak",
    s2Label: "Soft / Delayed S2",
    diastoleLabel: "Isoelectric Diastole",
    svgPath: "M 0 50 Q 15 50 25 50 Q 30 25 35 75 Q 40 35 45 65 Q 50 20 55 80 Q 60 10 65 90 Q 70 25 75 75 Q 80 40 85 60 Q 95 35 105 65 Q 115 50 140 50 Q 155 50 165 50 Q 170 25 175 75 Q 180 35 185 65 Q 190 20 195 80 Q 200 10 205 90 Q 210 25 215 75 Q 220 40 225 60 Q 235 35 245 65 Q 255 50 280 50 Q 295 50 305 50 Q 310 25 315 75 Q 320 35 325 65 Q 330 20 335 80 Q 340 10 345 90 Q 350 25 355 75 Q 360 40 365 60 Q 375 35 385 65 Q 395 50 420 50 Q 435 50 445 50 Q 450 25 455 75 Q 460 35 465 65 Q 470 20 475 80 L 500 50",
  },
  {
    id: "mr",
    name: "Mitral Regurgitation (Holosystolic Murmur)",
    shortLabel: "Mitral Regurgitation",
    valveArea: "5th Left ICS Mid-Clavicular (Apex)",
    bpm: 84,
    matchScore: "97.4% MR Pattern",
    statusTag: "Regurgitant Flow Detected",
    statusType: "warning",
    description: "High-frequency plateau-shaped holosystolic acoustic envelope obscuring the physiological S1-S2 interval.",
    frequencyRange: "150Hz – 1,800Hz (Blowing Murmur)",
    signalQuality: "Optimal (97.9%)",
    asRisk: { label: "Low (2.5%)", percent: 2.5, color: "bg-emerald-500" },
    mrRisk: { label: "Significant (97.4%)", percent: 97.4, color: "bg-[#E8234A]" },
    gallopRisk: { label: "Mild (8.4%)", percent: 8.4, color: "bg-amber-500" },
    s1Label: "S1 Merged",
    systoleLabel: "Holosystolic Plateau",
    s2Label: "S2 Terminal",
    diastoleLabel: "Diastolic Recovery",
    svgPath: "M 0 50 Q 15 50 25 50 Q 30 15 35 85 Q 40 25 45 75 Q 50 20 55 80 Q 60 22 65 78 Q 70 20 75 80 Q 80 25 85 75 Q 95 30 105 70 Q 115 50 140 50 Q 155 50 165 50 Q 170 15 175 85 Q 180 25 185 75 Q 190 20 195 80 Q 200 22 205 78 Q 210 20 215 80 Q 220 25 225 75 Q 235 30 245 70 Q 255 50 280 50 Q 295 50 305 50 Q 310 15 315 85 Q 320 25 325 75 Q 330 20 335 80 Q 340 22 345 78 Q 350 20 355 80 Q 360 25 365 75 Q 375 30 385 70 Q 395 50 420 50 L 500 50",
  },
  {
    id: "s3",
    name: "Heart Failure S3 Ventricular Gallop",
    shortLabel: "S3 Gallop (HF)",
    valveArea: "Left Lower Sternal Border / Apex",
    bpm: 92,
    matchScore: "94.9% S3 Sign",
    statusTag: "Ventricular Gallop Flagged",
    statusType: "danger",
    description: "Low-frequency proto-diastolic filling sound occurring ~120-170ms after S2. Key acoustic biomarker for volume overload.",
    frequencyRange: "20Hz – 300Hz (Low Frequency)",
    signalQuality: "Optimal (98.6%)",
    asRisk: { label: "Low (1.2%)", percent: 1.2, color: "bg-emerald-500" },
    mrRisk: { label: "Elevated (12.0%)", percent: 12.0, color: "bg-amber-500" },
    gallopRisk: { label: "Positive S3 (94.9%)", percent: 94.9, color: "bg-[#E8234A]" },
    s1Label: "S1 First",
    systoleLabel: "Short Systole",
    s2Label: "S2 Closure",
    diastoleLabel: "S3 Gallop Sound",
    svgPath: "M 0 50 Q 15 50 25 50 Q 30 20 35 80 Q 40 10 45 90 Q 50 45 55 50 Q 75 50 85 50 Q 95 30 105 70 Q 115 50 125 50 Q 130 35 135 65 Q 140 50 150 50 Q 165 50 170 20 175 80 Q 180 10 185 90 Q 190 45 195 50 Q 215 50 225 50 Q 235 30 245 70 Q 255 50 265 50 Q 270 35 275 65 Q 280 50 290 50 Q 305 50 310 20 315 80 Q 320 10 325 90 Q 330 45 335 50 Q 355 50 365 50 Q 375 30 385 70 Q 395 50 405 50 Q 410 35 415 65 L 500 50",
  },
];

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function HeroSection() {
  const [activePresetId, setActivePresetId] = useState<string>("normal");
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activePreset = presets.find((p) => p.id === activePresetId) || presets[0];

  // Synthesize realistic clinical heart sound beats with Web Audio
  const playHeartbeatCycle = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // S1 Sound: Low frequency thud (~50Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(55, now);
      osc1.frequency.exponentialRampToValueAtTime(30, now + 0.1);
      gain1.gain.setValueAtTime(0.7, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Murmur simulation for Aortic Stenosis or Mitral Regurgitation
      if (activePresetId === "as" || activePresetId === "mr") {
        const bufferSize = ctx.sampleRate * 0.25;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(activePresetId === "as" ? 350 : 600, now + 0.08);
        filter.Q.setValueAtTime(3, now + 0.08);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now + 0.08);
        noiseGain.gain.linearRampToValueAtTime(0.25, now + 0.18);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        whiteNoise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        whiteNoise.start(now + 0.08);
        whiteNoise.stop(now + 0.35);
      }

      // S2 Sound: Higher frequency crisp closure (~85Hz)
      const s2Time = now + (60 / activePreset.bpm) * 0.35;
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(activePresetId === "as" ? 65 : 85, s2Time);
      osc2.frequency.exponentialRampToValueAtTime(40, s2Time + 0.08);
      gain2.gain.setValueAtTime(0.5, s2Time);
      gain2.gain.exponentialRampToValueAtTime(0.001, s2Time + 0.09);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(s2Time);
      osc2.stop(s2Time + 0.09);

      // S3 Extra sound if S3 preset
      if (activePresetId === "s3") {
        const s3Time = s2Time + 0.14;
        const osc3 = ctx.createOscillator();
        const gain3 = ctx.createGain();
        osc3.type = "sine";
        osc3.frequency.setValueAtTime(42, s3Time);
        osc3.frequency.exponentialRampToValueAtTime(25, s3Time + 0.08);
        gain3.gain.setValueAtTime(0.4, s3Time);
        gain3.gain.exponentialRampToValueAtTime(0.001, s3Time + 0.09);
        osc3.connect(gain3);
        gain3.connect(ctx.destination);
        osc3.start(s3Time);
        osc3.stop(s3Time + 0.09);
      }
    } catch {
      // Graceful fallback if Web Audio is restricted by browser policy
    }
  };

  useEffect(() => {
    if (isPlayingAudio) {
      const intervalMs = (60 / activePreset.bpm) * 1000;
      playHeartbeatCycle();
      timerRef.current = setInterval(playHeartbeatCycle, intervalMs);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlayingAudio, activePresetId, activePreset.bpm]);

  const toggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F5EE]">
      {/* Background radial highlight & subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[380px] bg-gradient-to-tr from-[#E8234A]/8 via-[#F3EFE6] to-transparent rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-[11px] font-semibold text-[#E8234A] bg-[#E8234A]/10 px-2 py-0.5 rounded-md">
              Real-Time AI
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[66px] font-bold tracking-[-0.03em] leading-[1.08] text-[#1C1C1C] mb-6 text-balance"
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
            className="text-[17px] sm:text-[19px] md:text-[20px] text-[#6B7280] max-w-3xl leading-relaxed font-normal mb-8 text-balance"
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
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer Chrome Frame */}
          <div className="relative rounded-2xl md:rounded-3xl bg-white border border-[#E5DFD3] p-4 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            
            {/* Top Control Bar with Preset Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E5DFD3]">
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E8234A]/30" />
                <span className="w-3 h-3 rounded-full bg-amber-400/40" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/40" />
                <span className="text-[12px] font-mono text-[#6B7280] ml-2 font-semibold">
                  Auscultation Mode:
                </span>
              </div>

              {/* Interactive Pathology Selector Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 bg-[#F8F5EE] p-1 rounded-xl border border-[#E5DFD3]">
                {presets.map((p) => {
                  const isSelected = activePresetId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePresetId(p.id)}
                      className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-white text-[#E8234A] shadow-sm border border-[#E5DFD3]"
                          : "text-[#6B7280] hover:text-[#1C1C1C]"
                      }`}
                    >
                      {p.shortLabel}
                    </button>
                  );
                })}
              </div>

              {/* Live Status & Audio Toggle Button */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button
                  onClick={toggleAudio}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-colors border cursor-pointer ${
                    isPlayingAudio
                      ? "bg-[#E8234A] text-white border-[#E8234A] shadow-sm"
                      : "bg-[#F8F5EE] text-[#1C1C1C] border-[#E5DFD3] hover:bg-white"
                  }`}
                  title={isPlayingAudio ? "Mute live simulation" : "Listen to synthesized heart sound"}
                >
                  {isPlayingAudio ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      <span>Audio Active</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-[#6B7280]" />
                      <span>Listen to Audio</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Main Interactive Telemetry Canvas Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Column: Live Phonocardiogram & Spectral View (8 cols) */}
              <div className="lg:col-span-8 bg-[#18181B] rounded-2xl p-5 text-white flex flex-col justify-between relative overflow-hidden shadow-inner border border-neutral-800">
                
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-telemetry-grid opacity-30 pointer-events-none" />
                
                {/* Screen Header */}
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8234A]/20 flex items-center justify-center border border-[#E8234A]/40 shadow-sm">
                      <Heart className="w-4 h-4 text-[#E8234A] animate-heartbeat" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white tracking-tight">
                        {activePreset.valveArea}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {activePreset.frequencyRange}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[22px] font-bold text-white font-mono leading-none flex items-center justify-end gap-1.5">
                      <span>{activePreset.bpm}</span>
                      <span className="text-[11px] font-normal text-neutral-400">BPM</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                      ● Active Sampling
                    </div>
                  </div>
                </div>

                {/* Simulated Phonocardiogram Dynamic SVG Waveform */}
                <div className="relative z-10 my-3 py-2 bg-black/40 rounded-xl p-3 border border-neutral-800/80">
                  
                  {/* Subtle Grid overlay inside wave frame */}
                  <div className="flex items-center justify-between text-[9.5px] font-mono text-neutral-500 mb-1">
                    <span>PCG Amplitude [mV]</span>
                    <span className="text-[#E8234A] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8234A] animate-ping" />
                      Live Stream
                    </span>
                  </div>

                  <svg
                    className="w-full h-24 stroke-[#E8234A]"
                    fill="none"
                    viewBox="0 0 500 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={activePreset.svgPath}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-ecg transition-all duration-500"
                    />
                  </svg>
                  
                  {/* S1 / S2 Timing Guides */}
                  <div className="flex justify-between text-[10.5px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                    <span className="text-[#E8234A] font-bold">{activePreset.s1Label}</span>
                    <span className="text-amber-400/90">{activePreset.systoleLabel}</span>
                    <span className="text-sky-400 font-bold">{activePreset.s2Label}</span>
                    <span className="text-neutral-400">{activePreset.diastoleLabel}</span>
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-neutral-300" />
                    Neural Engine: <strong className="text-white">12ms Local NPU</strong>
                  </span>
                  <span className="text-emerald-400 font-medium">
                    ✓ Quality: {activePreset.signalQuality}
                  </span>
                </div>
              </div>

              {/* Right Column: Instant AI Triage Card (4 cols) */}
              <div className="lg:col-span-4 bg-[#F8F5EE] rounded-2xl p-5 border border-[#E5DFD3] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                      AI Classification
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8234A]/10 text-[#E8234A] border border-[#E8234A]/20">
                      {activePreset.matchScore}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#1C1C1C] mb-1.5 leading-snug">
                    {activePreset.statusTag}
                  </h3>
                  <p className="text-[12.5px] text-[#6B7280] leading-relaxed mb-4 min-h-[48px]">
                    {activePreset.description}
                  </p>

                  {/* Dynamic Biomarker Risk Indicators */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <div className="flex justify-between text-[11.5px] font-medium text-[#1C1C1C] mb-1">
                        <span>Aortic Stenosis Biomarker</span>
                        <span className="font-semibold">{activePreset.asRisk.label}</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${activePreset.asRisk.color} rounded-full transition-all duration-500`}
                          style={{ width: `${activePreset.asRisk.percent}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11.5px] font-medium text-[#1C1C1C] mb-1">
                        <span>Mitral Regurgitation</span>
                        <span className="font-semibold">{activePreset.mrRisk.label}</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${activePreset.mrRisk.color} rounded-full transition-all duration-500`}
                          style={{ width: `${activePreset.mrRisk.percent}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11.5px] font-medium text-[#1C1C1C] mb-1">
                        <span>S3 / S4 Gallop Anomaly</span>
                        <span className="font-semibold">{activePreset.gallopRisk.label}</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${activePreset.gallopRisk.color} rounded-full transition-all duration-500`}
                          style={{ width: `${activePreset.gallopRisk.percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-5 pt-3 border-t border-[#E5DFD3]">
                  <Link
                    href={`/demo?sample=${activePreset.id}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#1C1C1C] hover:bg-[#E8234A] text-white text-[12.5px] font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Analyze in Demo Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Telemetry Badge Left */}
          <div className="hidden md:flex absolute -left-6 -bottom-6 bg-white p-4 rounded-2xl border border-[#E5DFD3] shadow-xl items-center gap-3.5 z-20">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#1C1C1C]">Sub-5s Analysis</div>
              <div className="text-[11px] text-[#6B7280]">Instant point-of-care feedback</div>
            </div>
          </div>

          {/* Floating Telemetry Badge Right */}
          <div className="hidden md:flex absolute -right-6 -top-6 bg-white p-4 rounded-2xl border border-[#E5DFD3] shadow-xl items-center gap-3.5 z-20">
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
