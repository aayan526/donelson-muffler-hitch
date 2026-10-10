import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Book', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0A0A0B]/95 backdrop-blur-md border-[#26262B] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#0A0A0B]/85 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Brand Logo Image */}
          <a
            href="#"
            className="flex items-center group focus:outline-none shrink-0"
            aria-label="Donelson Muffler & Hitch Home"
          >
            <img
              src="/donelson-logo.webp"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/donelson-logo.svg';
              }}
              alt="Donelson Muffler & Hitch"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Nav Links with Sliding Underline - strictly 1024px+ (lg:) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-semibold text-[#A1A1AA] hover:text-[#F5F5F4] transition-colors group focus:outline-none whitespace-nowrap"
              >
                <span>{link.label}</span>
                {/* Sliding underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5A524] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Phone Button - strictly 1024px+ (lg:) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:6158852058"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-bold text-[#0A0A0B] bg-[#F5A524] hover:bg-[#FFB93D] transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,165,36,0.3)] hover:shadow-[0_0_25px_rgba(245,165,36,0.45)] focus:outline-none focus:ring-2 focus:ring-[#F5A524]/50 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span className="whitespace-nowrap">615-885-2058</span>
            </a>
          </div>

          {/* Tablet & Mobile Menu Controls - strictly below 1024px (lg:hidden) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:6158852058"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F5A524] hover:bg-[#FFB93D] text-[#0A0A0B] text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 focus:outline-none"
              aria-label="Call shop"
            >
              <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
              <span className="hidden sm:inline">615-885-2058</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg bg-[#17171A] border border-[#26262B] text-[#F5F5F4] hover:text-[#F5A524] hover:border-[#F5A524]/50 transition-colors focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Animated Tablet & Mobile Slide-down Panel (below 1024px) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[480px] opacity-100 border-t border-[#26262B] mt-3' : 'max-h-0 opacity-0'
        } bg-[#121214]`}
      >
        <div className="px-4 sm:px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-lg text-sm sm:text-base font-semibold text-[#A1A1AA] hover:text-[#F5F5F4] hover:bg-[#17171A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#26262B] flex flex-col sm:flex-row gap-2.5">
            <a
              href="tel:6158852058"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold bg-[#F5A524] hover:bg-[#FFB93D] text-[#0A0A0B] transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span>Call 615-885-2058</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold bg-[#17171A] border border-[#26262B] text-[#F5F5F4] hover:border-[#F5A524]/50 transition-colors cursor-pointer"
            >
              <span>Book Online Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
