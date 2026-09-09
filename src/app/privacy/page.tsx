import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Lock, EyeOff } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Coeur.AI Privacy Policy regarding patient data protection, on-device phonocardiogram processing, and HIPAA alignment.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EDE8DC]/40 text-[#1C1C1C] font-sans">
      <Header />

      <main className="flex-grow container mx-auto px-6 md:px-8 py-16 lg:py-24 max-w-4xl mt-[72px]">
        <div className="bg-white border border-[#D9D0BF]/60 rounded-3xl p-8 md:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-8">
          
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-3.5 py-1 rounded-full text-[12px] font-bold tracking-wider text-[#E8234A] uppercase mb-3">
              Patient Data Protection
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1C]">
              Privacy Policy &amp; Data Security
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Last updated: September 2026 &bull; Coeur.AI by LogicBoots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FDFAF5] border border-[#D9D0BF]/50 flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#E8234A] shrink-0">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1C1C]">On-Device Processing</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Auscultation PCG waveforms are analyzed locally on your device using encrypted edge models.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FDFAF5] border border-[#D9D0BF]/50 flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#E8234A] shrink-0">
                <EyeOff className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1C1C]">No Remote Audio Retention</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Raw patient heart and lung sounds are never uploaded to public clouds without explicit practitioner opt-in.
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-xl font-bold text-[#1C1C1C]">1. Introduction &amp; Scope</h2>
            <p>
              Coeur.AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;platform&rdquo;), operated by LogicBoots, provides clinical decision support tools and phonocardiogram (PCG) acoustic analysis software for licensed medical practitioners and clinical institutions. This Privacy Policy details how data is processed, protected, and utilized when using Coeur.AI applications and digital stethoscope integrations.
            </p>

            <h2 className="text-xl font-bold text-[#1C1C1C]">2. Types of Information Processed</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Practitioner Account Data:</strong> Name, professional email address, institution affiliation, and licensing credentials used for authentication and software seat allocation.
              </li>
              <li>
                <strong>Clinical Auscultation Telemetry:</strong> Acoustic audio signals captured via compatible digital stethoscopes, segmented audio envelope metrics, and calculated heart/lung rate parameters.
              </li>
              <li>
                <strong>Session Metadata:</strong> Device hardware identifiers, operating system version, app crash logs, and timestamps for diagnostic audit trails.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[#1C1C1C]">3. HIPAA &amp; International Standards Alignment</h2>
            <p>
              Coeur.AI is engineered to comply with the Health Insurance Portability and Accountability Act (HIPAA) Security Rule and applicable international data governance directives (such as GDPR). All local data caches on mobile devices are secured using AES-256 bit encryption at rest and TLS 1.3 in transit.
            </p>

            <h2 className="text-xl font-bold text-[#1C1C1C]">4. Data Sharing &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or monetize patient or practitioner diagnostic recordings. De-identified acoustic metrics may only be utilized to improve algorithmic calibration when explicitly authorized under clinical trial or research data agreements.
            </p>

            <h2 className="text-xl font-bold text-[#1C1C1C]">5. Contact Our Data Protection Officer</h2>
            <p>
              For privacy inquiries, audit report requests, or data deletion notices, contact our security officer at{" "}
              <a href="mailto:privacy@logicboots.com" className="text-[#E8234A] font-semibold hover:underline">
                privacy@logicboots.com
              </a>{" "}
              or via mail to LogicBoots / Coeur.AI, Mass Robotics, 12 Channel St #202, Boston, MA 02210.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
