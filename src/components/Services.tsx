import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { AutoImage } from './AutoImage';
import {
  ExhaustIcon,
  BrakeDiscIcon,
  HitchIcon,
  ConverterIcon,
} from './AnimatedServiceIcons';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  price: string;
  desc: string;
  photoUrl: string;
  backupPhotoUrl: string;
  icon: React.ReactNode;
  features: string[];
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
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

    return () => observer.disconnect();
  }, []);

  const services: ServiceCardData[] = [
    {
      id: 'muffler-exhaust',
      title: 'Muffler Repair & Custom Exhaust',
      price: 'from $110',
      desc: 'Precision mandrel bending, dual exhaust conversions, performance sound tuning (Flowmaster, MagnaFlow, Borla), and quiet factory-spec replacements.',
      photoUrl:
        'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=800&q=80',
      backupPhotoUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      icon: <ExhaustIcon className="w-8 h-8" />,
      features: [
        'Custom pipe fabrication on hydraulic benders',
        'Performance mufflers & dual exhaust systems',
        'Direct-fit quiet OEM-grade mufflers',
        'TIG & MIG weld leak repairs & new flex pipes',
        'Stainless steel polished & matte black exhaust tips',
      ],
    },
    {
      id: 'brakes-rotors',
      title: 'Complete Brake & Rotor Service',
      price: 'from $165',
      desc: 'Comprehensive pad, caliper, rotor, and hydraulic line service engineered for reliable stopping power on Middle Tennessee highways.',
      photoUrl:
        'https://images.unsplash.com/photo-1760317890322-364a810cd4da?auto=format&fit=crop&w=900&q=80',
      backupPhotoUrl:
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      icon: <BrakeDiscIcon className="w-8 h-8" />,
      features: [
        'Ultra-quiet, low-dust ceramic brake pads',
        'Slotted, drilled, and smooth rotor replacement',
        'Caliper rebuilds and slide pin lubrication',
        'High-temperature DOT 4 brake hydraulic fluid flush',
        'Electronic parking brake (EPB) service & resets',
      ],
    },
    {
      id: 'hitches-towing',
      title: 'Trailer Hitch & Towing',
      price: 'from $185',
      desc: 'Heavy-duty frame-mounted receiver hitches, 4-way & 7-way wiring harnesses, and electronic brake controllers for boats, campers, and utility rigs.',
      photoUrl:
        'https://images.unsplash.com/photo-1520101244246-293f77ffc39e?auto=format&fit=crop&w=900&q=80',
      backupPhotoUrl:
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
      icon: <HitchIcon className="w-8 h-8" />,
      features: [
        'Class I through Class V frame-mounted hitches',
        'Curt, B&W, and Draw-Tite receiver systems',
        'Plug-and-play 4-flat and 7-way RV blade wiring',
        'Tekonsha electronic trailer brake controllers',
        'Weight-distribution & anti-sway hitch setups',
      ],
    },
    {
      id: 'catalytic-emissions',
      title: 'Catalytic Converters & Emissions',
      price: 'from $240',
      desc: 'Certified EPA-compliant catalytic converter replacements to clear check engine codes (P0420/P0430) and heavy-duty welded anti-theft security armor.',
      photoUrl:
        'https://images.unsplash.com/photo-1765903916132-7d2fa8ad4c66?auto=format&fit=crop&w=900&q=80',
      backupPhotoUrl:
        'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80',
      icon: <ConverterIcon className="w-8 h-8" />,
      features: [
        'Direct-fit & universal EPA-compliant converters',
        'Welded steel cable anti-theft security cages',
        'Upstream & downstream O2 sensor diagnostics',
        'Exhaust manifold & flange leak re-welding',
        'Exhaust backpressure & flow diagnostics',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0A0A0B] border-b border-[#26262B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#17171A] border border-[#26262B] text-xs font-bold uppercase tracking-wider text-[#F5A524] mb-3">
            <span>Specialty Services &amp; Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
            Craftsmanship That Keeps Nashville Moving.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            No generic oil-change upsells. We specialize in custom exhaust fabrication, heavy-duty towing hitches, and precision brake systems. Honest upfront quotes with zero surprises.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
              className={`group rounded-2xl bg-[#17171A] border border-[#26262B] card-lift overflow-hidden flex flex-col justify-between transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                {/* Real Photography with Zoom Hover */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <AutoImage
                    src={service.photoUrl}
                    backupSrc={service.backupPhotoUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17171A] via-transparent to-black/30" />

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-lg bg-[#0A0A0B]/90 backdrop-blur-md border border-[#26262B] text-xs sm:text-sm font-bold text-[#F5A524] shadow-md font-mono">
                    {service.price}
                  </div>

                  {/* Animated SVG Icon Overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#0A0A0B]/90 backdrop-blur-md border border-[#26262B] flex items-center justify-center group-hover:border-[#F5A524]/60 transition-colors shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F4] tracking-tight mb-2.5 group-hover:text-[#F5A524] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* Feature Checkmark Bullets */}
                  <div className="space-y-2.5 pt-2 border-t border-[#26262B]/80 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F4]">
                        <Check className="w-4 h-4 text-[#F5A524] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Pre-selects Service & Scrolls to Booking */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#121214] hover:bg-[#F5A524] border border-[#26262B] hover:border-[#F5A524] text-[#F5F5F4] hover:text-[#0A0A0B] text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(245,165,36,0.3)] focus:outline-none"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 text-[#F5A524] group-hover/btn:text-[#0A0A0B] group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
