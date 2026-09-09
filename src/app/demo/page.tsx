"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Globe, ShieldCheck, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { toast } from "@/hooks/use-toast";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
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
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast({
          title: "Demo Request Submitted",
          description: "Our clinical integration team will contact you within 24 hours.",
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
    <div className="flex flex-col min-h-screen bg-[#EDE8DC]/40 text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-7xl relative mt-[72px]">
        {/* Subtle ambient blur */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Header text */}
          <div className="lg:col-span-12 mb-2">
            <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-[#E8234A] uppercase">
                Clinical Decision Support Demo
              </div>
              <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#1C1C1C] leading-[1.15]">
                Experience the Future of{" "}
                <span className="text-[#E8234A]">Point-of-Care Diagnostics</span>
              </h1>
              <p className="text-slate-600 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
                Schedule a personalized walkthrough to see how Coeur.AI integrates with your clinical practice, digitizes auscultation workflows, and accelerates triage.
              </p>
            </motion.div>
          </div>

          {/* Form container - 7 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <div className="bg-white border border-[#D9D0BF]/60 rounded-3xl p-7 md:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-6">Request Your Walkthrough</h2>
              
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="demo-name" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <Input
                      id="demo-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Jane Smith"
                      required
                      className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 h-11 text-[14px] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="demo-email" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Clinical / Work Email *
                    </label>
                    <Input
                      id="demo-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@hospital.org"
                      required
                      className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 h-11 text-[14px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="demo-phone" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Contact Number (Optional)
                  </label>
                  <Input
                    id="demo-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (617) 555-0199 or +91 98765 43210"
                    className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 h-11 text-[14px] rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="demo-message" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Clinical Context / Practice Type
                  </label>
                  <Textarea
                    id="demo-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your hospital, clinic, rural health project, or research setup..."
                    className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 min-h-[120px] text-[14px] rounded-xl resize-none p-3.5"
                  />
                </div>

                {fieldError && (
                  <p className="text-[#E8234A] text-[13px] font-semibold">{fieldError}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#E8234A] hover:bg-[#C4182E] text-white px-8 py-6 rounded-xl font-bold transition-all duration-200 w-full sm:w-auto shadow-md hover:shadow-[0_6px_20px_rgba(232,35,74,0.3)] hover:-translate-y-0.5"
                >
                  {status === "loading" ? "Submitting..." : status === "success" ? "Submitted Successfully!" : "Submit Demo Request →"}
                </Button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-[13.5px] font-medium mt-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Thank you! Your request has been received. Our clinical specialists will be in touch.</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Value Props & Contact Info - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-10 w-full mt-2 lg:mt-0">
            
            {/* Value Props List */}
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex gap-4 p-4 rounded-2xl bg-white/70 border border-[#D9D0BF]/40">
                <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1C1C1C] mb-1">AI Auscultation Screening</h3>
                  <p className="text-slate-600 leading-relaxed text-[13.5px]">
                    Analyze sound phonocardiograms and surface murmur or COPD wheezing patterns to augment clinical triage.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 p-4 rounded-2xl bg-white/70 border border-[#D9D0BF]/40">
                <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1C1C1C] mb-1">Fully Offline Ready</h3>
                  <p className="text-slate-600 leading-relaxed text-[13.5px]">
                    Perform screening anywhere with on-device processing — optimized for rural clinics and field health drives.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 p-4 rounded-2xl bg-white/70 border border-[#D9D0BF]/40">
                <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1C1C1C] mb-1">Actionable Clinical PDF Reports</h3>
                  <p className="text-slate-600 leading-relaxed text-[13.5px]">
                    Export structured diagnostic summaries with confidence indicators and PCG waveform extracts.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Separator */}
            <motion.div variants={itemVariants} className="h-px w-full bg-[#D9D0BF]/50" />

            {/* Direct Contact */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-[#E8234A]" /> Email Support
                </p>
                <a href="mailto:contact@logicboots.com" className="text-[#E8234A] hover:text-[#C4182E] transition-colors font-bold text-[14px]">
                  contact@logicboots.com
                </a>
              </div>
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#E8234A]" /> Boston Hub
                </p>
                <p className="text-[#1C1C1C] font-semibold text-[13.5px] leading-snug">
                  Mass Robotics, 12 Channel St #202, Boston, MA 02210
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
