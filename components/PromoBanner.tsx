'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gift, ArrowLeft, X, Flame } from 'lucide-react';

interface PromoBannerProps {
  onClose: () => void;
  onBookPromo: () => void;
}

export default function PromoBanner({ onClose, onBookPromo }: PromoBannerProps) {
  return (
    <div 
      id="promo-top-banner"
      className="fixed top-0 right-0 left-0 w-full z-50 bg-gradient-to-r from-[#0d1b2a] via-[#1a3a5c] to-[#0d1b2a] border-b border-[#48C2C1]/20 h-10 sm:h-11 flex items-center shadow-md select-none overflow-hidden"
    >
      {/* Decorative pulse glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#48C2C1]/5 to-transparent animate-pulse pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between relative z-10 h-full">
        
        {/* Banner Content Area - Clickable to open booking modal */}
        <div 
          onClick={onBookPromo}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 overflow-hidden cursor-pointer hover:opacity-90 active:scale-[0.99] transition-all"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.15, 1], opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
            className="flex items-center justify-center shrink-0"
          >
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
          </motion.div>
          
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] xs:text-xs sm:text-sm font-black text-white whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="text-[#48C2C1]">صدمة الأسعار! ✨</span>
            <span className="hidden sm:inline-block">باقة الغسيل والتعقيم:</span>
            <span className="text-orange-300 bg-white/10 px-1.5 py-0.5 rounded-md hover:bg-white/15 transition-all text-[9.5px] xs:text-xs">العرض المتكامل 🎁</span>
            <span className="text-white/80 hidden xs:inline-block">(كنب + سجاد + ستارة + جدران)</span>
            <span className="text-[#48C2C1] font-black text-[10px] xs:text-xs sm:text-[15px] bg-[#48C2C1]/10 px-1.5 py-0.5 rounded border border-[#48C2C1]/25">209 ريال فقط!</span>
          </div>

          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBookPromo();
            }}
            className="hidden md:flex items-center gap-1 bg-[#48C2C1] hover:bg-white text-[#0d1b2a] hover:text-[#3476A8] text-xs font-black px-3 py-1 rounded-full shadow-md transition-all shrink-0 hover:scale-105 duration-300 cursor-pointer mr-2.5 border-0"
          >
            <span>احجز العرض</span>
            <ArrowLeft className="w-3 h-3 text-current" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-all cursor-pointer mr-1 sm:mr-2"
          aria-label="إغلاق الإعلان"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Mini glowing stripe accent at the bottom boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#48C2C1] to-transparent opacity-80" />
    </div>
  );
}
