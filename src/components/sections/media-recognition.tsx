import Image from "next/image";

const logos = [
  { src: "/dpiit.png", alt: "Department for Promotion of Industry and Internal Trade (DPIIT)" },
  { src: "/iitrLogo.png", alt: "IIT Roorkee Innovation Center" },
  { src: "/meity.png", alt: "Ministry of Electronics and IT (MeitY)" },
  { src: "/stpi.png", alt: "Software Technology Parks of India (STPI)" },
  { src: "/tides.png", alt: "TIDES Technology Business Incubator" },
  { src: "/metech.png", alt: "MassTech Digital Health" },
  { src: "/iiits.png", alt: "IIIT Sonepat" },
  { src: "/harvard.png", alt: "Harvard HBS Foundry" },
  { src: "/mass-robotics.png", alt: "Mass Robotics Healthcare" },
  { src: "/hv.png", alt: "Healthcare Innovation Partner" },
  { src: "/mid.png", alt: "Medical Innovation and Discovery Hub" },
];

export default function MediaRecognitionSection() {
  const tickerItems = [...logos, ...logos];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#0a1a4d] to-[#051032] py-4 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.2)]">
      <p className="text-[10px] font-bold text-white/80 tracking-[0.25em] uppercase text-center mb-2.5 relative z-20">
        Institutional Recognition &amp; Clinical Support
      </p>
      
      <div className="relative w-full overflow-hidden z-20">
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0a1a4d] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#051032] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max items-center gap-16 md:gap-20 py-1 animate-infinite-scroll">
          {tickerItems.map((logo, index) => (
            <div 
              key={`${logo.alt}-${index}`} 
              className="flex items-center justify-center w-32 h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={32}
                className="max-h-6 w-auto object-contain brightness-0 invert opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
