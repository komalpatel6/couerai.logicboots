"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

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
    <div className="flex flex-col min-h-screen bg-background text-slate-200 font-sans selection:bg-teal-500/30">
      <Header />

      <main className="flex-grow container mx-auto px-4 md:px-6 py-16 lg:py-24 max-w-7xl relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-24 lg:gap-y-12 items-start"
        >
          {/* Row 1 Left: Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Experience the Future of <br />
              <span className="text-[#208b96]">Cardiac Care</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Request a personalized demo to see how Coeur AI can transform your practice.
            </p>
          </motion.div>

          {/* Row 1 Right: Spacer on Desktop to push Content to Row 2 */}
          <div className="hidden lg:block"></div>

          {/* Row 2 Left: Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-[#121820] border border-white/5 rounded-2xl p-5 md:p-6 shadow-2xl">
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Full name</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    required
                    className="bg-[#0a0f16] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-teal-500/50 h-10 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    required
                    className="bg-[#0a0f16] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-teal-500/50 h-10 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300">Contact Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91"
                    className="bg-[#0a0f16] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-teal-500/50 h-10 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">How can we help you?</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your clinic or hospital..."
                    className="bg-[#0a0f16] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-teal-500/50 min-h-[100px] text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#208b96] hover:bg-[#1a767f] text-white px-6 py-5 rounded-md font-medium transition-colors w-full sm:w-auto"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : status === "error" ? "Try Again" : "Request Demo →"}
                </Button>
                {status === "success" && (
                  <p className="text-emerald-400 text-xs mt-2 font-medium">Thank you! Your request has been sent to our team.</p>
                )}
                {status === "error" && (
                  <p className="text-rose-400 text-xs mt-2 font-medium">Something went wrong. Please try again or contact us directly.</p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Row 2 Right: Value Props & Contact Info */}
          <div className="flex flex-col gap-12 w-full mt-4 lg:mt-0">

            {/* Value Props List */}
            <div className="space-y-10">
              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Diagnostics</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Analyze heart sounds and detect anomalies like arrhythmias or valve disorders with superhuman accuracy.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Seamless Remote Monitoring</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Monitor patients anywhere, breaking down geographical barriers and improving care accessibility.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-Time Actionable Insights</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    Reduce manual review time and receive instant, life-saving alerts directly to your devices.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Separator */}
            <motion.div variants={itemVariants} className="h-px w-full bg-white/10 my-2" />

            {/* Contact Details Footer */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">Email Us</p>
                <a href="mailto:contact@logicboots.com" className="text-[#208b96] hover:text-teal-400 transition-colors font-medium">
                  contact@logicboots.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">Visit Us</p>
                <p className="text-white font-medium">
                  Mass Robotics, 12 channel, St # 202, Boston,MA 02210
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
