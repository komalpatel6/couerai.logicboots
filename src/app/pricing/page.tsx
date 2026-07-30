"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function PricingPage() {
  const revealVariants: any = {
    hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1] as const, // Custom spring-like cubic bezier
      },
    },
  };

  const textFloatVariants: any = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-white selection:bg-teal-500/30">
      <Header />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-32 md:py-48 min-h-[70vh]">
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"
        />

        <div className="container px-4 md:px-6 text-center z-10 flex flex-col items-center justify-center">

          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="inline-block relative group mb-8"
          >
            {/* Pulsing Backlight */}
            <div className="absolute inset-0 bg-teal-500/30 blur-2xl rounded-full scale-110 group-hover:bg-teal-500/40 transition-all duration-700 animate-pulse"></div>

            <motion.h1
              variants={textFloatVariants}
              initial="initial"
              animate="animate"
              className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-teal-100 to-teal-400 drop-shadow-2xl py-2"
            >
              Price reveal soon!!
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-2 text-slate-400 text-lg md:text-xl max-w-lg mx-auto"
          >
            We are finalizing our flexible plans to ensure Coeur.AI brings maximum value to your practice. Check back shortly.
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
