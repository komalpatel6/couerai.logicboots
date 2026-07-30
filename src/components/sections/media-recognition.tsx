import { FadeIn } from "@/components/fade-in";
import Image from "next/image";

const logos = [
  { src: "/dpiit.png",          alt: "DPIIT" },
  { src: "/iitrLogo.png",       alt: "IIT Roorkee" },
  { src: "/meity.png",          alt: "MeitY" },
  { src: "/stpi.png",           alt: "STPI" },
  { src: "/tides.png",          alt: "TIDES" },
  { src: "/metech.png",         alt: "MassTech" },
  { src: "/iiits.png",          alt: "IIIT Sonepat" },
  { src: "/harvard.png",        alt: "Harvard HBS Foundry" },
  { src: "/mass-robotics.png",  alt: "Mass Robotics" },
  { src: "/hv.png",             alt: "Healthcare Partner" },
  { src: "/mid.png",            alt: "Medical Innovation" },
];

export default function MediaRecognitionSection() {
  // Duplicate logos list to ensure seamless infinite loop
  const tickerItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0a1a4d] to-[#051032] py-3 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_rgba(0,82,255,0.05)]">
      {/* Header Text inside plate */}
      <p className="text-[10px] font-bold text-white/80 tracking-[0.25em] uppercase text-center mb-1.5 relative z-20">
        Recognized &amp; Supported By
      </p>
      
      {/* Ticker Window */}
      <div className="relative w-full overflow-hidden z-20">
        {/* Edge fade-out masks matching the plate gradients */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0a1a4d] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#051032] to-transparent z-10 pointer-events-none" />
        
        {/* Infinite scrolling row */}
        <div className="flex w-max items-center gap-16 md:gap-24 py-0.5 animate-infinite-scroll">
          {tickerItems.map((logo, index) => (
            <div 
              key={`${logo.alt}-${index}`} 
              className="flex items-center justify-center w-32 h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full max-h-6 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
