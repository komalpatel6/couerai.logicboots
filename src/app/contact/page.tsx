"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare } from "lucide-react";
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
          description: "We have received your inquiry and our clinical team will respond promptly.",
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
    <div className="flex flex-col min-h-screen bg-[#F8F5EE] text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 pt-36 pb-24 max-w-[1360px] relative">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Info (5 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] shadow-sm">
                <MessageSquare className="w-3.5 h-3.5" />
                Direct Communication &amp; Support
              </div>
              <h1 className="text-[36px] sm:text-[46px] md:text-[50px] font-bold tracking-tight text-[#1C1C1C] leading-[1.1]">
                Connect with our <br />
                <span className="text-[#E8234A]">Medical Affairs Team.</span>
              </h1>
              <p className="text-[#6B7280] text-[17px] leading-relaxed">
                Have questions regarding multi-center clinical validation trials, hardware transducer pairing, or hospital procurement? We are here to help.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#1C1C1C] font-bold text-[15px] mb-0.5">Clinical Email Support</h3>
                  <a href="mailto:contact@logicboots.com" className="text-[#6B7280] hover:text-[#E8234A] transition-colors text-[14px]">
                    contact@logicboots.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] flex items-center justify-center text-[#1C1C1C] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[#1C1C1C] font-bold text-[15px] mb-0.5">Phone Inquiries</h3>
                  <p className="text-[#6B7280] text-[14px]">+91 80 4710 4710</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] flex items-center justify-center text-[#1C1C1C] shrink-0">
                  <MapPin className="h-5 w-5 text-[#E8234A]" />
                </div>
                <div>
                  <h3 className="text-[#1C1C1C] font-bold text-[15px] mb-0.5">Global Research Centers</h3>
                  <p className="text-[#6B7280] text-[13.5px] leading-relaxed">
                    Mass Robotics, 12 Channel St #202, Boston, MA 02210<br />
                    TIDES Business Incubator, IIT Roorkee, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white border border-[#E5DFD3] rounded-3xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
              <h2 className="text-[20px] font-bold text-[#1C1C1C] mb-6">Send Us a Direct Message</h2>

              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Michael Chang"
                      required
                      className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="m.chang@cardiohealth.com"
                      required
                      className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Inquiry Subject
                  </label>
                  <Input
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Clinical Trial Collaboration / Hardware Compatibility"
                    className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] h-12 text-[14px] rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[12px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Message *
                  </label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide details regarding your clinical inquiry, hospital volume, or partnership..."
                    required
                    className="bg-[#F8F5EE] border-[#E5DFD3] text-[#1C1C1C] placeholder:text-[#6B7280] focus-visible:ring-[#E8234A]/20 focus-visible:border-[#E8234A] min-h-[140px] resize-none text-[14px] rounded-xl p-3.5"
                  />
                </div>

                {errorMessage && (
                  <p className="text-[#E8234A] text-[13px] font-semibold">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full md:w-auto h-12 px-8 text-[14px]"
                >
                  {status === "loading" ? "Transmitting Message..." : status === "success" ? "Message Delivered!" : (
                    <span className="flex items-center gap-2">
                      Send Clinical Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-[13.5px] font-medium">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>Your message has been sent successfully. Our clinical team will reply within 24 hours.</span>
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
