"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    setErrorMessage(null);

    if (formData.name.trim().length < 2) {
      setErrorMessage("Full name must be at least 2 characters.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast({
          title: "Message Delivered",
          description: "We have received your inquiry and will respond promptly.",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Submission failed. Please try again.");
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: data.error || "There was an error sending your message.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EDE8DC]/40 text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-7xl relative mt-[72px]">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-[#E8234A] uppercase">
                Direct Communication
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1C1C] leading-tight">
                Get in <span className="text-[#E8234A]">Touch</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Have questions about clinical pilot programs, hardware integration, or partnership opportunities? Our clinical and engineering team is here to assist.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D9D0BF]/50 shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#1C1C1C] font-bold text-[15px] mb-0.5">Email Support</h3>
                  <a href="mailto:contact@logicboots.com" className="text-slate-600 hover:text-[#E8234A] transition-colors text-[14px]">
                    contact@logicboots.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D9D0BF]/50 shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#1C1C1C] font-bold text-[15px] mb-0.5">Phone</h3>
                  <p className="text-slate-600 text-[14px]">+91 80 4710 4710</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#D9D0BF]/50 shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#1C1C1C] font-bold text-[15px] mb-0.5">Global Locations</h3>
                  <p className="text-slate-600 text-[13.5px] leading-snug">
                    Mass Robotics, 12 Channel St #202, Boston, MA 02210<br />
                    TIDES Business Incubator, IIT Roorkee, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white border border-[#D9D0BF]/60 rounded-3xl p-7 md:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-6">Send Us a Message</h2>

              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. John Doe"
                      required
                      className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 h-11 text-[14px] rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@hospital.org"
                      required
                      className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 h-11 text-[14px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Clinical Trial Inquiry / Integration"
                    className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 h-11 text-[14px] rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[12.5px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Message *
                  </label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our clinical team help you?"
                    required
                    className="bg-[#FDFAF5] border-slate-200 text-[#1C1C1C] placeholder:text-slate-400 focus-visible:ring-[#E8234A]/30 min-h-[140px] resize-none text-[14px] rounded-xl p-3.5"
                  />
                </div>

                {errorMessage && (
                  <p className="text-[#E8234A] text-[13px] font-semibold">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#E8234A] hover:bg-[#C4182E] text-white px-8 py-6 rounded-xl font-bold transition-all duration-200 w-full md:w-auto shadow-md hover:shadow-[0_6px_20px_rgba(232,35,74,0.3)] hover:-translate-y-0.5"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-[13.5px] font-medium mt-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Your message has been sent successfully. We will reply shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
