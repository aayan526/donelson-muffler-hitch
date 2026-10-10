import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    'Muffler Repair & Custom Exhaust'
  );

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F5F4] flex flex-col selection:bg-[#F5A524] selection:text-[#0A0A0B]">
      
      {/* 1. Sticky Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* 3. Stats Bar with Animated Counters */}
        <StatsBar />

        {/* 4. Services Grid with Prices & Animated Icons */}
        <Services onSelectService={(service) => scrollToBooking(service)} />

        {/* 5. About / Why Us Section */}
        <About onBookClick={() => scrollToBooking()} />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Online Booking Form */}
        <BookingForm
          selectedService={selectedService}
          onServiceChange={(s) => setSelectedService(s)}
        />

        {/* 8. Contact & Location Section */}
        <ContactLocation />
      </main>

      {/* 9. Footer */}
      <Footer onSelectService={(service) => scrollToBooking(service)} />

    </div>
  );
}
