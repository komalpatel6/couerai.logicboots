import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const benefits = [
  { text: 'Enhance diagnostic accuracy with AI-driven second opinions.' },
  { text: 'Reduce manual data review time by up to 90%.' },
  { text: 'Monitor patients remotely, improving patient retention and care quality.' },
  { text: 'Seamlessly integrate with existing EMR and hospital systems.' },
];

export default function ClinicianBenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <FadeIn>
            <div className="mx-auto max-w-md lg:max-w-sm">
              <Image
                src="/f5.jpg"
                data-ai-hint="doctor technology"
                alt="A smiling clinician using a tablet in a modern medical facility."
                width={500}
                height={500}
                className="rounded-xl shadow-2xl shadow-primary/10 w-full h-auto object-cover aspect-square"
              />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">For Clinicians</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                Work Smarter, Not Harder
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Coeur AI is designed to augment your expertise, giving you more time to focus on what matters most: your patients.
              </p>
            </div>
            <ul className="mt-8 grid gap-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-8">See a Case Study</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
