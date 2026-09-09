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
          alt="Clinical auscultation with Coeur.AI"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/70" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 max-w-5xl flex flex-col items-center">

        {/* Main headline */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-bold leading-[1.12] tracking-[-0.025em] text-white max-w-4xl mb-6">
          Smarter Cardio-Respiratory Diagnostics,
          <br />
          <span className="text-[#FF4A6E]">
            Powered by Clinical AI
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[17px] sm:text-[19px] md:text-[20px] text-slate-200 leading-relaxed font-normal max-w-3xl mb-10 tracking-tight">
          Early screening changes patient outcomes. Coeur.AI helps healthcare practitioners screen
          faster, surface auscultation anomalies with confidence, and make informed decisions — without altering their clinical workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-[#E8234A] hover:bg-[#C4182E] text-white text-[15px] font-bold transition-all duration-150 shadow-md hover:shadow-[0_6px_20px_rgba(232,35,74,0.35)] hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Request a Clinical Demo
          </Link>

          <div className="flex items-center gap-3">
            {/* Apple App Store */}
            <span
              className="inline-flex items-center h-[54px] px-4 rounded-xl bg-black/40 border border-white/15 backdrop-blur-sm opacity-90"
              aria-label="Download on the App Store (iOS release coming soon)"
              title="iOS App Store release coming soon"
            >
              <Image
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={130}
                height={38}
                className="h-9 w-auto"
              />
            </span>

            {/* Google Play Store */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.logicboots.coeurai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-[54px] px-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/15 backdrop-blur-sm transition-colors"
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

      {/* Bottom logo ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/85 to-transparent overflow-hidden">
        <div className="py-6 opacity-75">
          <div className="flex items-center animate-infinite-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-12 px-6 shrink-0">
              <Image src="/dpiit.png" alt="DPIIT recognition" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/iiits.png" alt="IIIT Sonipat partner" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/meity.png" alt="Ministry of Electronics and Information Technology (MeitY)" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/stpi.png" alt="Software Technology Parks of India (STPI)" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/tides.png" alt="TIDES Business Incubator, IIT Roorkee" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/metech.png" alt="MassTech digital health collaborative" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/mid.png" alt="Medical Innovation Hub" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/harvard.png" alt="Harvard HBS Foundry" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/mass-robotics.png" alt="Mass Robotics Health" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 px-6 shrink-0" aria-hidden="true">
              <Image src="/dpiit.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/iiits.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/meity.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/stpi.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/tides.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/metech.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/mid.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/harvard.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
              <Image src="/mass-robotics.png" alt="" width={100} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
