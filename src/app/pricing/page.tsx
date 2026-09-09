"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import {
  Check, Shield, Stethoscope, Building2, Globe2, ArrowRight,
  Minus, Plus, Sparkles, Calculator, TrendingUp, Clock, HeartPulse
} from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Individual Clinician",
    badge: "Solo Practitioner",
    icon: Stethoscope,
    description: "Designed for general physicians, consulting cardiologists, and independent pediatricians.",
    monthlyPrice: "$89",
    annualPrice: "$69",
    priceSubtext: "per clinician / month, billed annually",
    features: [
      "Real-time PCG waveform & spectrogram view",
      "Murmur & S1/S2 acoustic segmentation",
      "Unlimited 100% offline on-device inferencing",
      "Standardized encrypted PDF report generation",
      "Bluetooth & 3.5mm digital stethoscope support",
      "Standard email & clinical documentation support",
    ],
    cta: "Start Clinician Trial",
    href: "/demo?tier=clinician",
    highlighted: false,
  },
  {
    name: "Clinic & Cardiology Group",
    badge: "Most Popular",
    icon: Building2,
    description: "Multi-physician outpatient practices, emergency triage bays, and specialty cardio clinics.",
    monthlyPrice: "$249",
    annualPrice: "$199",
    priceSubtext: "per facility / month (up to 5 clinicians)",
    features: [
      "Everything in Individual Clinician",
      "Multi-seat team dashboard & patient registry",
      "EHR HL7 / FHIR clinical attachment export",
      "Pediatric & adult murmur severity calibration",
      "Longitudinal patient acoustic trend tracking",
      "Priority clinical support & onboarding session",
    ],
    cta: "Schedule Clinic Demo",
    href: "/demo?tier=clinic",
    highlighted: true,
  },
  {
    name: "Enterprise Health System",
    badge: "Hospital & Network",
    icon: Globe2,
    description: "Hospital networks, academic medical centers, and rural health screening organizations.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    priceSubtext: "Volume seat licensing + hardware options",
    features: [
      "Everything in Clinic & Cardiology Group",
      "Direct Epic / Cerner / Athena EHR bi-directional integration",
      "Custom on-premise or private cloud sync gateways",
      "Centralized administrative audit trails & HIPAA BAA",
      "Dedicated Medical Affairs account manager",
      "99.9% uptime SLA & turn-key hardware bundles",
    ],
    cta: "Request Enterprise Pilot",
    href: "/contact?subject=enterprise-hospital",
    highlighted: false,
  },
];

const comparisonCategories = [
  {
    category: "Acoustic AI & Clinical Diagnostics",
    items: [
      { name: "Real-time Phonocardiogram (PCG) Spectrogram", solo: true, clinic: true, enterprise: true },
      { name: "S1 & S2 Acoustic Cycle Segmentation", solo: true, clinic: true, enterprise: true },
      { name: "Valvular Murmur Classification (Aortic/Mitral)", solo: true, clinic: true, enterprise: true },
      { name: "Heart Failure S3 / S4 Gallop Detection", solo: "Basic", clinic: true, enterprise: true },
      { name: "Pulmonary Adventitious Sounds (Wheeze/Crackles)", solo: "Basic", clinic: true, enterprise: true },
      { name: "Pediatric-Specific Acoustic Calibrations", solo: false, clinic: true, enterprise: true },
    ],
  },
  {
    category: "Device & Offline Architecture",
    items: [
      { name: "100% Offline On-Device Neural Execution", solo: true, clinic: true, enterprise: true },
      { name: "Sub-12ms Point-of-Care Neural Latency", solo: true, clinic: true, enterprise: true },
      { name: "Bluetooth & Wireless Transducer Pairing", solo: true, clinic: true, enterprise: true },
      { name: "Universal Digital Stethoscope Compatibility", solo: true, clinic: true, enterprise: true },
      { name: "Pre-Configured Turnkey Hardware Provisioning", solo: false, clinic: "Optional", enterprise: true },
    ],
  },
  {
    category: "EHR Integration & Documentation",
    items: [
      { name: "Instant Encrypted PDF Clinical Export", solo: true, clinic: true, enterprise: true },
      { name: "Standardized HL7 / FHIR Data Payload", solo: false, clinic: true, enterprise: true },
      { name: "Direct Epic / Cerner / AthenaHealth Connector", solo: false, clinic: "Standard", enterprise: "Deep Custom" },
      { name: "Longitudinal Waveform Trend Archives", solo: "30 Days", clinic: "Unlimited", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Security, Governance & Support",
    items: [
      { name: "On-Device AES-256 Storage Encryption", solo: true, clinic: true, enterprise: true },
      { name: "HIPAA / GDPR Compliance Architecture", solo: true, clinic: true, enterprise: true },
      { name: "Enterprise Business Associate Agreement (BAA)", solo: false, clinic: true, enterprise: true },
      { name: "Role-Based Staff Access & Audit Logs", solo: false, clinic: true, enterprise: true },
      { name: "Dedicated Medical Affairs Lead & 99.9% SLA", solo: false, clinic: false, enterprise: true },
    ],
  },
];

const pricingFaqs = [
  {
    q: "Can I try Coeur.AI before committing to an institutional license?",
    a: "Yes. We offer fully functional 14-day clinical evaluations for credentialed medical practitioners and 30-day pilot deployments for hospital cardiology departments.",
  },
  {
    q: "Do I need to purchase specific stethoscope hardware from Coeur.AI?",
    a: "No. Coeur.AI is hardware-agnostic and functions with major digital stethoscopes (Eko Core, 3M Littmann digital lines, and standard biomedical audio adapters). For institutions wanting a turnkey package, we offer pre-calibrated hardware bundles.",
  },
  {
    q: "How does billing work for multi-hospital networks?",
    a: "Enterprise agreements are customized based on practitioner seat count, active EHR connector endpoints, and optional hardware provisioning with consolidated invoicing and institutional SLAs.",
  },
  {
    q: "Is there an academic or non-profit discount for global health programs?",
    a: "Yes. We offer subsidized grant pricing for registered non-profit screening campaigns, rural primary care missions, and academic clinical research studies. Contact our medical affairs team for grant assistance.",
  },
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ROI Calculator States
  const [cliniciansCount, setCliniciansCount] = useState<number>(3);
  const [patientsPerMonth, setPatientsPerMonth] = useState<number>(180);

  // Calculations
  const hoursSavedPerMonth = Math.round(cliniciansCount * (patientsPerMonth * 0.08));
  const estimatedMurmursDetected = Math.round(cliniciansCount * patientsPerMonth * 0.045);
  const annualWorkflowValue = Math.round(hoursSavedPerMonth * 12 * 75);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5EE] text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 pt-36 pb-24 max-w-[1360px] relative">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Clinical Deployment
          </div>
          <h1 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold tracking-tight text-[#1C1C1C] mb-5 leading-[1.1]">
            Predictable Pricing for <br />
            <span className="text-[#E8234A]">Every Healthcare Setting.</span>
          </h1>
          <p className="text-[17px] text-[#6B7280] leading-relaxed mb-8">
            From single-physician consulting rooms to high-volume multi-specialty hospital networks, Coeur.AI scales seamlessly with your patient volume.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-xl text-[13.5px] font-semibold transition-all cursor-pointer ${
                !annualBilling
                  ? "bg-[#1C1C1C] text-white shadow-sm"
                  : "text-[#6B7280] hover:text-[#1C1C1C]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2 rounded-xl text-[13.5px] font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                annualBilling
                  ? "bg-[#E8234A] text-white shadow-sm"
                  : "text-[#6B7280] hover:text-[#1C1C1C]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-white/20 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3-Tier Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 relative bg-white border ${
                  plan.highlighted
                    ? "border-[#E8234A] shadow-[0_20px_60px_rgba(232,35,74,0.12)] lg:-translate-y-2 ring-1 ring-[#E8234A]"
                    : "border-[#E5DFD3] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        plan.highlighted
                          ? "bg-[#E8234A] text-white"
                          : "bg-[#F8F5EE] text-[#E8234A] border border-[#E5DFD3]"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-[#F8F5EE] border border-[#E5DFD3] flex items-center justify-center text-[#E8234A]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-[22px] font-bold text-[#1C1C1C] mb-2">{plan.name}</h3>
                  <p className="text-[13.5px] text-[#6B7280] min-h-[42px] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#E5DFD3]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[38px] font-bold text-[#1C1C1C] tracking-tight stat-number">
                        {price}
                      </span>
                      {price !== "Custom" && (
                        <span className="text-[14px] text-[#6B7280]">/mo</span>
                      )}
                    </div>
                    <p className="text-[12px] text-[#6B7280] font-medium mt-1">
                      {plan.priceSubtext}
                    </p>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13.5px] text-[#1C1C1C] font-medium">
                        <Check className="h-4 w-4 text-[#E8234A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.href}
                  className={`w-full flex items-center justify-center gap-2 h-12 rounded-xl font-semibold text-[14px] transition-all duration-200 cursor-pointer ${
                    plan.highlighted
                      ? "btn-primary shadow-md"
                      : "btn-secondary"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ─── INTERACTIVE CLINICAL ROI & VOLUME CALCULATOR ─── */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              
              {/* Left: Sliders */}
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F5EE] border border-[#E5DFD3] text-[12px] font-bold text-[#E8234A] mb-3">
                    <Calculator className="w-3.5 h-3.5" />
                    Clinical Impact Calculator
                  </div>
                  <h3 className="text-[26px] md:text-[30px] font-bold text-[#1C1C1C] tracking-tight mb-2">
                    Estimate Your Practice Efficiency
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed">
                    See how automated PCG segmentation and instant EHR PDF export reduce documentation bottlenecks and improve early detection.
                  </p>
                </div>

                {/* Slider 1: Clinicians Count */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[13px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Number of Practicing Clinicians:
                    </label>
                    <span className="text-[18px] font-bold text-[#E8234A] font-mono px-3 py-1 rounded-lg bg-[#F8F5EE] border border-[#E5DFD3]">
                      {cliniciansCount} {cliniciansCount === 1 ? "Clinician" : "Clinicians"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={cliniciansCount}
                    onChange={(e) => setCliniciansCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#E8234A]"
                  />
                  <div className="flex justify-between text-[11px] text-[#6B7280]">
                    <span>1 Solo MD</span>
                    <span>10 Group Practice</span>
                    <span>25 Hospital Department</span>
                  </div>
                </div>

                {/* Slider 2: Patient Volume */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[13px] font-bold text-[#1C1C1C] uppercase tracking-wider">
                      Monthly Auscultations per Clinician:
                    </label>
                    <span className="text-[18px] font-bold text-[#1C1C1C] font-mono px-3 py-1 rounded-lg bg-[#F8F5EE] border border-[#E5DFD3]">
                      {patientsPerMonth} Patients
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="400"
                    step="10"
                    value={patientsPerMonth}
                    onChange={(e) => setPatientsPerMonth(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#E8234A]"
                  />
                  <div className="flex justify-between text-[11px] text-[#6B7280]">
                    <span>40 / mo (Low OPD)</span>
                    <span>200 / mo (Standard)</span>
                    <span>400 / mo (High Volume)</span>
                  </div>
                </div>
              </div>

              {/* Right: Calculated Metrics Display */}
              <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8F5EE] p-6 md:p-8 rounded-3xl border border-[#E5DFD3]">
                
                <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-[28px] font-bold text-[#1C1C1C] tracking-tight stat-number">
                    {hoursSavedPerMonth} <span className="text-[14px] font-normal text-[#6B7280]">hrs/mo</span>
                  </div>
                  <div className="text-[13px] font-bold text-[#1C1C1C] mt-1">Transcription Hours Saved</div>
                  <div className="text-[11.5px] text-[#6B7280] mt-0.5">Automated HL7/FHIR notes</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E5DFD3] shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-3">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div className="text-[28px] font-bold text-[#1C1C1C] tracking-tight stat-number">
                    ~{estimatedMurmursDetected} <span className="text-[14px] font-normal text-emerald-600">cases/mo</span>
                  </div>
                  <div className="text-[13px] font-bold text-[#1C1C1C] mt-1">Early Valvular Detections</div>
                  <div className="text-[11.5px] text-[#6B7280] mt-0.5">Asymptomatic murmurs flagged</div>
                </div>

                <div className="sm:col-span-2 bg-white p-6 rounded-2xl border border-[#E5DFD3] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#6B7280]">
                      Estimated Annual Practice Efficiency Value
                    </div>
                    <div className="text-[32px] font-bold text-[#E8234A] stat-number">
                      ${annualWorkflowValue.toLocaleString()} <span className="text-[13px] text-[#6B7280] font-normal">/ year</span>
                    </div>
                  </div>
                  <Link
                    href="/demo?tier=clinic"
                    className="btn-primary h-11 px-5 text-[13px] shrink-0 w-full sm:w-auto"
                  >
                    <span>Deploy Pilot Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1C1C1C] tracking-tight mb-3">
              Comprehensive Feature Comparison
            </h2>
            <p className="text-[15px] text-[#6B7280]">
              Detailed breakdown of diagnostic features, EHR integration, and support SLAs across plans.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E5DFD3] shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#E5DFD3] bg-[#F8F5EE]/60">
                    <th className="p-5 text-[14px] font-bold text-[#1C1C1C] w-2/5">Capability</th>
                    <th className="p-5 text-[14px] font-bold text-[#1C1C1C] text-center w-1/5">Individual</th>
                    <th className="p-5 text-[14px] font-bold text-[#E8234A] text-center w-1/5 bg-[#E8234A]/5">Clinic Group</th>
                    <th className="p-5 text-[14px] font-bold text-[#1C1C1C] text-center w-1/5">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((group) => (
                    <tr key={group.category} className="contents">
                      <tr className="bg-[#F8F5EE] border-y border-[#E5DFD3]">
                        <td colSpan={4} className="px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-[#6B7280]">
                          {group.category}
                        </td>
                      </tr>
                      {group.items.map((item, rowIdx) => (
                        <tr key={item.name} className={`border-b border-[#E5DFD3]/70 hover:bg-neutral-50/60 transition-colors ${rowIdx % 2 === 0 ? "bg-white" : "bg-[#FDFBF7]/40"}`}>
                          <td className="p-4 text-[13.5px] font-medium text-[#1C1C1C]">{item.name}</td>
                          <td className="p-4 text-[13px] text-center text-[#6B7280]">
                            {typeof item.solo === "boolean" ? (
                              item.solo ? <Check className="w-4 h-4 text-[#E8234A] mx-auto" /> : <span className="text-neutral-300">—</span>
                            ) : (
                              <span className="font-semibold text-[#1C1C1C]">{item.solo}</span>
                            )}
                          </td>
                          <td className="p-4 text-[13px] text-center text-[#1C1C1C] font-semibold bg-[#E8234A]/[0.02]">
                            {typeof item.clinic === "boolean" ? (
                              item.clinic ? <Check className="w-4 h-4 text-[#E8234A] mx-auto" /> : <span className="text-neutral-300">—</span>
                            ) : (
                              <span className="text-[#E8234A] font-bold">{item.clinic}</span>
                            )}
                          </td>
                          <td className="p-4 text-[13px] text-center text-[#1C1C1C]">
                            {typeof item.enterprise === "boolean" ? (
                              item.enterprise ? <Check className="w-4 h-4 text-[#E8234A] mx-auto" /> : <span className="text-neutral-300">—</span>
                            ) : (
                              <span className="font-bold text-[#1C1C1C]">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#1C1C1C] mb-2">
              Frequently Asked Pricing Questions
            </h2>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[15px] text-[#1C1C1C] hover:text-[#E8234A] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-[#F8F5EE] flex items-center justify-center shrink-0">
                    {openFaq === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-[14px] text-[#6B7280] leading-relaxed border-t border-[#E5DFD3]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Hardware Bundle Banner */}
        <div className="bg-white border border-[#E5DFD3] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#E8234A]/10 border border-[#E8234A]/20 flex items-center justify-center text-[#E8234A] shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-[#1C1C1C] mb-1">
                Custom Hospital &amp; Medical School Procurement
              </h4>
              <p className="text-[14px] text-[#6B7280] leading-relaxed max-w-2xl">
                Need customized multi-department deployments, volume hardware discounts, or integration with state health registries? Contact our institutional medical affairs team.
              </p>
            </div>
          </div>
          <Link
            href="/contact?subject=institutional-procurement"
            className="btn-primary h-12 px-6 text-[14px] shrink-0"
          >
            <span>Talk with Medical Affairs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
