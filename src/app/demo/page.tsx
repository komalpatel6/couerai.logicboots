"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Activity, ShieldCheck, Mail, MapPin, CheckCircle2, Stethoscope, ArrowRight, Clock } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { toast } from "@/hooks/use-toast";

export default function DemoPage() {
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

  const roles = [
    "Cardiologist / Physician",
    "Hospital Administrator",
    "Primary Care Clinic",
    "Clinical Researcher",
  ];

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
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Header text */}
          <div className="lg:col-span-12 mb-2">
            <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] shadow-sm">
                <Stethoscope className="w-3.5 h-3.5" />
                Clinical Decision Support Demonstration
              </div>
              <h1 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[#1C1C1C] leading-[1.1]">
                Experience Real-Time AI <br />
                <span className="text-[#E8234A]">Cardiac Auscultation.</span>
              </h1>
              <p className="text-[#6B7280] text-[17px] leading-relaxed max-w-2xl">
                Schedule a 15-minute 1-on-1 walkthrough with our medical engineering team to see live PCG spectrogram isolation, murmur classification, and EHR FHIR export in action.
              </p>
            </motion.div>
          </div>

          {/* Form container - 7 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <div className="bg-white border border-[#E5DFD3] rounded-3xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
              <h2 className="text-[20px] font-bold text-[#1C1C1C] mb-6">Request Clinical Demonstration</h2>
              
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                
                {/* Role Pill Selector */}
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    I am a:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {roles.map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setFormData({ ...formData, role: r })}
                        className={`px-3 py-2 rounded-xl text-[12px] font-semibold transition-all border text-center ${
                          formData.role === r
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
                      Clinical / Institutional Email *
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
                      Hospital / Organization
                    </label>
                    <Input
                      id="demo-org"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Mass General / Apollo Hospitals"
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
                    Clinical Context / Questions
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
                  className="btn-primary w-full h-12 text-[15px]"
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
          </motion.div>

          {/* Trust Highlights - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full mt-2 lg:mt-0">
            
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-6">
              <h3 className="text-[18px] font-bold text-[#1C1C1C] border-b border-[#E5DFD3] pb-4">
                What to Expect in Your Demo
              </h3>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1C1C1C] mb-1">15-Minute Tailored Session</h4>
                  <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                    Interactive walkthrough tailored specifically to outpatient OPD, cardiology ward, or field screening setups.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1C1C1C] mb-1">Live Waveform Telemetry</h4>
                  <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                    Test PCG sound recordings with real-time acoustic segmentation and murmur probability classification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] flex items-center justify-center text-[#1C1C1C] shrink-0">
                  <ShieldCheck className="h-5 w-5 text-[#E8234A]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1C1C1C] mb-1">EHR & Hardware Consultation</h4>
                  <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                    Review digital stethoscope compatibility and HL7/FHIR connector protocols for your hospital system.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#6B7280]">
                Direct Inquiries
              </h4>
              <div className="space-y-3 text-[14px]">
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <Mail className="h-4 w-4 text-[#E8234A]" />
                  <a href="mailto:contact@logicboots.com" className="text-[#1C1C1C] font-semibold hover:text-[#E8234A] transition-colors">
                    contact@logicboots.com
                  </a>
                </div>
                <div className="flex items-start gap-2 text-[#6B7280]">
                  <MapPin className="h-4 w-4 text-[#E8234A] shrink-0 mt-0.5" />
                  <span>Mass Robotics, 12 Channel St #202, Boston, MA 02210</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
