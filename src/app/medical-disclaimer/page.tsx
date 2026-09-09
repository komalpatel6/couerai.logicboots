import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Coeur.AI Clinical Decision Support & Regulatory Intended Use Medical Disclaimer.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5EE] text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-4xl mt-[72px]">
        <div className="bg-white border border-[#E5DFD3] rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-[#E5DFD3]/60 pb-6">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-amber-800 uppercase mb-3">
              Regulatory &amp; Clinical Notice
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
              Medical &amp; Regulatory Disclaimer
            </h1>
            <p className="text-sm text-[#6B7280] mt-2">
              Clinical Decision Support (CDS) System Guidelines &bull; Coeur.AI
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#E8234A]/5 border border-[#E8234A]/20 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-[#E8234A] shrink-0 mt-0.5" />
            <div className="text-sm text-[#1C1C1C] leading-relaxed">
              <strong className="block font-bold text-[#E8234A] text-base mb-1">
                Important Clinical Notice:
              </strong>
              Coeur.AI is designed as an assistive screening and decision support tool for healthcare professionals. It does not replace a comprehensive medical history, physical auscultation by an experienced physician, diagnostic echocardiography, or 12-lead electrocardiograms (ECG).
            </div>
          </div>

          <section className="space-y-6 text-sm text-[#4B5563] leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">1. Intended Use &amp; User Qualifications</h2>
              <p>
                Coeur.AI is intended for use by trained healthcare professionals (including general practitioners, cardiologists, pulmonologists, nurses, and certified community health workers) as an aid in capturing, visualizing, and analyzing phonocardiogram (PCG) acoustic data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">2. Nature of Algorithmic Findings</h2>
              <p>
                All confidence metrics, anomaly flags (e.g. murmur presence, arrhythmia indicators, COPD/wheeze patterns), and generated PDF summaries are <strong>preliminary diagnostic insights</strong>. They must be evaluated in the context of the patient&rsquo;s overall clinical presentation, vital signs, and diagnostic laboratory findings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">3. Not for Emergency Diagnostics</h2>
              <p>
                Coeur.AI is not intended for acute emergency telemetry or continuous life-critical patient monitoring (e.g., intensive care resuscitation or real-time defibrillator triggering). In cases of acute chest pain, dyspnea, or suspected myocardial infarction, immediate emergency clinical protocols must be initiated.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">4. Patient Notice</h2>
              <p>
                If you are a patient or non-clinician using Coeur.AI, you must never modify, withhold, or discontinue prescribed cardiac or respiratory medications based solely on application findings without consulting your licensed primary care physician.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
