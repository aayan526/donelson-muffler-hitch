import React, { useState, useEffect } from 'react';
import { Calendar, Phone, ChevronDown, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [imgSrc, setImgSrc] = useState(
    'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1920&q=80'
  );

  const backupHeroImg =
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0A0A0B]">
      
      {/* Background Image with Parallax & Dark Gradients */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      >
        <img
          src={imgSrc}
          onError={() => setImgSrc(backupHeroImg)}
          alt="Automotive exhaust welding and repair in Nashville shop"
          className="w-full h-[125%] object-cover object-center filter brightness-[0.38] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent" />
        <div className="absolute inset-0 carbon-pattern opacity-40 mix-blend-overlay" />
      </div>

      {/* Main Hero Content (Staggered Entrance Animation) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        
        <div className="max-w-3xl space-y-6">
          
          {/* Badge: Family-Owned for 33+ Years */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#17171A]/90 border border-[#26262B] text-xs sm:text-sm font-bold text-[#F5A524] shadow-[0_0_15px_rgba(245,165,36,0.15)] animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#F5A524] animate-ping" />
            <span>Family-Owned for 33+ Years — Donelson, TN</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-[#F5F5F4] tracking-tight leading-[1.08] text-balance">
            Nashville's Muffler, Brake &amp; Hitch Specialists.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
            Honest local craftsmanship on Eddings Lane since 1993. From custom dual exhaust and quiet muffler repairs to precision ceramic brakes and heavy-duty towing hitches—done right, guaranteed.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-[#0A0A0B] bg-[#F5A524] hover:bg-[#FFB93D] transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_25px_rgba(245,165,36,0.35)] hover:shadow-[0_0_35px_rgba(245,165,36,0.5)] cursor-pointer focus:outline-none"
            >
              <Calendar className="w-5 h-5 text-[#0A0A0B]" />
              <span>Book Appointment</span>
            </button>

            <a
              href="tel:6158852058"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-[#F5F5F4] bg-[#17171A] hover:bg-[#26262B] border border-[#26262B] hover:border-[#F5A524]/60 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer focus:outline-none"
            >
              <Phone className="w-5 h-5 text-[#F5A524]" />
              <span>Call 615-885-2058</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#A1A1AA]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F5A524]" />
              <span>Lifetime Weld Guarantee</span>
            </span>
            <span className="hidden sm:inline text-[#26262B]">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#F5A524]" />
              <span>Same-Day Turnaround Available</span>
            </span>
            <span className="hidden sm:inline text-[#26262B]">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F5A524]" />
              <span>252 Eddings Ln</span>
            </span>
          </div>

        </div>

      </div>

      {/* Bottom Bar: Hours Strip & Scroll-Down Indicator */}
      <div className="relative border-t border-[#26262B] bg-[#121214]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          
          {/* Hours Strip */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[#A1A1AA]">
            <span className="font-bold text-[#F5F5F4] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F5A524]" />
              <span>Shop Hours:</span>
            </span>
            <span>Mon–Fri: <strong className="text-[#F5F5F4]">7:30 AM–5:00 PM</strong></span>
            <span className="text-[#26262B]">·</span>
            <span>Sat: <strong className="text-[#F5F5F4]">8:00 AM–1:00 PM</strong></span>
            <span className="text-[#26262B]">·</span>
            <span className="text-zinc-500">Sun: Closed</span>
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#stats"
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA] hover:text-[#F5A524] transition-colors group"
          >
            <span>Explore Services</span>
            <ChevronDown className="w-4 h-4 text-[#F5A524] group-hover:translate-y-0.5 transition-transform animate-bounce" />
          </a>

        </div>
      </div>

    </section>
  );
};
