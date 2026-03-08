import { Stethoscope, BrainCircuit, Smartphone, FileText } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import ThumbnailButton from "../thumbnail-button-video-player";

const steps = [
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "Record",
    description:
      "Heart and lung sounds are recorded using our smart stethoscope.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Analyze",
    description: "Data is instantly processed by our proprietary AI algorithm.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Visualize",
    description:
      "Real-time results and waveforms are displayed in our intuitive mobile app.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Report",
    description:
      "A comprehensive report with findings is generated for clinical use.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Simple Steps to a Smarter Diagnosis.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
              Follow our straightforward process to leverage AI in your
              diagnostic workflow.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 -ml-px w-0.5 h-full bg-border"
              aria-hidden="true"></div>

            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 150}>
                <div className="relative mb-8">
                  <div className="flex items-center">
                    {/* Circle and Icon */}
                    <div className="z-10 flex items-center justify-center w-24 h-24 rounded-full bg-card border-2 border-primary shadow-lg mx-auto">
                      {step.icon}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <ThumbnailButton
            videoUrl="https://files.catbox.moe/zb9ejd.mp4"
            thumbnailUrl="/metech.png"
            title="Watch our Demo Video"
          />
        </div>
      </div>
    </section>
  );
}
