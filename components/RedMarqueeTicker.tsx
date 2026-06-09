'use client';

import React from 'react';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export default function RedMarqueeTicker() {
  return (
    <a 
      href="#services" 
      className="block w-full bg-linear-to-r from-red-600 via-rose-600 to-red-600 py-2 sm:py-2.5 shadow-sm relative overflow-hidden select-none border-b border-red-700/30 hover:opacity-95 transition-all text-white active:scale-[0.995]"
      aria-label="اختر الخدمة وتواصل معنا عبر الواتساب لتأكيد الحجز والسعر"
    >
      {/* Glossy overlay effect for professional design */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none" />
      
      {/* Static Centered Text */}
      <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3 text-center">
        <MessageCircle className="w-4 h-4 text-white/95 shrink-0 animate-bounce" />
        <span className="text-xs sm:text-[13.5px] font-black tracking-wide text-white font-sans drop-shadow-xs">
          اختر الخدمة وتواصل معنا عبر الواتساب لتأكيد الحجز والسعر
        </span>
        <span className="hidden xs:inline-flex items-center justify-center bg-white/15 px-2 py-0.5 rounded-md text-[10px] font-medium leading-none">
          تأكيد فوري ⚡
        </span>
      </div>
    </a>
  );
}

