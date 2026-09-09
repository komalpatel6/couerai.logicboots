"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What clinical capabilities does Coeur.AI provide?",
    answer:
      "Coeur.AI is an AI-powered clinical decision support platform that connects with standard digital stethoscopes to perform real-time phonocardiogram (PCG) acoustic triage. It segments cardiac sound cycles (S1, S2, systole, diastole) and highlights probability signatures for conditions including Aortic Stenosis, Mitral Regurgitation, S3/S4 Heart Failure gallops, and pulmonary adventitious sounds (wheezes and crackles).",
  },
  {
    question: "How does Coeur.AI maintain patient privacy and HIPAA compliance?",
    answer:
      "All neural network acoustic inferencing is executed 100% locally on the clinician's mobile device via optimized on-device machine learning engines (CoreML / ONNX). No raw patient audio or identifiable health information is streamed to the cloud during auscultation. All locally saved sessions are secured with AES-256 encryption.",
  },
  {
    question: "Which digital stethoscopes are compatible with Coeur.AI?",
    answer:
      "Coeur.AI is designed to be hardware-agnostic and supports major standard digital stethoscopes with Bluetooth audio or 3.5mm input capabilities (including Eko Core/Duo, 3M Littmann digital lines, and custom USB-C/Lightning biomedical audio transducers).",
  },
  {
    question: "Does Coeur.AI function without internet connectivity?",
    answer:
      "Yes. The core diagnostic inference engine is completely self-contained on the device. Clinicians in remote clinics, ambulances, or rural outreach camps can record, analyze, and generate provisional reports with zero active network connectivity.",
  },
  {
    question: "Can Coeur.AI integrate with Hospital Electronic Health Records (EHR)?",
    answer:
      "Yes. Coeur.AI generates standard HL7 / FHIR compliant diagnostic payloads as well as encrypted PDF clinical summaries that can be attached directly into Epic, Cerner, AthenaHealth, or exported for specialist cardiology referrals.",
  },
  {
    question: "What regulatory clearance pathway is Coeur.AI pursuing?",
    answer:
      "Coeur.AI operates as a Class II Clinical Decision Support (CDS) software under FDA and CE MDR guidelines. It is designed to augment and accelerate trained clinical judgment rather than serve as a standalone diagnostic authority.",
  },
  {
    question: "How do hospital networks and private clinics get started?",
    answer:
      "You can request an institutional pilot or clinical demonstration through our website. Our medical affairs team assists with device compatibility validation, EHR connector setup, and clinical staff onboarding.",
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
    <div className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-sm transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-[16px] md:text-[17px] font-bold text-[#1C1C1C] leading-snug group-hover:text-[#E8234A] transition-colors">
          {item.question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? "bg-[#E8234A] text-white" : "bg-[#F8F5EE] text-[#1C1C1C] group-hover:bg-[#E8234A]/10 group-hover:text-[#E8234A]"
        }`} aria-hidden="true">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] px-6 pb-6 opacity-100" : "max-h-0 px-6 pb-0 opacity-0"
        }`}
      >
        <p className="text-[14.5px] text-[#6B7280] leading-relaxed border-t border-[#E5DFD3]/60 pt-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-4 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#1C1C1C] leading-tight tracking-[-0.02em]">
              Everything You Need to Know About Coeur.AI
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="space-y-4">
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
