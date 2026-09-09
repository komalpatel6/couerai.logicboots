"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Check, Shield, Stethoscope, Building2, Globe2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Individual Clinician",
    badge: "Solo Practice",
    icon: Stethoscope,
    description: "Designed for general practitioners, pediatricians, and independent consulting cardiologists.",
    price: "Custom Practice Plan",
    priceSubtext: "Billed per practitioner / monthly",
    features: [
      "Real-time PCG & lung sound auscultation",
      "Instant PDF diagnostic reports with confidence metrics",
      "Unlimited on-device offline screenings",
      "Bluetooth & WiFi digital stethoscope compatibility",
      "Encrypted local session storage",
      "Email & clinical integration support",
    ],
    cta: "Request Clinician Access",
    href: "/demo?tier=clinician",
    highlighted: false,
  },
  {
    name: "Hospitals & Health Networks",
    badge: "Most Popular",
    icon: Building2,
    description: "Multi-department deployment for OPD triage, ICU step-down, and inpatient monitoring units.",
    price: "Institutional Pricing",
    priceSubtext: "Volume seat licensing + hardware bundle",
    features: [
      "Everything in Individual Clinician",
      "Multi-practitioner dashboard & team access",
      "EMR & HL7 / FHIR data export bridge",
      "Custom diagnostic threshold calibration",
      "Centralized audit trails & compliance logs",
      "Dedicated clinical onboarding & 99.9% uptime SLA",
    ],
    cta: "Schedule Hospital Demo",
    href: "/demo?tier=hospital",
    highlighted: true,
  },
  {
    name: "Research & Global Health",
    badge: "Field & Academic",
    icon: Globe2,
    description: "Optimized for rural screening drives, clinical trial sponsors, and epidemiological research.",
    price: "Grant & Pilot Rates",
    priceSubtext: "Subsidized non-profit & grant programs",
    features: [
      "Batch raw PCG waveform data export",
      "Offline-first field deployment kits",
      "Multi-language patient interface pack",
      "Custom anonymized telemetry logging",
      "Research team technical co-development",
      "Direct engineer-to-clinician feedback loop",
    ],
    cta: "Contact Global Health Team",
    href: "/contact?subject=research-partnership",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EDE8DC]/40 text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-7xl relative mt-[72px]">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-200/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-[#E8234A] uppercase mb-4">
            Transparent Clinical Deployment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1C1C] mb-4">
            Scalable Plans for Every <span className="text-[#E8234A]">Healthcare Setting</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            From single-doctor clinics to high-volume multi-specialty hospitals and rural screening missions, Coeur.AI adapts seamlessly to your operational scale.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? "bg-white border-2 border-[#E8234A] shadow-[0_20px_50px_rgba(232,35,74,0.12)] lg:-translate-y-2"
                    : "bg-white/80 border border-[#D9D0BF]/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        plan.highlighted
                          ? "bg-[#E8234A] text-white"
                          : "bg-rose-50 text-[#E8234A] border border-rose-100"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-rose-50 flex items-center justify-center text-[#E8234A]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 min-h-[42px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#D9D0BF]/50">
                    <p className="text-2xl font-extrabold text-[#1C1C1C] tracking-tight">
                      {plan.price}
                    </p>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {plan.priceSubtext}
                    </p>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13.5px] text-slate-700">
                        <Check className="h-4 w-4 text-[#E8234A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.href}
                  className={`inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-[#E8234A] hover:bg-[#C4182E] text-white shadow-md hover:shadow-[0_6px_20px_rgba(232,35,74,0.3)]"
                      : "bg-[#FDFAF5] hover:bg-[#EDE8DC] text-[#1C1C1C] border border-[#D9D0BF]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Institutional Guarantee Note */}
        <div className="bg-white border border-[#D9D0BF]/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E8234A] shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1C1C1C] mb-1">
                Custom Enterprise &amp; Device Bundle Quotations
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Need pre-calibrated digital stethoscopes bundled with your hospital software licenses? We supply turn-key packages with verified hardware partner support.
              </p>
            </div>
          </div>
          <Link
            href="/contact?subject=hardware-bundle"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#1C1C1C] hover:bg-black text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            Talk to Sales
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
