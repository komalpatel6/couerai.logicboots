import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    tag: "Clinical Study",
    date: "May 12, 2025",
    title: "AI-Based Auscultation Analysis Improves COPD Detection Rate by 38% in Rural Pilot Study.",
    excerpt:
      "A pilot program across three district health centers in Rajasthan showed that Coeur.AI's PCG engine caught COPD patterns missed by standard stethoscopes in more than a third of cases.",
    image: "/q1.png",
    href: "#",
  },
  {
    tag: "Product Update",
    date: "March 3, 2025",
    title: "Coeur.AI v2.4 Launches with Bio-Sense Terminal and Active Artifact Cancellation.",
    excerpt:
      "The latest release brings a redesigned professional monitoring interface, real-time pulmonary audio isolation, and expanded multilingual support across five languages.",
    image: "/q2.png",
    href: "#",
  },
  {
    tag: "Partnership",
    date: "January 18, 2025",
    title: "LogicBoots Joins Mass Robotics Hub in Boston to Accelerate Coeur.AI's US Expansion.",
    excerpt:
      "The partnership gives the team access to Mass Robotics' engineering network and clinical advisors as Coeur.AI prepares for FDA-pathway discussions and US hospital pilots.",
    image: "/q3.png",
    href: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="section-divider py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-8 max-w-7xl">

        {/* Header row */}
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#0a1a4d] leading-tight tracking-tight">
                The latest from Coeur.AI
              </h2>
            </div>
            <Link href="#" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0052ff] hover:text-[#0040d0] transition-colors group hidden md:inline-flex">
              View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 80}>
              <Link
                href={article.href}
                className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-[#0052ff]/30 hover:shadow-[0_20px_40px_rgba(10,26,77,0.04)] transition-all duration-300 h-full"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-50">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[#0052ff] uppercase tracking-wider">
                      {article.tag}
                    </span>
                    <span className="text-slate-300">·</span>
                    <time className="text-[12px] text-slate-500 font-medium">{article.date}</time>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0a1a4d] leading-snug mb-3 group-hover:text-[#0052ff] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-6 text-[13px] font-bold text-[#0a1a4d] group-hover:text-[#0052ff] transition-colors">
                    Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile view all */}
        <FadeIn delay={240}>
          <div className="mt-6 flex justify-center md:hidden">
            <Link href="#" className="btn-ghost text-[13px]">
              View all articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
