"use client";

import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import { HeartPulse, Wind, Activity, UserCheck, Users } from "lucide-react";

interface UseCase {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
}

const useCases: UseCase[] = [
  {
    icon: <HeartPulse className="h-4 w-4 text-[#c8102e]" />,
    tag: "Remote Diagnostics",
    title: "Rural Healthcare",
    description: "In most villages, the nearest cardiologist is hours away. A health worker with Coeur.AI can record a heart or lung sound on the spot.",
    details: "Get an instant AI read on conditions like TB, pneumonia, asthma, COPD, or heart arrhythmia, and flag the patient for referral before things get worse. No waiting, no travel, no guessing. For families who’d otherwise skip a checkup, this could be the difference between catching something early and catching it too late.",
    image: "/f1.jpg",
    imageAlt: "Healthcare worker in a rural setting checking a patient",
  },
  {
    icon: <Activity className="h-4 w-4 text-[#c8102e]" />,
    tag: "Recovery Tracking",
    title: "Post-Operative Patients",
    description: "Recovery after a heart surgery, angioplasty, or stent placement doesn’t end when the patient leaves the hospital.",
    details: "Coeur.AI lets doctors track how the heart sounds week after week, catching early signs of arrhythmia or other irregularities that might otherwise go unnoticed between follow-up visits. Patients get peace of mind, and doctors get a clearer picture of recovery without needing the patient back in the OPD every time.",
    image: "/f2.jpg",
    imageAlt: "Post-operative patient monitoring home care",
  },
  {
    icon: <UserCheck className="h-4 w-4 text-[#c8102e]" />,
    tag: "Clinical Support",
    title: "Doctors",
    description: "Every physician develops their own ear over years of practice. Coeur.AI doesn’t replace that — it backs it up.",
    details: "A quick recording, an AI-assisted read for TB, pneumonia, asthma, COPD, or arrhythmia, and the doctor still makes the final call. It’s especially useful during busy OPD hours, when a faster, more consistent first read can help prioritize which patients need closer attention.",
    image: "/f3.jpg",
    imageAlt: "Doctor in clinic using digital stethoscope tool",
  },
  {
    icon: <Wind className="h-4 w-4 text-[#c8102e]" />,
    tag: "Cardiopulmonary Rehab",
    title: "Rehab Centers",
    description: "Cardiac and pulmonary rehab is a slow process, and progress isn’t always easy to see day to day.",
    details: "With Coeur.AI, rehab teams can record and compare a patient’s sounds across sessions — tracking improvement in conditions like COPD, asthma, or arrhythmia — turning 'I think he's improving' into something they can actually show. It gives both the patient and the care team something concrete to track.",
    image: "/f4.jpg",
    imageAlt: "Patient in physical cardiopulmonary rehabilitation session",
  },
  {
    icon: <Users className="h-4 w-4 text-[#c8102e]" />,
    tag: "Community Health Campaigns",
    title: "Mass Screening",
    description: "Health camps and screening drives often mean hundreds of people and very little time per person.",
    details: "Coeur.AI speeds that up — a quick recording, an AI assisted flag for anything unusual (TB, pneumonia, asthma, COPD, or heart arrhythmia), and the team moves to the next person. The ones who need a doctor’s attention get it fast, instead of getting lost in the crowd.",
    image: "/f5.jpg",
    imageAlt: "Mass health camp screening line setup",
  },
];

export default function SolutionPartsSection() {
  return (
    <section id="solution" className="section-divider py-20 md:py-28 bg-[#f7f7f8]">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Section header */}
        <FadeIn>
          <div className="mb-14 text-center lg:text-left">
            <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.15] tracking-tight text-[#0a1a4d] max-w-xl mx-auto lg:mx-0">
              Where Coeur.AI Makes a Difference
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              From remote field campaigns to post-operative hospital tracking, Coeur.AI extends clinical reach and adds crucial diagnostic layers.
            </p>
          </div>
        </FadeIn>

        {/* Card grid - Vertical stacked on mobile, Single Row on desktop */}
        <div className="flex flex-col gap-6 xl:grid xl:grid-cols-5 xl:gap-5 justify-start">
          {useCases.map((uc, i) => (
            <FadeIn key={uc.tag} delay={i * 60}>
              <div className="group bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col h-full hover:border-[#0052ff]/30 hover:shadow-[0_20px_40px_rgba(10,26,77,0.05)] transition-all duration-300 w-full">

                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <Image
                    src={uc.image}
                    alt={uc.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  />
                  {/* Light overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Tag pill */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-white/60 rounded-full px-2.5 py-1 shadow-sm">
                    {uc.icon}
                    <span className="text-[10px] font-bold text-[#0a1a4d] tracking-wide uppercase">
                      {uc.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-[16px] font-bold text-[#0a1a4d] leading-snug mb-2.5 group-hover:text-[#0052ff] transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-[13px] font-medium text-slate-700 leading-relaxed mb-2.5">
                    {uc.description}
                  </p>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    {uc.details}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
