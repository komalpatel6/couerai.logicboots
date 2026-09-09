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
    <section className="relative w-full bg-[#F8F5EE] py-8 border-y border-[#E5DFD3]/80 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1360px] text-center mb-5">
        <p className="text-[11px] font-bold text-[#6B7280] tracking-[0.2em] uppercase">
          Institutional Recognition &amp; Clinical Innovation Backing
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max items-center gap-14 md:gap-20 py-2 animate-infinite-scroll">
          {tickerItems.map((logo, index) => (
            <div 
              key={`${logo.alt}-${index}`} 
              className="flex items-center justify-center w-36 h-10 flex-shrink-0 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={36}
                className="max-h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
