import React, { useState, useEffect, useRef } from 'react';
import { Award, Star, MessageSquare, Wrench } from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

export const StatsBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    years: 0,
    rating: 0,
    reviews: 0,
    services: 0,
  });

  const stats: StatItem[] = [
    {
      id: 'years',
      target: 33,
      suffix: '+',
      label: 'Years Family-Owned',
      sublabel: 'Serving Nashville & Donelson',
      icon: <Award className="w-5 h-5 text-[#F5A524]" />,
    },
    {
      id: 'rating',
      target: 4.9,
      suffix: '',
      decimals: 1,
      label: 'Average Rating',
      sublabel: 'Verified Local Drivers',
      icon: <Star className="w-5 h-5 text-[#F5A524] fill-[#F5A524]" />,
    },
    {
      id: 'reviews',
      target: 480,
      suffix: '+',
      label: 'Customer Reviews',
      sublabel: 'Google & Word of Mouth',
      icon: <MessageSquare className="w-5 h-5 text-[#F5A524]" />,
    },
    {
      id: 'services',
      target: 3,
      suffix: '',
      label: 'Specialty Services',
      sublabel: 'Mufflers, Brakes, Hitches',
      icon: <Wrench className="w-5 h-5 text-[#F5A524]" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad curve
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              years: Math.round(33 * easeOut),
              rating: Number((4.9 * easeOut).toFixed(1)),
              reviews: Math.round(480 * easeOut),
              services: Math.round(3 * easeOut),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                years: 33,
                rating: 4.9,
                reviews: 480,
                services: 3,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="stats"
      ref={containerRef}
      className="relative z-10 py-12 sm:py-16 bg-[#121214] border-b border-[#26262B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#17171A] border border-[#26262B] card-lift flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#121214] border border-[#26262B] flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold tracking-wider text-[#A1A1AA] uppercase">
                  Verified Stat
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
                  {stat.decimals ? counts[stat.id].toFixed(stat.decimals) : counts[stat.id]}
                  <span className="text-[#F5A524]">{stat.suffix}</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#F5F5F4] mt-1.5">
                  {stat.label}
                </div>
                <div className="text-xs text-[#A1A1AA] mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
