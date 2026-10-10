import React, { useState } from 'react';
import { Phone, MapPin, Clock, Navigation, ExternalLink, Copy, Check } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('252 Eddings Ln, Nashville, TN 37214');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hours = [
    { day: 'Monday – Friday', time: '7:30 AM – 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#121214] border-b border-[#26262B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#17171A] border border-[#26262B] text-xs font-bold uppercase tracking-wider text-[#F5A524] mb-3">
            <span>Location &amp; Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F4] tracking-tight">
            Visit Us on Eddings Lane.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Located right off Lebanon Pike in Donelson, minutes from Briley Parkway, I-40, and Nashville International Airport. Wide lot with easy trailer turnaround.
          </p>
        </div>

        {/* 2-Column Grid: Contact Card + Embedded Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#17171A] border border-[#26262B] flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#121214] border border-[#26262B] flex items-center justify-center text-[#F5A524] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
                    Direct Phone Line
                  </span>
                  <a
                    href="tel:6158852058"
                    className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F4] hover:text-[#F5A524] transition-colors block mt-0.5"
                  >
                    615-885-2058
                  </a>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Call during shop hours for immediate bay availability.
                  </p>
                </div>
              </div>

              <div className="h-px bg-[#26262B]" />

              {/* Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#121214] border border-[#26262B] flex items-center justify-center text-[#F5A524] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block">
                    Shop Address
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#F5F5F4] mt-0.5">
                    252 Eddings Ln
                  </div>
                  <div className="text-sm text-[#A1A1AA]">
                    Nashville, TN 37214
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121214] border border-[#26262B] text-xs font-semibold text-[#F5F5F4] hover:border-[#F5A524]/60 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#F5A524]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=252+Eddings+Ln+Nashville+TN+37214"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F5A524] hover:bg-[#FFB93D] text-[#0A0A0B] text-xs font-bold transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#26262B]" />

              {/* Hours Table */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F5A524]" />
                  <span>Shop Hours</span>
                </span>
                <div className="space-y-2 text-xs sm:text-sm">
                  {hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1.5 border-b border-[#26262B]/60 last:border-0"
                    >
                      <span className="font-semibold text-[#F5F5F4]">{h.day}</span>
                      <span className={h.time === 'Closed' ? 'text-zinc-500 font-semibold' : 'text-[#F5A524] font-bold'}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="p-3.5 rounded-xl bg-[#121214] border border-[#26262B] text-xs text-[#A1A1AA]">
              <strong className="text-[#F5F5F4]">Trailer Friendly:</strong> Wide drive-in lot easily accommodates large campers, commercial utility trailers, and lifted trucks.
            </div>

          </div>

          {/* Right Column: Embedded Google Map Iframe (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#26262B] bg-[#17171A] relative flex flex-col min-h-[400px]">
            <iframe
              title="Donelson Muffler and Hitch Location Map"
              src="https://www.google.com/maps?q=252+Eddings+Ln,+Nashville,+TN+37214&output=embed"
              className="w-full h-full min-h-[380px] flex-1 border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[1.2] opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Action Bar at Bottom */}
            <div className="p-4 bg-[#17171A] border-t border-[#26262B] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#A1A1AA]">
                Donelson Muffler &amp; Hitch · 252 Eddings Ln, Nashville, TN 37214
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=252+Eddings+Ln+Nashville+TN+37214"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5A524] hover:text-[#FFB93D] transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
