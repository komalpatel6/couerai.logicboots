import { FadeIn } from "@/components/fade-in";
import { ArrowRight, Newspaper, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    tag: "Clinical Study",
    date: "May 12, 2025",
    title: "AI-Based Auscultation Analysis Improves Valvular Murmur Triage Rate by 38% in Multicenter Cohort.",
    excerpt:
      "A clinical validation study across district health centers demonstrated that Coeur.AI's PCG neural engine accurately detected early asymptomatic aortic stenosis missed by analog stethoscopes.",
    image: "/q1.png",
    href: "/demo",
  },
  {
    tag: "Product Update",
    date: "March 3, 2025",
    title: "Coeur.AI v2.4 Launches with Bio-Sense Waveform Terminal & Active Ambient Noise Cancellation.",
    excerpt:
      "The latest release brings sub-12ms on-device spectrogram isolation, expanded pediatric murmur thresholds, and seamless FHIR / HL7 EHR connector support.",
    image: "/q2.png",
    href: "/demo",
  },
  {
    tag: "Clinical Ecosystem",
    date: "January 18, 2025",
    title: "LogicBoots Partners with Mass Robotics Health in Boston for US Clinical Validation & FDA Pathway.",
    excerpt:
      "The strategic collaboration enables multi-hospital prospective clinical trials in New England to accelerate regulatory clearance and medical device integration.",
    image: "/q3.png",
    href: "/demo",
  },
];

export default function NewsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F5EE] border-t border-[#E5DFD3]/80">
      <div className="container mx-auto px-6 md:px-8 max-w-[1360px]">

        {/* Header row */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD3] text-[13px] font-semibold text-[#E8234A] mb-3 shadow-sm">
                <Newspaper className="w-3.5 h-3.5" />
                Research & Clinical Bulletins
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1C1C1C] leading-tight tracking-[-0.02em]">
                Latest Medical Evidence & Announcements
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#E8234A] hover:text-[#C4182E] transition-colors group hidden md:inline-flex"
            >
              <span>View All Publications</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 80}>
              <Link
                href={article.href}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-neutral-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[11px] font-bold text-[#E8234A] uppercase tracking-wider shadow-sm">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-1.5 text-[12px] text-[#6B7280] mb-2.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <time className="font-medium">{article.date}</time>
                  </div>
                  
                  <h3 className="text-[17px] font-bold text-[#1C1C1C] leading-snug mb-3 group-hover:text-[#E8234A] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[13.5px] text-[#6B7280] leading-relaxed line-clamp-3 mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-[#E5DFD3]/80 flex items-center justify-between text-[13.5px] font-bold text-[#1C1C1C] group-hover:text-[#E8234A] transition-colors">
                    <span>Read Study Brief</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#E8234A]" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile view all */}
        <FadeIn delay={240}>
          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/contact" className="btn-secondary w-full h-12 text-[14px]">
              <span>View All Publications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
