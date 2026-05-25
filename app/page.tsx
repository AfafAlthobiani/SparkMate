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
import { Service } from '@/lib/services';

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
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
