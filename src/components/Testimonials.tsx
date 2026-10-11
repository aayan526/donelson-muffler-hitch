import React, { useEffect, useRef, useState } from 'react';
import { Star, ShieldCheck } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  neighborhood: string;
  service: string;
  quote: string;
}

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety net: reveal if the observer misfires (some mobile browsers),
    // so reviews can never stay invisible.
    const fallback = window.setTimeout(() => {
      const el = sectionRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) setIsVisible(true);
      }
    }, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: 'Caleb Morgan',
      neighborhood: 'Hermitage, TN',
      service: 'Dual Exhaust & Class IV Hitch Installation',
      quote:
        'Brought my Silverado in for a Curt Class IV receiver for our camper and had them weld a dual Flowmaster system. The welds are flawless, there is zero highway cabin drone on I-40, and the bill matched the quote to the dollar. True professionals.',
    },
    {
      id: 'rev-2',
      name: 'Donna Richardson',
      neighborhood: 'Donelson (Lebanon Pike)',
      service: 'Complete Front & Rear Ceramic Brakes',
      quote:
        'The dealership quoted me over $1,400 for new calipers and rotors. Donelson Muffler hoisted my car up, showed me the calipers were completely healthy, and only charged me for new ceramic pads and rotor resurfacing. Honest people are rare—they earned a customer for life.',
    },
    {
      id: 'rev-3',
      name: 'Marcus Vance',
      neighborhood: 'East Nashville, TN',
      service: 'Trailer Hitch & Electric Brake Controller Wiring',
      quote:
        'As a landscape contractor, vehicle downtime kills my revenue. Dropped my work truck off at 7:30 AM, they wired the 7-pin plug, mounted the in-dash brake controller, and had me back towing before noon. The best specialty shop in Nashville.',
    },
  ];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0A0A0B] border-b border-[#26262B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#17171A] border border-[#26262B] text-xs font-bold uppercase tracking-wider text-[#F5A524] mb-3">
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
              Trusted Across Middle Tennessee.
            </h2>
            <p className="mt-3 text-base text-[#A1A1AA]">
              Real feedback from local drivers, truck haulers, and boat owners who rely on our Eddings Lane shop.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="p-4 rounded-xl bg-[#17171A] border border-[#26262B] flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 text-[#F5A524]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F5A524]" />
              ))}
            </div>
            <div className="text-xs text-[#A1A1AA] border-l border-[#26262B] pl-3">
              <strong className="text-[#F5F5F4] text-sm block">4.9 / 5.0 Star Rating</strong>
              <span>Over 480+ local reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={rev.id}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              className={`p-7 rounded-2xl bg-[#17171A] border border-[#26262B] card-lift flex flex-col justify-between transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                {/* 5-Star SVGs */}
                <div className="flex items-center gap-1 mb-4 text-[#F5A524]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5A524]" />
                  ))}
                </div>

                {/* Service Tag */}
                <div className="text-xs font-bold text-[#F5A524] bg-[#121214] px-3 py-1.5 rounded-lg border border-[#26262B] inline-block mb-4">
                  {rev.service}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#F5F5F4] leading-relaxed font-normal mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#26262B] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#F5F5F4]">{rev.name}</div>
                  <div className="text-xs text-[#A1A1AA]">{rev.neighborhood}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#A1A1AA]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F5A524]" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
