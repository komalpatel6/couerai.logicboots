import { FadeIn } from '@/components/fade-in';
import { Globe, Clock, Hospital, HeartPulse } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    text: "Early detection significantly improves treatment outcomes and survival rates."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    text: "Rising global burden of cardio-respiratory diseases."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    text: "Late diagnosis of heart and lung disease can be fatal."
  },
  {
    icon: <Hospital className="h-8 w-8 text-primary" />,
    text: "Over 50% of preventable deaths are due to cardiovascular and respiratory diseases."
  },
];

const EcgBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto text-primary/5" width="100%" viewBox="0 0 1000 100">
      <path d="M0 50 H150 L160 30 L170 70 L180 50 L190 60 L200 40 L210 50 H300 L310 45 L320 55 L330 50 H450 L460 30 L470 70 L480 50 L490 60 L500 40 L510 50 H600 L610 45 L620 55 L630 50 H750 L760 30 L770 70 L780 50 L790 60 L800 40 L810 50 H1000" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
)

export default function EarlyDetectionSection() {
  return (
    <section className="relative py-20 md:py-32">
      <EcgBackground />
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline">
            Early Detection Can Be a Lifesaver.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card className="h-full text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-5 md:p-6 flex flex-col items-center justify-center">
                  <div className="mb-3">{stat.icon}</div>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.text}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
