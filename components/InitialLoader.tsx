'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Home, Sofa, Droplet, Wind, Shield, Brush } from 'lucide-react';

export default function InitialLoader() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const icons = [
    { component: Sparkles, color: 'text-[#48C2C1]', label: 'بريق ولمعان' },
    { component: Home, color: 'text-[#3476A8]', label: 'نظافة منزلية متكاملة' },
    { component: Sofa, color: 'text-[#48C2C1]', label: 'غسيل كنب احترافي' },
    { component: Droplet, color: 'text-sky-400', label: 'إزالة أصعب البقع' },
    { component: Wind, color: 'text-teal-300', label: 'تعقيم وتطهير بالبخار' },
    { component: Shield, color: 'text-[#3476A8]', label: 'حماية وجودة مضمونة' },
    { component: Brush, color: 'text-amber-400', label: 'أحدث معدات التنظيف' },
  ];

  useEffect(() => {
    // Cycle through icons every 300ms
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
    }, 3000 / icons.length); // complete full circle within loader time

    // Hide loader after 2.6 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => {
      clearInterval(iconInterval);
      clearTimeout(hideTimeout);
    };
  }, [icons.length]);

  const CurrentIcon = icons[currentIconIndex].component;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1b2a] text-white overflow-hidden select-none"
        >
          {/* Ambient luminous glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#48C2C1]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3476A8]/10 rounded-full blur-[80px] animate-pulse [animation-delay:1s]" />

          {/* Floating tiny sparkles */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-[#48C2C1] rounded-full animate-ping [animation-duration:1.5s]" />
            <div className="absolute top-[30%] right-[25%] w-1 h-1 bg-white rounded-full animate-ping [animation-duration:2s]" />
            <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-[#3476A8] rounded-full animate-ping [animation-duration:1.8s]" />
            <div className="absolute bottom-[35%] right-[15%] w-1.5 h-1.5 bg-white rounded-full animate-ping [animation-duration:2.3s]" />
          </div>

          <div className="relative flex flex-col items-center max-w-sm text-center px-6">
            
            {/* Logo Accent */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 select-none"
            >
              <h2 className="text-3xl font-black text-white tracking-wide">
                رفيق <span className="text-[#48C2C1] relative inline-block">اللمعة<span className="absolute bottom-1 right-0 left-0 h-1 bg-[#48C2C1]/30 rounded-full"></span></span>
              </h2>
              <div className="text-[11px] font-bold text-white/50 tracking-widest mt-1.5 font-mono uppercase">
                SparkMate Cleaning Services
              </div>
            </motion.div>

            {/* Cycling Cleaning Icons Vessel */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
              {/* Outer decorative tracking circles */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#48C2C1]/10" />
              <div className="absolute inset-6 rounded-full border border-[#3476A8]/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />

              <div className="absolute top-0 right-4 w-3 h-3 bg-[#48C2C1] rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="absolute bottom-1 left-3 w-2 h-2 bg-[#3476A8] rounded-full animate-bounce [animation-delay:0.5s]" />

              {/* Central Glowing Icon Vessel with Morph/Animate Transition */}
              <div className="relative w-22 h-22 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3476A8]/20 to-[#48C2C1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIconIndex}
                    initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute z-10"
                  >
                    <CurrentIcon className={`w-10 h-10 ${icons[currentIconIndex].color} drop-shadow-[0_0_12px_rgba(72,194,193,0.4)]`} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dynamic label mapping the current icon activity */}
            <div className="h-6 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIconIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-bold text-[#48C2C1]/90 tracking-wide"
                >
                  {icons[currentIconIndex].label}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Loading Progression Line */}
            <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-inner mb-3">
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.3, ease: 'easeIn' }}
                className="h-full bg-gradient-to-r from-[#3476A8] via-[#48C2C1] to-[#48C2C1] rounded-full shadow-[0_0_8px_rgba(72,194,193,0.6)]"
              />
            </div>

            {/* Safe footer loading text */}
            <span className="text-xs text-white/40 font-bold">بإشراف طاقم سعودي 🇸🇦</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
