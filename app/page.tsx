'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneFAB from '@/components/PhoneFAB';
import { Service, SERVICES } from '@/lib/services';
import PromoBanner from '@/components/PromoBanner';

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showPromo, setShowPromo] = useState(true);

  const handleBookPromo = () => {
    const promoService = SERVICES.find(s => s.id === 's1');
    if (promoService) {
      setSelectedService(promoService);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Top Promotional Banner */}
      {showPromo && (
        <PromoBanner 
          onClose={() => setShowPromo(false)} 
          onBookPromo={handleBookPromo}
        />
      )}

      <Navbar showPromo={showPromo} />
      <Hero />

      {/* Red Action Banner directing to Services */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-600 py-4.5 px-[5%] text-white shadow-lg relative overflow-hidden select-none border-b border-red-700/20">
        <div className="absolute inset-0 bg-black/5 animate-pulse pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-right">
          <div className="flex items-center gap-3.5 flex-col sm:flex-row text-center sm:text-right">
            <span className="flex h-3 w-3 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-200"></span>
            </span>
            <p className="text-sm sm:text-base md:text-lg font-black leading-relaxed text-white tracking-wide">
              اختر الخدمة وتواصل معنا عبر الواتساب لتأكيد الحجز والسعر
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 bg-white hover:bg-neutral-100 text-red-600 font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-md active:scale-95 duration-250 flex items-center gap-2 border border-red-200/50 hover:shadow-lg hover:scale-102"
          >
            <span>تصفح جميع الخدمات</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </a>
        </div>
      </div>

      <Services onBook={(s) => setSelectedService(s)} />
      <HowItWorks />
      <WhyUs />
      <Blog />
      <Reviews />
      <CTA />
      <Footer />
      
      <PhoneFAB />
      
      {selectedService && (
        <BookingModal 
          key={selectedService.id}
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
      
      {/* CDN Icons for Social Media in Footer */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />
    </main>
  );
}
