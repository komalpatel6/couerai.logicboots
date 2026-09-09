import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Coeur.AI Terms of Service for healthcare providers, clinical institutions, and software licensees.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5EE] text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-4xl mt-[72px]">
        <div className="bg-white border border-[#E5DFD3] rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          
          <div className="border-b border-[#E5DFD3]/60 pb-6">
            <div className="inline-flex items-center gap-2 bg-[#E8234A]/10 border border-[#E8234A]/20 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-[#E8234A] uppercase mb-3">
              Legal Agreement
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-[#6B7280] mt-2">
              Effective Date: September 2026 &bull; Coeur.AI / LogicBoots
            </p>
          </div>

          <section className="space-y-6 text-sm text-[#4B5563] leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">1. Acceptance of Terms</h2>
              <p>
                By downloading, accessing, or integrating the Coeur.AI application or associated API services, you agree to be bound by these Terms of Service. If you are accepting on behalf of a hospital, clinic, or academic institution, you represent and warrant that you possess full authorization to bind that entity.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">2. Clinical Decision Support Scope</h2>
              <p>
                Coeur.AI provides algorithmic signal processing and pattern recognition insights intended solely to assist trained healthcare practitioners. <strong>The software does not provide definitive medical diagnoses and does not supersede direct clinician examination.</strong> Healthcare practitioners retain sole clinical responsibility for patient diagnosis, prescription, and triage decisions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">3. Hardware &amp; Stethoscope Compatibility</h2>
              <p>
                Coeur.AI requires compatible digital stethoscopes and mobile hardware meeting minimum microphone sampling rates and Bluetooth/WiFi connectivity specifications. LogicBoots is not liable for diagnostic artifacts caused by uncertified or malfunctioning third-party acoustic transducers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">4. Software Licensing &amp; Intellectual Property</h2>
              <p>
                All algorithms, PCG filtering pipelines, graphical user interfaces, and documentation remain the exclusive intellectual property of LogicBoots and its licensors. Users receive a revocable, non-exclusive, non-transferable license to use the software in accordance with their subscription tier. Reverse engineering or unauthorized model extraction is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, LogicBoots and its affiliates shall not be liable for indirect, incidental, or consequential damages resulting from software use, connectivity interruptions, or clinical decisions made in connection with preliminary diagnostic insights.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1C1C1C] mb-2">6. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms shall be governed by the laws of the Commonwealth of Massachusetts, United States, without regard to its conflict of law provisions.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
