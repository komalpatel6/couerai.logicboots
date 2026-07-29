"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[680px] flex flex-col items-center justify-center text-center overflow-hidden mt-[72px]">

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero3.png"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-5xl flex flex-col items-center">

        {/* Main headline — compact, bold, white with gradient highlight */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-bold leading-[1.12] tracking-[-0.025em] text-white max-w-4xl mb-6">
          Smarter Cardiac Screening,
          <br />
          <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#3b82f6] bg-clip-text text-transparent">
            Powered by AI
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[17px] sm:text-[19px] md:text-[21px] text-slate-200 leading-relaxed font-medium max-w-3xl mb-10 tracking-tight">
          Early screening can change outcomes. Coeur.AI helps healthcare professionals screen
          faster, work smarter, and make informed decisions — without disrupting how they
          already work.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center h-[56px] px-8 rounded-xl bg-[#0052ff] hover:bg-[#0040d0] text-white text-[15px] font-bold transition-all duration-150 shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Request a Demo
          </Link>

          <div className="flex items-center gap-3">
            {/* Apple App Store */}
            <Link
              href="#"
              className="inline-flex items-center h-[56px] px-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-sm transition-colors"
              aria-label="Download on the App Store"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={130}
                height={38}
                className="h-9 w-auto"
              />
            </Link>

            {/* Google Play Store */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.logicboots.coeurai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-[56px] px-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-sm transition-colors"
              aria-label="Get it on Google Play"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width={145}
                height={38}
                className="h-9 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom logo ticker — infinite scroll */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent overflow-hidden">
        <div className="py-8 opacity-70">
          <div className="flex items-center animate-infinite-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-12 px-6 shrink-0">
              <Image src="/dpiit.png" alt="DPIIT" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/iitrLogo.png" alt="IIT Roorkee" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/meity.png" alt="MeitY" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/stpi.png" alt="STPI" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/tides.png" alt="TIDES" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/metech.png" alt="MassTech" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/hv.png" alt="Healthcare Partner" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/mid.png" alt="Medical Innovation" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 px-6 shrink-0" aria-hidden="true">
              <Image src="/dpiit.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/iitrLogo.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/meity.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/stpi.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/tides.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/metech.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/hv.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
              <Image src="/mid.png" alt="" width={100} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
