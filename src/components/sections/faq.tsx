"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Coeur.AI?",
    answer:
      "Coeur.AI is an AI-powered cardiac and respiratory diagnostic platform that transforms your smartphone into a clinical-grade auscultation tool when paired with a compatible digital stethoscope. It analyzes phonocardiogram (PCG) sounds to surface preliminary insights for conditions like Hypertension, Arrhythmia, Asthma, COPD, and Pneumonia — with real-time ECG visualization and instant PDF reports.",
  },
  {
    question: "Is it safe to use Coeur.AI for patient data?",
    answer:
      "Yes. All health data is processed locally on-device using encrypted HL7 standards. No raw audio or personally identifiable patient data is transmitted to external servers. Coeur.AI is designed in alignment with HIPAA privacy principles and applicable data protection regulations. Your data stays on your device.",
  },
  {
    question: "Which digital stethoscopes does Coeur.AI support?",
    answer:
      "Coeur.AI supports a range of compatible digital stethoscopes that connect via WiFi or Bluetooth. Contact our team via the Request Demo form for an up-to-date compatibility list and to confirm your specific device.",
  },
  {
    question: "What conditions can Coeur.AI detect?",
    answer:
      "Coeur.AI's AI engine recognizes patterns across two modules:\n\nHeart Module: Hypertension, Arrhythmia, Heart Murmurs, Valve Disorders, Tachycardia, Bradycardia.\nLung Module: Asthma, COPD, Pneumonia, Bronchitis, Pleural Effusion patterns.\n\nFull detection coverage varies by model version and region.",
  },
  {
    question: "Does Coeur.AI work without an internet connection?",
    answer:
      "Yes. Coeur.AI's core AI analysis runs entirely on-device, making it fully functional in low- or no-connectivity environments — critical for rural clinics and field deployments. When a connection is available, the app syncs data and updates models automatically.",
  },
  {
    question: "What does the PDF report include?",
    answer:
      "Each report includes: AI diagnostic findings, per-condition confidence scores, heart rate statistics, risk assessment flags, and a session timestamp log. Reports are formatted for easy sharing with referring physicians or inclusion in patient records.",
  },
  {
    question: "Is Coeur.AI a replacement for a cardiologist?",
    answer:
      "No. Coeur.AI is a clinical decision support tool — it augments the clinician's judgment, not replaces it. All outputs are preliminary diagnostic insights intended to assist qualified healthcare professionals. Always consult a licensed medical professional before making any clinical decision.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download Coeur.AI from the Google Play Store (Android) or Apple App Store (iOS). Connect a compatible digital stethoscope, select your diagnostic mode, and start recording. You can also request a personalized demo for your clinic or health system.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#e4e4e7]">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] md:text-[16px] font-semibold text-[#0d0d0d] leading-snug group-hover:text-[#c8102e] transition-colors">
          {item.question}
        </span>
        <span className="shrink-0 mt-0.5 h-5 w-5 flex items-center justify-center text-[#c8102e]" aria-hidden="true">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[14px] md:text-[14.5px] text-[#6b7280] leading-relaxed whitespace-pre-line">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-divider py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-[32px] md:text-[44px] font-black leading-[1.1] tracking-[-0.025em] text-[#0d0d0d]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
