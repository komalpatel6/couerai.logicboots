import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32">
      <FadeIn>
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-[#060a08] border border-white/5 p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-headline">
                  Ready to Transform Cardiac Care?
                </h2>
                <p className="mt-2 text-slate-400">
                  Join the growing number of clinics and hospitals choosing Coeur AI. Request a personalized demo today.
                </p>
              </div>
              <div className="flex justify-center md:justify-end gap-4">
                <Button size="lg" className="text-lg bg-[#208b96] hover:bg-[#1a767f] text-white" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
