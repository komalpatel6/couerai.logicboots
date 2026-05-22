'use client'

import React from 'react';
import { MapPin } from 'lucide-react';

export default function GlobalPresenceSection() {
  const indiaOffices = [
    {
      city: "India Address",
      address: "AIC IIT Delhi Sonipat Campus",
    }
  ];

  const usaOffices = [
    {
      city: "USA Address",
      address: "Mass Robotics, 12 Channel St #202, Boston, MA 02210",
    }
  ];

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline mb-16 text-white">
          Our Global Presence
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* India Section */}
          <div className="flex-1 flex flex-col space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-orange-400/60"></div>
              <span className="text-sm font-bold text-orange-400 uppercase tracking-widest">India</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-orange-400/60"></div>
            </div>

            <div className="flex-grow flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.03)] transition-all duration-300 min-w-[280px] sm:min-w-[320px]">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4">
                {indiaOffices[0].city}
              </h3>
              
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(indiaOffices[0].address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 leading-relaxed hover:text-primary transition-colors cursor-pointer max-w-[280px] duration-200"
              >
                {indiaOffices[0].address}
              </a>
            </div>
          </div>

          {/* USA Section */}
          <div className="flex-1 flex flex-col space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-orange-400/60"></div>
              <span className="text-sm font-bold text-orange-400 uppercase tracking-widest">USA</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-orange-400/60"></div>
            </div>

            <div className="flex-grow flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.03)] transition-all duration-300 min-w-[280px] sm:min-w-[320px]">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-white mb-4">
                {usaOffices[0].city}
              </h3>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(usaOffices[0].address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 leading-relaxed hover:text-primary transition-colors cursor-pointer max-w-[280px] duration-200"
              >
                {usaOffices[0].address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
