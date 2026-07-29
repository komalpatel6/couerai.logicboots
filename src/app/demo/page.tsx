"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Globe, ShieldCheck, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState } from "react";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-7xl relative mt-[72px]">
        {/* Soft background ambient gradient */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0052ff]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#faf7f2]/80 rounded-full blur-[80px] pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left/Header text */}
          <div className="lg:col-span-12 mb-4">
            <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
              <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[#0a1a4d] leading-[1.15]">
                Experience the Future of{" "}
                <span className="bg-gradient-to-r from-[#0052ff] to-[#3b82f6] bg-clip-text text-transparent">
                  Cardiac Care
                </span>
              </h1>
              <p className="text-slate-500 text-[16px] md:text-[18px] max-w-2xl leading-relaxed">
                Request a personalized demo to see how Coeur.AI can transform your workflow and support faster, more informed cardiac screening.
              </p>
            </motion.div>
          </div>

          {/* Form container - spans 7 columns on desktop */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <div className="bg-white border border-slate-100 rounded-[28px] p-6 md:p-8 shadow-[0_20px_50px_rgba(10,26,77,0.06)] hover:shadow-[0_20px_50px_rgba(10,26,77,0.08)] transition-shadow duration-300">
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13px] font-bold text-[#0a1a4d] uppercase tracking-wider">
                      Full name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      required
                      className="bg-slate-50/50 border-slate-200 text-[#0a1a4d] placeholder:text-slate-400 focus-visible:ring-[#0052ff]/30 h-11 text-[14px] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13px] font-bold text-[#0a1a4d] uppercase tracking-wider">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@clinic.com"
                      required
                      className="bg-slate-50/50 border-slate-200 text-[#0a1a4d] placeholder:text-slate-400 focus-visible:ring-[#0052ff]/30 h-11 text-[14px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[13px] font-bold text-[#0a1a4d] uppercase tracking-wider">
                    Contact Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="bg-slate-50/50 border-slate-200 text-[#0a1a4d] placeholder:text-slate-400 focus-visible:ring-[#0052ff]/30 h-11 text-[14px] rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[13px] font-bold text-[#0a1a4d] uppercase tracking-wider">
                    How can we help you?
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your clinic, hospital, or specific needs..."
                    className="bg-slate-50/50 border-slate-200 text-[#0a1a4d] placeholder:text-slate-400 focus-visible:ring-[#0052ff]/30 min-h-[120px] text-[14px] rounded-xl resize-none p-3.5"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#0052ff] hover:bg-[#0040d0] text-white px-8 py-6 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : status === "error" ? "Try Again" : "Submit Request →"}
                </Button>
                
                {status === "success" && (
                  <p className="text-emerald-600 text-sm mt-3 font-semibold">Thank you! Your request has been sent to our team.</p>
                )}
                {status === "error" && (
                  <p className="text-rose-600 text-sm mt-3 font-semibold">Something went wrong. Please try again or contact us directly.</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Value Props & Contact Info - spans 5 columns on desktop */}
          <div className="lg:col-span-5 flex flex-col gap-10 w-full mt-4 lg:mt-0">
            
            {/* Value Props List */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <div className="h-11 w-11 rounded-xl bg-[#0052ff]/5 border border-[#0052ff]/10 flex items-center justify-center text-[#0052ff]">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0a1a4d] mb-1.5">AI-Powered Diagnostics</h3>
                  <p className="text-slate-500 leading-relaxed text-[14px] md:text-[14.5px]">
                    Analyze cardiac data and surface anomalies like arrhythmias or valve disorders alongside your clinical judgment.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <div className="h-11 w-11 rounded-xl bg-[#0052ff]/5 border border-[#0052ff]/10 flex items-center justify-center text-[#0052ff]">
                    <Globe className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0a1a4d] mb-1.5">Seamless Remote Screening</h3>
                  <p className="text-slate-500 leading-relaxed text-[14px] md:text-[14.5px]">
                    Perform screening anywhere with on-device AI processing, perfect for field drives and rural triage.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <div className="h-11 w-11 rounded-xl bg-[#0052ff]/5 border border-[#0052ff]/10 flex items-center justify-center text-[#0052ff]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0a1a4d] mb-1.5">Actionable PDF Reports</h3>
                  <p className="text-slate-500 leading-relaxed text-[14px] md:text-[14.5px]">
                    Generate detailed summaries with confidence scores and waveforms to share with referring cardiologists.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Separator */}
            <motion.div variants={itemVariants} className="h-px w-full bg-slate-100 my-2" />

            {/* Contact Details Footer */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-[#0052ff]" /> Email Us
                </p>
                <a href="mailto:contact@logicboots.com" className="text-[#0052ff] hover:text-[#0040d0] transition-colors font-bold text-[15px]">
                  contact@logicboots.com
                </a>
              </div>
              <div className="space-y-1.5">
                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#0052ff]" /> Visit Us
                </p>
                <p className="text-[#0a1a4d] font-semibold text-[14px] leading-relaxed">
                  Mass Robotics, 12 channel, St # 202, Boston, MA 02210
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
