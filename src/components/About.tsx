import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import { AutoImage } from './AutoImage';

interface AboutProps {
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bullets = [
    {
      title: 'Family-owned 33+ years',
      desc: 'Three decades on Eddings Lane serving multiple generations of Nashville families.',
    },
    {
      title: 'Exhaust/brake/hitch specialists',
      desc: 'We do not stretch thin across oil changes—we master deep mechanical undercarriage work.',
    },
    {
      title: 'Same-day turnaround on most jobs',
      desc: 'Drop off in the morning and pick up ready to roll by late afternoon.',
    },
    {
      title: 'Free visual inspection before any work',
      desc: 'We hoist your vehicle onto the hydraulic lift and walk you through every diagnosis first.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#121214] border-b border-[#26262B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Auto Repair Shop Photo */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#26262B] group shadow-2xl">
              <AutoImage
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                backupSrc="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80"
                alt="Donelson Muffler and Hitch auto repair shop interior in Nashville TN"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Trust Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-[#0A0A0B]/90 backdrop-blur-md border border-[#26262B] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F5A524]">
                    Local Nashville Garage
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#F5F5F4] mt-0.5">
                    252 Eddings Ln, Nashville TN 37214
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#17171A] border border-[#26262B] flex items-center justify-center text-[#F5A524] shrink-0 ml-3">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Checkmark Bullets */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#17171A] border border-[#26262B] text-xs font-bold uppercase tracking-wider text-[#F5A524]">
                <span>About Donelson Muffler &amp; Hitch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
                Built on Honest Quotes and Quality Welds.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Since 1993, Donelson Muffler &amp; Hitch has served as Middle Tennessee’s dedicated specialty garage for custom exhaust, heavy-duty towing hitches, and dependable brake service. We operate our bays with old-school Tennessee values: no high-pressure sales pitches, fair labor rates, and meticulous craftsmanship you can inspect yourself.
            </p>

            {/* 4 Checkmark Bullets */}
            <div className="space-y-4 pt-2">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#17171A] border border-[#26262B] card-lift"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F5A524] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm sm:text-base font-bold text-[#F5F5F4]">
                      {b.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#A1A1AA] mt-0.5 leading-normal">
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-[#F5A524] hover:bg-[#FFB93D] text-[#0A0A0B] transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,165,36,0.3)] cursor-pointer focus:outline-none"
              >
                Schedule Free Visual Inspection
              </button>
              <a
                href="tel:6158852058"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl text-sm font-semibold text-[#F5F5F4] bg-[#17171A] border border-[#26262B] hover:border-[#F5A524]/50 transition-colors"
              >
                Call Shop: 615-885-2058
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
