import React from 'react';

export const ExhaustIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    className={`${className} text-[#F5A524] transition-all duration-300 group-hover:scale-110`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Inlet pipe */}
    <path d="M4 24h8" className="transition-all duration-300 group-hover:stroke-[#FFB93D]" />
    {/* Muffler cylinder body */}
    <rect x="12" y="14" width="22" height="20" rx="6" fill="rgba(245, 165, 36, 0.12)" stroke="#F5A524" />
    <path d="M19 14v20M27 14v20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    {/* Dual outlet pipes */}
    <path d="M34 20h8M34 28h8" />
    {/* Beveled exhaust tips */}
    <path d="M42 18v4M42 26v4" strokeWidth="3" />
    {/* Animated exhaust fumes on hover */}
    <path
      d="M45 19c2-1 4-1 6 0M45 29c2-1 4-1 6 0"
      stroke="#FFB93D"
      strokeWidth="2"
      className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
    />
  </svg>
);

export const BrakeDiscIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    className={`${className} text-[#F5A524] transition-all duration-300 group-hover:scale-110`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer ventilated rotor */}
    <circle
      cx="24"
      cy="24"
      r="18"
      className="transition-transform duration-700 group-hover:rotate-90 origin-center"
      stroke="#F5A524"
      fill="rgba(245, 165, 36, 0.08)"
    />
    {/* Inner rotor hat */}
    <circle cx="24" cy="24" r="9" stroke="currentColor" />
    <circle cx="24" cy="24" r="3" fill="#F5A524" />
    
    {/* Rotor slots */}
    <path d="M24 10v4M24 34v4M10 24h4M34 24h4" strokeWidth="2" opacity="0.75" />
    <path d="M14 14l3 3M31 31l3 3M14 34l3-3M31 17l3-3" strokeWidth="1.5" opacity="0.6" />

    {/* Brake Caliper clamp */}
    <path
      d="M32 8c6 3 10 9 10 16s-4 13-10 16l-3-4c4-3 7-7 7-12s-3-9-7-12l3-4z"
      fill="#F5A524"
      stroke="#FFB93D"
      className="transition-all duration-300 group-hover:fill-[#FFB93D]"
    />
  </svg>
);

export const HitchIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    className={`${className} text-[#F5A524] transition-all duration-300 group-hover:scale-110`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Vehicle frame crossbar */}
    <path d="M6 14h36" strokeWidth="3" />
    {/* Downward drop brackets */}
    <path d="M12 14v10M36 14v10" strokeWidth="2.5" />
    {/* Receiver tube */}
    <rect x="18" y="22" width="12" height="14" rx="2" fill="rgba(245, 165, 36, 0.15)" stroke="#F5A524" />
    {/* Pin and clip hole */}
    <circle cx="24" cy="28" r="2" fill="#F5A524" />
    {/* Removable ball mount stem */}
    <path d="M24 36v5" strokeWidth="3" />
    {/* 2-Inch Hitch Ball */}
    <circle
      cx="24"
      cy="42"
      r="4"
      fill="#F5A524"
      stroke="#FFB93D"
      className="transition-transform duration-300 group-hover:-translate-y-0.5"
    />
    {/* Safety chain hooks */}
    <path
      d="M15 32c-2 4 1 6 3 4M33 32c2 4-1 6-3 4"
      className="transition-all duration-300 group-hover:stroke-[#FFB93D]"
    />
  </svg>
);

export const ConverterIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    className={`${className} text-[#F5A524] transition-all duration-300 group-hover:scale-110`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Inflow tube */}
    <path d="M4 24h6" />
    {/* Catalytic converter housing */}
    <path
      d="M10 24l5-9h18l5 9-5 9H15l-5-9z"
      fill="rgba(245, 165, 36, 0.12)"
      stroke="#F5A524"
      className="transition-colors duration-300 group-hover:fill-[rgba(245,165,36,0.22)]"
    />
    {/* Honeycomb substrate indicators */}
    <path d="M19 19v10M24 17v14M29 19v10" stroke="#FFB93D" strokeWidth="1.8" opacity="0.8" />
    {/* Outflow tube */}
    <path d="M38 24h6" />
    {/* Welded heat shield ribs */}
    <path d="M16 12h16M16 36h16" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
  </svg>
);
