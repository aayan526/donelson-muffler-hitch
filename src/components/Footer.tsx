import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  return (
    <footer className="bg-[#0A0A0B] text-[#A1A1AA] border-t border-[#26262B] text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="inline-block focus:outline-none" aria-label="Donelson Muffler & Hitch Home">
              <img
                src="/donelson-logo.webp"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/donelson-logo.svg';
                }}
                alt="Donelson Muffler & Hitch"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md font-normal">
              Specialized auto repair on Eddings Lane. We build custom mandrel-bent dual exhaust, service precision brake and rotor assemblies, and rig Class I through Class V trailer hitches for Tennessee drivers and haulers.
            </p>

            <div className="pt-2 text-[11px] text-[#A1A1AA]">
              Phone: <a href="tel:6158852058" className="text-[#F5A524] font-bold hover:underline">615-885-2058</a> · Address: 252 Eddings Ln, Nashville, TN 37214
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="space-y-3">
            <div className="font-bold text-[#F5F5F4] uppercase tracking-wider text-xs">
              Specialty Services
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={() => onSelectService('Muffler Repair & Custom Exhaust')}
                  className="hover:text-[#F5A524] transition-colors"
                >
                  Muffler Repair &amp; Exhaust
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onSelectService('Complete Brake & Rotor Service')}
                  className="hover:text-[#F5A524] transition-colors"
                >
                  Complete Brake &amp; Rotor Service
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onSelectService('Trailer Hitch & Towing')}
                  className="hover:text-[#F5A524] transition-colors"
                >
                  Trailer Hitch &amp; Towing Setup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => onSelectService('Catalytic Converters & Emissions')}
                  className="hover:text-[#F5A524] transition-colors"
                >
                  Catalytic Converters &amp; Shields
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-[#F5A524] hover:text-[#FFB93D] font-semibold transition-colors"
                >
                  Schedule Online Booking &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="space-y-3">
            <div className="font-bold text-[#F5F5F4] uppercase tracking-wider text-xs">
              Shop Hours
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F5A524] shrink-0" />
                <span>Mon–Fri: <strong className="text-[#F5F5F4]">7:30 AM–5:00 PM</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F5A524] shrink-0" />
                <span>Saturday: <strong className="text-[#F5F5F4]">8:00 AM–1:00 PM</strong></span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Clock className="w-4 h-4 text-zinc-600 shrink-0" />
                <span>Sunday: Closed</span>
              </div>
              <div className="pt-2 text-xs text-[#A1A1AA]">
                Located near Lebanon Pike &amp; Donelson Station.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Mandatory Design Concept Disclaimer */}
        <div className="pt-8 border-t border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A1A1AA]">
          <div>
            &copy; 2026 Donelson Muffler &amp; Hitch. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[#A1A1AA]">
            Design Concept — demonstration website concept for Donelson Muffler &amp; Hitch. Not the official business website.
          </div>
        </div>

      </div>
    </footer>
  );
};
