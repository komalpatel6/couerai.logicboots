'use client'

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GlobalPresenceSection() {
  const [emblaRefIndia, emblaApiIndia] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrevIndia = useCallback(() => emblaApiIndia && emblaApiIndia.scrollPrev(), [emblaApiIndia]);
  const scrollNextIndia = useCallback(() => emblaApiIndia && emblaApiIndia.scrollNext(), [emblaApiIndia]);

  const indiaOffices = [

    {
      city: "",
      address: "",
      phone: ""
    }
  ];

  const usaOffices = [
    {
      city: "USA Address",
      address: "Mass Robotics, 12 Channel St #202, Boston, MA 02210",
      phone: "+1 "
    }
  ];

  return (
    <section className="py-20 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e5fae] mb-16 underline-offset-8 decoration-orange-400">
          Our Global Presence
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* India Section */}
          <div className="w-full lg:w-auto flex-shrink-0 space-y-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] w-12 sm:w-20 bg-orange-400 rounded-full"></div>
                <span className="text-xl font-bold text-orange-400 px-2 tracking-wide whitespace-nowrap">India</span>
                <div className="h-[2px] w-12 sm:w-20 bg-orange-400 rounded-full"></div>
              </div>
            </div>

            <div className="relative group lg:min-w-[400px]">
              <div className="overflow-hidden" ref={emblaRefIndia}>
                <div className="flex -ml-4 justify-center">
                  {indiaOffices.map((office, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_auto]">
                      <div className="h-full flex flex-col items-center text-center p-6 rounded-xl border border-border/50 hover:border-[#1e5fae]/50 transition-all duration-300 bg-card/30 min-w-[280px] sm:min-w-[320px]">
                        <h3 className="text-lg font-bold text-[#1e5fae] mb-4 h-12 flex items-center justify-center underline-offset-4 decoration-orange-400/50">
                          {office.city}
                        </h3>
                        {office.address ? (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm text-muted-foreground mb-4 max-w-[280px] leading-relaxed line-clamp-4 hover:text-primary transition-colors cursor-pointer"
                          >
                            {office.address}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-muted-foreground mb-4 max-w-[280px] leading-relaxed line-clamp-4">
                            [Click to add address]
                          </p>
                        )}
                        <a
                          href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                          className="text-sm font-medium text-[#1e5fae] hover:underline whitespace-nowrap"
                        >
                          Ph: {office.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {indiaOffices.length > 1 && (
                <>
                  <button
                    onClick={scrollPrevIndia}
                    className="absolute left-[-1rem] top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-card"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#1e5fae]" />
                  </button>
                  <button
                    onClick={scrollNextIndia}
                    className="absolute right-[-1rem] top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-card"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5 text-[#1e5fae]" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* USA Section */}
          <div className="w-full lg:w-auto flex-shrink-0 space-y-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] w-8 sm:w-12 bg-orange-400 rounded-full"></div>
                <span className="text-xl font-bold text-orange-400 px-2 tracking-wide whitespace-nowrap">USA</span>
                <div className="h-[2px] w-8 sm:w-12 bg-orange-400 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 hover:border-[#1e5fae]/50 transition-all duration-300 bg-card/30 min-w-[280px] sm:min-w-[320px]">
              <h3 className="text-lg font-bold text-[#1e5fae] mb-4 h-12 flex items-center justify-center underline-offset-4 decoration-orange-400/50">
                {usaOffices[0].city}
              </h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(usaOffices[0].address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4 hover:text-primary transition-colors cursor-pointer max-w-[280px]"
              >
                {usaOffices[0].address}
              </a>
              <a
                href={`tel:${usaOffices[0].phone.replace(/[^+\d]/g, '')}`}
                className="text-sm font-medium text-[#1e5fae] hover:underline whitespace-nowrap"
              >
                Ph: {usaOffices[0].phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
