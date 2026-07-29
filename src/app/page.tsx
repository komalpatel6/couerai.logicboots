import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Sections — PMcardio page order
import HeroSection from "@/components/sections/hero";
import ImpactStatsSection from "@/components/sections/early-detection";
import SolutionPartsSection from "@/components/sections/features";
import HowItWorksSection from "@/components/sections/how-it-works";
import TestimonialsSection from "@/components/sections/clinician-benefits";
import NewsSection from "@/components/sections/news";
import GlobalPresenceSection from "@/components/sections/global-presence";
import MediaRecognitionSection from "@/components/sections/media-recognition";
import FAQSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* 1. Hero — bold stat headline + dual CTA */}
        <HeroSection />

        {/* 2. Impact in Numbers — animated counters */}
        <div id="impact">
          <ImpactStatsSection />
        </div>

        {/* 3. Solution Parts — product tile grid */}
        <div id="features">
          <SolutionPartsSection />
        </div>

        {/* 4. How It Works — horizontal numbered steps */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* 5. Testimonials — rotating quote carousel */}
        <TestimonialsSection />

        {/* 6. News — 3 article cards */}
        <NewsSection />

        {/* 7. Global Reach — offices + health system types */}
        <div id="global-presence">
          <GlobalPresenceSection />
        </div>

        {/* 8. Recognized By — grayscale logo strip */}
        <MediaRecognitionSection />

        {/* 9. FAQ — accordion */}
        <FAQSection />

        {/* 10. CTA — app download + demo */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
