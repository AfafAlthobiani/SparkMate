'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function PhoneFAB() {
  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <motion.a
        id="phone-floating-button"
        href="tel:0559205714"
        className="pointer-events-auto flex items-center justify-center gap-0 group-hover:gap-1.5 p-3 group-hover:px-4.5 bg-gradient-to-r from-[#3476A8] to-[#48C2C1] text-white rounded-full shadow-2xl hover:from-[#2e6894] hover:to-[#3eb5b4] transition-all duration-300 group select-none relative outline-none focus:ring-4 focus:ring-[#48C2C1]/50"
        title="اتصل بنا الآن"
        dir="rtl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 15px 25px -10px rgba(52, 118, 168, 0.5), 0 0 12px rgba(72, 194, 193, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing glow ring background */}
        <span className="absolute inset-0 rounded-full bg-[#48C2C1]/30 -z-10 animate-ping opacity-75"></span>

        {/* Shaking & pulsing phone icon */}
        <motion.div
          id="phone-icon-container"
          animate={{
            rotate: [0, -10, 10, -10, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            repeatDelay: 2
          }}
          className="bg-white/11 p-1 rounded-full flex items-center justify-center shrink-0"
        >
          <Phone 
            id="phone-lucide-icon"
            className="w-4 h-4 text-white" 
            strokeWidth={2.5}
          />
        </motion.div>

        {/* Text that shows beautifully with smooth transition on hover */}
        <span 
          id="phone-button-text"
          className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 ease-in-out text-white font-black text-xs md:text-sm whitespace-nowrap pl-0 group-hover:pl-1 select-none"
        >
          اتصل بنا
        </span>
      </motion.a>
    </div>
  );
}
