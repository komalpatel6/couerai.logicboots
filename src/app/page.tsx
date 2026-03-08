import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import EarlyDetectionSection from '@/components/sections/early-detection';
import HowItWorksSection from '@/components/sections/how-it-works';
import FeaturesSection from '@/components/sections/features';
import ClinicianBenefitsSection from '@/components/sections/clinician-benefits';
import CtaSection from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection /> 
        <EarlyDetectionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ClinicianBenefitsSection />
        
      </main>
      <Footer />
    </div>
  );
}
