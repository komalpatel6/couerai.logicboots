"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity, ShieldCheck, Mail, MapPin, CheckCircle2, Stethoscope, ArrowRight,
  Clock, Play, Pause, Volume2, Upload, FileText, Download, Sparkles, Cpu,
  Layers, AlertCircle, RefreshCw, X, ChevronRight, Check
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { toast } from "@/hooks/use-toast";

interface ClinicalSample {
  id: string;
  name: string;
  category: "Valvular Murmur" | "Physiological" | "Heart Failure" | "Pulmonary";
  valveLocation: string;
  bpm: number;
  duration: string;
  confidence: string;
  diagnosis: string;
  severity: string;
  icd10: string;
  findings: string[];
  recommendation: string;
  spectrogramPath: string;
}

const clinicalSamples: ClinicalSample[] = [
  {
    id: "normal",
    name: "Normal S1/S2 Sinus Rhythm",
    category: "Physiological",
    valveLocation: "Aortic & Mitral Area (Canonical)",
    bpm: 72,
    duration: "10.0s",
    confidence: "99.2%",
    diagnosis: "Normal Acoustic Auscultation Profile",
    severity: "Physiological (No Pathology)",
    icd10: "Z00.00 (General medical examination)",
    findings: [
      "Crisp S1 mitral/tricuspid closure split at 50Hz",
      "S2 aortic/pulmonic closure well-demarcated at 85Hz",
      "Zero hemodynamically significant systolic or diastolic murmurs",
      "Clear isoelectric diastole without S3/S4 gallop sounds",
    ],
    recommendation: "Routine annual preventive health surveillance. No further cardiology referral indicated.",
    spectrogramPath: "M 0 50 Q 15 50 25 50 Q 30 20 35 80 Q 40 10 45 90 Q 50 45 55 50 Q 75 50 85 50 Q 95 30 105 70 Q 115 50 140 50 Q 155 50 165 50 Q 170 20 175 80 Q 180 10 185 90 Q 190 45 195 50 Q 215 50 225 50 Q 235 30 245 70 Q 255 50 280 50 L 500 50",
  },
  {
    id: "as",
    name: "Aortic Stenosis (Valvular)",
    category: "Valvular Murmur",
    valveLocation: "2nd Right Intercostal Space (Aortic)",
    bpm: 78,
    duration: "10.0s",
    confidence: "97.4%",
    diagnosis: "Aortic Valve Stenosis (Crescendo-Decrescendo)",
    severity: "Grade 3/6 Mid-Systolic Ejection Murmur",
    icd10: "I35.0 (Nonrheumatic aortic stenosis)",
    findings: [
      "Harsh crescendo-decrescendo envelope peaking in mid-systole (350Hz–1,200Hz)",
      "Attenuated and delayed A2 closure component",
      "Acoustic energy radiates to right carotid arterial baseline",
      "Aortic valve orifice restriction signature detected",
    ],
    recommendation: "Urgent Transthoracic Echocardiography (TTE) recommended to quantify transvalvular gradient and valve area.",
    spectrogramPath: "M 0 50 Q 15 50 25 50 Q 30 25 35 75 Q 40 35 45 65 Q 50 20 55 80 Q 60 10 65 90 Q 70 25 75 75 Q 80 40 85 60 Q 95 35 105 65 Q 115 50 140 50 Q 155 50 165 50 Q 170 25 175 75 Q 180 35 185 65 Q 190 20 195 80 Q 200 10 205 90 Q 210 25 215 75 Q 220 40 225 60 L 500 50",
  },
  {
    id: "mr",
    name: "Mitral Regurgitation (Apex)",
    category: "Valvular Murmur",
    valveLocation: "5th Left ICS Mid-Clavicular (Apex)",
    bpm: 84,
    duration: "10.0s",
    confidence: "96.8%",
    diagnosis: "Mitral Regurgitation (Holosystolic)",
    severity: "Grade 3/6 Blowing Holosystolic Murmur",
    icd10: "I34.0 (Nonrheumatic mitral valve insufficiency)",
    findings: [
      "Continuous high-frequency plateau murmur (400Hz–1,600Hz) from S1 to S2",
      "Diminished S1 intensity at apex due to incomplete coaptation",
      "Radiation of acoustic jet towards the left axilla",
      "No diastolic rumble detected",
    ],
    recommendation: "Schedule color Doppler echocardiogram to evaluate regurgitant volume and left ventricular dimensions.",
    spectrogramPath: "M 0 50 Q 15 50 25 50 Q 30 15 35 85 Q 40 25 45 75 Q 50 20 55 80 Q 60 22 65 78 Q 70 20 75 80 Q 80 25 85 75 Q 95 30 105 70 Q 115 50 140 50 Q 155 50 165 50 Q 170 15 175 85 Q 180 25 185 75 Q 190 20 195 80 Q 200 22 205 78 L 500 50",
  },
  {
    id: "s3",
    name: "Heart Failure S3 Gallop",
    category: "Heart Failure",
    valveLocation: "Left Lower Sternal Border",
    bpm: 92,
    duration: "10.0s",
    confidence: "95.6%",
    diagnosis: "Ventricular Gallop (S3 Sign)",
    severity: "Pathological Diastolic Volume Overload",
    icd10: "I50.9 (Heart failure, unspecified)",
    findings: [
      "Low-frequency proto-diastolic impact (35Hz–55Hz) occurring 140ms post-S2",
      "Elevated resting cardiac rate (92 BPM sinus tachycardia)",
      "High compliance deceleration during rapid ventricular filling phase",
      "Acoustic correlation with elevated left ventricular end-diastolic pressure",
    ],
    recommendation: "Correlate with serum NT-proBNP levels and clinical assessment of fluid volume status.",
    spectrogramPath: "M 0 50 Q 15 50 25 50 Q 30 20 35 80 Q 40 10 45 90 Q 50 45 55 50 Q 75 50 85 50 Q 95 30 105 70 Q 115 50 125 50 Q 130 35 135 65 Q 140 50 150 50 Q 165 50 170 20 175 80 Q 180 10 185 90 Q 190 45 195 50 Q 215 50 225 50 L 500 50",
  },
  {
    id: "pulmonary",
    name: "Pulmonary Crackles (Fine Bibasilar)",
    category: "Pulmonary",
    valveLocation: "Posterior Lung Bases (Bilateral)",
    bpm: 76,
    duration: "10.0s",
    confidence: "96.1%",
    diagnosis: "Fine Inspiratory Adventitious Crackles",
    severity: "Moderate Pulmonary Parenchymal / Fluid Signature",
    icd10: "R09.89 (Other specified symptoms involving circulatory and respiratory)",
    findings: [
      "Discontinuous, explosive acoustic bursts during late inspiration (650Hz–1,800Hz)",
      "Absence of polyphonic expiratory wheezing",
      "Acoustic signature consistent with alveolar re-opening against fluid pressure",
    ],
    recommendation: "Evaluate for congestive pulmonary venous congestion or interstitial lung parenchymal changes.",
    spectrogramPath: "M 0 50 Q 20 50 30 50 Q 35 10 40 90 Q 45 20 50 80 Q 55 15 60 85 Q 70 50 100 50 Q 120 50 130 50 Q 135 10 140 90 Q 145 20 150 80 Q 155 15 160 85 Q 170 50 200 50 L 500 50",
  },
];

function DemoContent() {
  const searchParams = useSearchParams();
  const sampleParam = searchParams.get("sample");

  const [activeTab, setActiveTab] = useState<"sandbox" | "form">("sandbox");
  const [selectedSampleId, setSelectedSampleId] = useState<string>(sampleParam || "as");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<string>("");
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Cardiologist / Physician",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioTimerRef = useRef<NodeJS.Timeout | null>(null);

  const selectedSample = clinicalSamples.find((s) => s.id === selectedSampleId) || clinicalSamples[1];

  // Synthesize heart sound for selected sample
  const playSampleSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;

      // S1 Thud
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

      // Murmur if AS or MR
      if (selectedSample.id === "as" || selectedSample.id === "mr") {
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
        filter.frequency.setValueAtTime(selectedSample.id === "as" ? 380 : 620, now + 0.08);
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

      // S2 Sound
      const s2Time = now + (60 / selectedSample.bpm) * 0.35;
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(selectedSample.id === "as" ? 65 : 85, s2Time);
      osc2.frequency.exponentialRampToValueAtTime(40, s2Time + 0.08);
      gain2.gain.setValueAtTime(0.5, s2Time);
      gain2.gain.exponentialRampToValueAtTime(0.001, s2Time + 0.09);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(s2Time);
      osc2.stop(s2Time + 0.09);

      // S3 Extra Sound
      if (selectedSample.id === "s3") {
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
      // Graceful fallback
    }
  };

  useEffect(() => {
    if (isPlayingAudio) {
      const intervalMs = (60 / selectedSample.bpm) * 1000;
      playSampleSound();
      audioTimerRef.current = setInterval(playSampleSound, intervalMs);
    } else {
      if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    }
    return () => {
      if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    };
  }, [isPlayingAudio, selectedSampleId, selectedSample.bpm]);

  const handleRunAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress("Extracting PCG envelope & filtering ambient room noise...");
    
    await new Promise((r) => setTimeout(r, 600));
    setAnalysisProgress("Executing on-device convolutional neural network (CoreML / ONNX)...");
    
    await new Promise((r) => setTimeout(r, 700));
    setAnalysisProgress("Computing S1/S2 boundaries & murmur frequency distribution...");
    
    await new Promise((r) => setTimeout(r, 600));
    setAnalysisProgress("Triage complete. Formatted clinical payload ready.");
    
    await new Promise((r) => setTimeout(r, 300));
    setIsAnalyzing(false);

    toast({
      title: "AI Auscultation Complete",
      description: `${selectedSample.diagnosis} identified with ${selectedSample.confidence} confidence.`,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError(null);

    if (formData.name.trim().length < 2) {
      setFieldError("Please enter your full name (at least 2 characters).");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setFieldError("Please enter a valid clinical or business email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Role: ${formData.role} | Org: ${formData.organization} | Note: ${formData.message}`,
        }),
      });

      const resData = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", role: "Cardiologist / Physician", organization: "", message: "" });
        toast({
          title: "Demonstration Scheduled",
          description: "Our Medical Affairs team will confirm your clinical demo time within 24 hours.",
        });
      } else {
        setStatus("error");
        setFieldError(resData.error || "Submission failed. Please try again.");
        toast({
          variant: "destructive",
          title: "Request Failed",
          description: resData.error || "There was an error submitting your request.",
        });
      }
    } catch (error) {
      console.error("Error submitting demo request:", error);
      setStatus("error");
      setFieldError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5EE] text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 pt-36 pb-24 max-w-[1360px] relative">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Clinical Portal
          </div>
          <h1 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[#1C1C1C] leading-[1.1] mb-5">
            Experience AI Auscultation <br />
            <span className="text-[#E8234A]">Live in Your Browser.</span>
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed">
            Test phonocardiogram acoustic segmentation, murmur grading, and EHR FHIR export directly in our interactive sandbox, or schedule an institutional hospital pilot.
          </p>

          {/* Primary View Switcher Tabs */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
            <button
              onClick={() => setActiveTab("sandbox")}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "sandbox"
                  ? "bg-[#E8234A] text-white shadow-sm"
                  : "text-[#6B7280] hover:text-[#1C1C1C]"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Interactive AI Sandbox</span>
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "form"
                  ? "bg-[#1C1C1C] text-white shadow-sm"
                  : "text-[#6B7280] hover:text-[#1C1C1C]"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Schedule 1-on-1 Consultation</span>
            </button>
          </div>
        </div>

        {/* ─── TAB 1: INTERACTIVE AI SANDBOX ─── */}
        {activeTab === "sandbox" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left: Sample Selector & Audio Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Preset Cards List */}
              <div className="bg-white rounded-3xl border border-[#E5DFD3] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5DFD3]">
                  <h3 className="text-[15px] font-bold text-[#1C1C1C]">
                    Select Clinical Sample
                  </h3>
                  <span className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
                    {clinicalSamples.length} Cases
                  </span>
                </div>

                <div className="space-y-2.5">
                  {clinicalSamples.map((sample) => {
                    const isSelected = selectedSampleId === sample.id;
                    return (
                      <button
                        key={sample.id}
                        onClick={() => {
                          setSelectedSampleId(sample.id);
                          setIsPlayingAudio(false);
                        }}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#F8F5EE] border-[#E8234A] shadow-sm ring-1 ring-[#E8234A]/20"
                            : "bg-white border-[#E5DFD3] hover:border-neutral-400 hover:bg-[#FAF9F5]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              sample.category === "Valvular Murmur"
                                ? "bg-[#E8234A]/10 text-[#E8234A]"
                                : sample.category === "Heart Failure"
                                ? "bg-amber-500/10 text-amber-700"
                                : sample.category === "Pulmonary"
                                ? "bg-sky-500/10 text-sky-700"
                                : "bg-emerald-500/10 text-emerald-700"
                            }`}>
                              {sample.category}
                            </span>
                            <span className="text-[11px] text-[#6B7280] font-mono">
                              {sample.bpm} BPM
                            </span>
                          </div>
                          <div className="text-[14px] font-bold text-[#1C1C1C]">
                            {sample.name}
                          </div>
                          <div className="text-[12px] text-[#6B7280]">
                            {sample.valveLocation}
                          </div>
                        </div>

                        <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-[#E8234A] translate-x-1" : "text-neutral-400"}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Upload Custom Audio File Option */}
                <div className="mt-4 pt-4 border-t border-[#E5DFD3]">
                  <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-[#E5DFD3] hover:border-[#E8234A] bg-[#F8F5EE]/60 text-[13px] font-semibold text-[#1C1C1C] cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-[#E8234A]" />
                    <span>Upload Custom Stethoscope Audio (.wav / .mp3)</span>
                    <input
                      type="file"
                      accept="audio/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setUploadedFile(file);
                          toast({
                            title: "Audio Loaded",
                            description: `${file.name} ready for on-device inference.`,
                          });
                        }
                      }}
                    />
                  </label>
                  {uploadedFile && (
                    <div className="mt-2 text-[12px] text-emerald-700 flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5" />
                      Loaded file: {uploadedFile.name}
                    </div>
                  )}
                </div>

              </div>

              {/* Hardware Connection Card */}
              <div className="bg-white rounded-3xl border border-[#E5DFD3] p-6 shadow-sm">
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                  Connected Stethoscope Hardware
                </h4>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-bold text-[#1C1C1C]">
                        Digital Transducer Stream
                      </div>
                      <div className="text-[11px] text-[#6B7280]">
                        44.1kHz • 16-bit PCM • Active BLE 5.2
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Synced
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Live Telemetry Display & Diagnostic Report (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Telemetry Visualizer Box */}
              <div className="bg-[#18181B] rounded-3xl p-6 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-telemetry-grid opacity-30 pointer-events-none" />

                {/* Visualizer Top Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[13px] font-bold text-white font-mono uppercase tracking-wider">
                        Phonocardiogram (PCG) Monitor
                      </span>
                    </div>
                    <div className="text-[12px] text-neutral-400 mt-0.5">
                      {selectedSample.valveLocation}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[12px] font-bold transition-all cursor-pointer ${
                        isPlayingAudio
                          ? "bg-[#E8234A] text-white shadow-md shadow-[#E8234A]/30"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                      }`}
                    >
                      {isPlayingAudio ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Mute Stream</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Play Auscultation Sound</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* PCG Waveform Display */}
                <div className="relative z-10 my-4 bg-black/50 rounded-2xl p-4 border border-neutral-800">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                    <span>Acoustic Frequency: 20Hz – 2,000Hz</span>
                    <span className="text-white font-bold">{selectedSample.bpm} BPM</span>
                  </div>

                  <svg
                    className="w-full h-28 stroke-[#E8234A]"
                    fill="none"
                    viewBox="0 0 500 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={selectedSample.spectrogramPath}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-ecg"
                    />
                  </svg>

                  <div className="flex justify-between text-[10.5px] font-mono text-neutral-400 pt-3 border-t border-neutral-800/80">
                    <span className="text-[#E8234A] font-bold">S1 Pulse</span>
                    <span className="text-amber-400 font-bold">Systolic Phase</span>
                    <span className="text-sky-400 font-bold">S2 Pulse</span>
                    <span className="text-neutral-400">Diastolic Phase</span>
                  </div>
                </div>

                {/* Action: Run AI Button */}
                <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[12px] text-neutral-400 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>On-Device Neural Latency: ~12ms</span>
                  </div>

                  <button
                    onClick={handleRunAnalysis}
                    disabled={isAnalyzing}
                    className="btn-primary w-full sm:w-auto h-11 px-6 text-[13.5px] shadow-lg shadow-[#E8234A]/30 cursor-pointer"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Inferring Biomarkers...</span>
                      </>
                    ) : (
                      <>
                        <Activity className="w-4 h-4" />
                        <span>Run AI Auscultation Triage</span>
                      </>
                    )}
                  </button>
                </div>

                {isAnalyzing && (
                  <div className="relative z-10 mt-3 p-3 rounded-xl bg-white/5 border border-white/10 text-[12px] text-amber-300 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>{analysisProgress}</span>
                  </div>
                )}
              </div>

              {/* Diagnostic AI Triage Report Card */}
              <div className="bg-white rounded-3xl border border-[#E5DFD3] p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5DFD3]">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                      Diagnostic Intelligence Summary
                    </span>
                    <h3 className="text-[20px] font-bold text-[#1C1C1C]">
                      {selectedSample.diagnosis}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-[#E8234A]/10 text-[#E8234A] border border-[#E8234A]/20">
                      {selectedSample.confidence} Confidence
                    </span>
                  </div>
                </div>

                {/* Key Findings List */}
                <div className="space-y-3">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#1C1C1C]">
                    Automated Acoustic Findings:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSample.findings.map((f, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] flex items-start gap-2 text-[13px] text-[#1C1C1C]">
                        <CheckCircle2 className="w-4 h-4 text-[#E8234A] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation Box */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-[13.5px] flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold mb-0.5">Clinical Protocol Guidance:</strong>
                    {selectedSample.recommendation}
                  </div>
                </div>

                {/* Export Report Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[12px] text-[#6B7280]">
                    Suggested Code: <strong className="text-[#1C1C1C] font-mono">{selectedSample.icd10}</strong>
                  </div>
                  <button
                    onClick={() => setShowReportModal(true)}
                    className="btn-secondary w-full sm:w-auto h-11 px-5 text-[13.5px] cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#E8234A]" />
                    <span>Preview Audit-Ready EHR Dossier (.pdf)</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* ─── TAB 2: SCHEDULE INSTITUTIONAL CONSULTATION ─── */}
        {activeTab === "form" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto"
          >
            {/* Form Container */}
            <div className="lg:col-span-7 w-full bg-white border border-[#E5DFD3] rounded-3xl p-8 md:p-10 shadow-sm">
              <h2 className="text-[22px] font-bold text-[#1C1C1C] mb-6">
                Request Clinical Demonstration
              </h2>
              
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                
                {/* Role Pill Selector */}
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    I am a:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Cardiologist / Physician", "Hospital Admin", "Primary Care Clinic", "Researcher"].map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setFormData({ ...formData, role: r })}
                        className={`px-3 py-2 rounded-xl text-[12px] font-semibold transition-all border text-center cursor-pointer ${
                          formData.role.startsWith(r.split(" ")[0])
                            ? "bg-[#E8234A] text-white border-[#E8234A] shadow-sm"
                            : "bg-[#F8F5EE] text-[#6B7280] border-[#E5DFD3] hover:text-[#1C1C1C]"
                        }`}
                      >
                        {r.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="demo-name" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <Input
                      id="demo-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Sarah Jenkins"
                      required
                      className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="demo-email" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Clinical Email *
                    </label>
                    <Input
                      id="demo-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@cardiology.org"
                      required
                      className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="demo-org" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Hospital / Network
                    </label>
                    <Input
                      id="demo-org"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Mass General / Apollo"
                      className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="demo-phone" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="demo-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (617) 555-0199"
                      className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="demo-message" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Clinical Context / Special Requirements
                  </label>
                  <Textarea
                    id="demo-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your diagnostic volume, existing digital stethoscopes, or specific valvular screening interests..."
                    className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] min-h-[120px] text-[14px] rounded-xl resize-none p-3.5"
                  />
                </div>

                {fieldError && (
                  <p className="text-[#E8234A] text-[13px] font-semibold">{fieldError}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full h-12 text-[15px] cursor-pointer"
                >
                  <span>{status === "loading" ? "Submitting Request..." : "Schedule Clinical Walkthrough"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-[13.5px] font-medium">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>Your request has been received. Our Medical Affairs team will email you within 24 hours.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Right: Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 shadow-sm space-y-6">
                <h3 className="text-[18px] font-bold text-[#1C1C1C] border-b border-[#E5DFD3] pb-4">
                  What to Expect in Your Session
                </h3>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1C1C1C] mb-1">15-Minute Tailored Session</h4>
                    <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                      Customized demonstration for outpatient clinic, cardiology ward, or field screening setups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1C1C1C] mb-1">Live Waveform Telemetry</h4>
                    <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                      Test PCG sound recordings with real-time acoustic segmentation and murmur classification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] flex items-center justify-center text-[#1C1C1C] shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#E8234A]" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1C1C1C] mb-1">EHR & Hardware Review</h4>
                    <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                      Review digital stethoscope compatibility and HL7/FHIR connector protocols for your hospital.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#E5DFD3] p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[13.5px] text-[#6B7280]">
                  <Mail className="w-4 h-4 text-[#E8234A]" />
                  <span>Direct inquiries: <a href="mailto:contact@logicboots.com" className="text-[#1C1C1C] font-semibold hover:text-[#E8234A]">contact@logicboots.com</a></span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </main>

      {/* ─── EHR DOSSIER PREVIEW MODAL ─── */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-[#E5DFD3] max-w-2xl w-full p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowReportModal(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#F8F5EE] hover:bg-neutral-200 text-[#1C1C1C] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5DFD3]">
              <div className="h-10 w-10 rounded-xl bg-[#E8234A] flex items-center justify-center text-white font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#1C1C1C]">
                  Audit-Ready Clinical EHR Summary
                </h3>
                <p className="text-[12px] text-[#6B7280]">
                  HL7 / FHIR Attachment Compatible • Coeur.AI Telemetry v2.4
                </p>
              </div>
            </div>

            {/* Structured Report Mock */}
            <div className="bg-[#F8F5EE] rounded-2xl p-5 border border-[#E5DFD3] space-y-4 font-mono text-[12.5px] text-[#1C1C1C]">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E5DFD3]">
                <div><span className="text-[#6B7280]">PATIENT ID:</span> #CR-88219</div>
                <div><span className="text-[#6B7280]">DATE:</span> {new Date().toLocaleDateString()}</div>
                <div><span className="text-[#6B7280]">VALVE SITE:</span> {selectedSample.valveLocation}</div>
                <div><span className="text-[#6B7280]">HEART RATE:</span> {selectedSample.bpm} BPM</div>
              </div>

              <div className="space-y-1 pb-3 border-b border-[#E5DFD3]">
                <div className="text-[#6B7280] font-sans font-bold text-[12px] uppercase">PRIMARY CLASSIFICATION:</div>
                <div className="text-[15px] font-bold text-[#E8234A]">{selectedSample.diagnosis}</div>
                <div className="text-[12px] text-[#1C1C1C] font-semibold">{selectedSample.severity} ({selectedSample.confidence})</div>
              </div>

              <div className="space-y-1.5 pb-3 border-b border-[#E5DFD3]">
                <div className="text-[#6B7280] font-sans font-bold text-[12px] uppercase">SPECTROGRAM FINDINGS:</div>
                {selectedSample.findings.map((f, i) => (
                  <div key={i} className="text-[12px] text-neutral-800">• {f}</div>
                ))}
              </div>

              <div>
                <div className="text-[#6B7280] font-sans font-bold text-[12px] uppercase">CLINICAL ACTION:</div>
                <div className="text-[12px] text-neutral-800">{selectedSample.recommendation}</div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => {
                  toast({
                    title: "Report Exported",
                    description: "Encrypted PDF dossier saved for EHR attachment.",
                  });
                  setShowReportModal(false);
                }}
                className="btn-primary h-11 px-6 text-[13.5px] w-full sm:w-auto cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Encrypted PDF Report</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F5EE]" />}>
      <DemoContent />
    </Suspense>
  );
}
