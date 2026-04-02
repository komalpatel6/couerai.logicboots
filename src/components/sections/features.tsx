'use client'

import React, { useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Smartphone, Users, WifiOff } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  images: string[];
  aiHint: string;
}

const features: Feature[] = [
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "AI-Powered Detection",
    description:
      "Our proprietary algorithms detect arrhythmias and other cardiac anomalies with superhuman accuracy, 24/7.",
    images: ["/f1.jpg"],
    aiHint: "heartbeat graph",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Real-Time Mobile App",
    description:
      "A user-friendly app for patients to view their data and for clinicians to receive instant alerts on the go.",
    images: ["/f2.jpg"],
    aiHint: "mobile application",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Remote Diagnosis",
    description:
      "Enable expert consultations from anywhere in the world, breaking down geographical barriers to care.",
    images: ["/f3.jpg"],
    aiHint: "doctor patient",
  },
  {
    icon: <WifiOff className="h-10 w-10 text-primary" />,
    title: "Offline Functionality",
    description:
      "The device continues to collect and analyze data even without an internet connection, syncing when it reconnects.",
    images: ["/f4.jpg", "/f9.jpg"],
    aiHint: "remote landscape",
  },
];

function FeatureImage({ feature }: { feature: Feature }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });

  useEffect(() => {
    if (!emblaApi || feature.images.length <= 1) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi, feature.images.length]);

  if (feature.images.length <= 1) {
    return (
      <Image
        src={feature.images[0]}
        data-ai-hint={feature.aiHint}
        alt={feature.title}
        width={600}
        height={600}
        className="object-cover w-full h-[300px]"
      />
    );
  }

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {feature.images.map((src, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0">
            <Image
              src={src}
              data-ai-hint={feature.aiHint}
              alt={`${feature.title} - ${index + 1}`}
              width={600}
              height={600}
              className="object-cover w-full h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              A Smarter Approach to Heart Health
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
              Explore the core features that make Coeur AI a game-changer in
              cardiac monitoring.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 max-w-screen-xl mx-auto">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 100}>
              <Card className="overflow-hidden h-full flex flex-col border-border/70 hover:border-primary/50 transition-colors duration-300 bg-card">
                <CardHeader className="flex flex-row items-start gap-4">
                  {feature.icon}
                  <div className="grid gap-1">
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="mt-auto -mx-6 -mb-6">
                    <FeatureImage feature={feature} />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
