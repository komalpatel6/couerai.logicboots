"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, Activity } from "lucide-react";
import Image from "next/image";
import ParticleNetwork from "../ui/particle-network";
import LogoCarousel from "../ui/LogoCarousel";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const logos = [
    {
      src: "/logo1.png",
      alt: "Partner Logo 1",
    },
    {
      src: "/logo2.webp",
      alt: "Partner Logo 2",
    },
    {
      src: "/logo3.png",
      alt: "Partner Logo 3",
    },
    {
      src: "/logo4.png",
      alt: "Partner Logo 4",
    },
    {
      src: "/logo5.png",
      alt: "Partner Logo 5",
    },
  ];

  // Animation variants
  // Intro Logo sequence
  const logoIntroVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)", display: "flex" },
    visible: {
      opacity: [0, 1, 1, 0],
      scale: [0.9, 1, 1, 1.1],
      filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(20px)"],
      transition: {
        duration: 3.5, // Total length of intro
        times: [0, 0.3, 0.7, 1], // Fade in by 30%, hold until 70%, fade out by 100%
      },
      transitionEnd: { display: "none" } // Remove from layout after fade out
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Faster stagger since they waited
        delayChildren: 3.2, // Wait for logo to nearly finish fading out
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2 }
    }
  };

  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden min-h-[850px] py-20 pb-40">
      {/* Background with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <ParticleNetwork />
        {/* Subtle overlay to dim background slightly behind text */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 mt-16 flex flex-col items-center">
        {/* Intro Logo Sequence */}
        {isMounted && (
          <motion.div
            variants={logoIntroVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
          >
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <img
                src="/co-log.png"
                className="h-24 w-24 md:h-32 md:w-32 object-contain"
                alt="Coeur AI Intro Logo"
              />
            </div>
            <motion.p
              className="mt-6 text-3xl font-bold tracking-widest text-white uppercase opacity-90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Coeur AI
            </motion.p>
          </motion.div>
        )}

        {/* Main Content (Delayed) */}
        {isMounted && (
          <motion.div
            className="flex flex-col items-center justify-center w-full max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline / Intro - Sans Serif */}
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-6 tracking-wide shadow-sm shadow-primary/20 backdrop-blur-md">
                Meet Coeur AI
              </span>
            </motion.div>

            {/* Main Headline - Elegant Serif */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white py-2"
              style={{ fontFamily: "'Playfair Display', 'Merriweather', serif" }} // Fallback inline for the elegant serif style if not in tailwind config yet
            >
              The future of <br /> <span className="italic text-gray-300 font-light">cardiac care</span> is here.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 md:text-xl font-light leading-relaxed"
            >
              Coeur AI revolutionizes cardiac monitoring with cutting-edge
              artificial intelligence, providing life-saving insights for
              clinicians and patients.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                className="text-base font-semibold px-8 py-6 w-full sm:w-auto shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-shadow"
                asChild>
                <Link href="/demo">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}

        {isMounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1.5 }} // Delay 1.5s AFTER main text finishes
            className="mt-20 md:mt-10"
          >
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Trusted & Supported By
            </p>
            <div className="mt-6 flex justify-center items-center">
              <LogoCarousel columnCount={1} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
