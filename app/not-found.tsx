'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Home, MessageCircle, Sparkles, RefreshCcw } from 'lucide-react';
import Bubbles from '@/components/Bubbles';

export default function NotFound() {
  const [logoSrc, setLogoSrc] = useState('/images/logo.png');
  const [hasError, setHasError] = useState(false);

  const handleLogoError = () => {
    if (logoSrc === '/images/logo.png') {
      setLogoSrc('/logo.png');
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1a3a5c] to-[#0d2d40] flex flex-col items-center justify-center p-4 sm:p-6 text-center overflow-hidden">
      {/* Dynamic background bubbles */}
      <Bubbles />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#48C2C1]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3476A8]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Logo / Brand Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {!hasError ? (
            <Image
              src={logoSrc}
              alt="رفيق اللمعة"
              width={160}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-md select-none"
              onError={handleLogoError}
              priority
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex items-center gap-1 select-none">
              <span className="text-white font-black text-xl tracking-tight">
                رفيق <span className="text-[#48C2C1]">اللمعة</span>
              </span>
            </div>
          )}
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 150, delay: 0.1 }}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl flex flex-col items-center"
        >
          {/* Glowing Sparkles badge */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#48C2C1] to-[#3476A8] flex items-center justify-center shadow-lg shadow-[#48C2C1]/30 mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Large custom shiny 404 display */}
          <div className="relative mb-4 select-none">
            <h1 className="text-7xl sm:text-8xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#48C2C1] via-white to-[#3476A8] drop-shadow-[0_4px_10px_rgba(72,194,193,0.2)]">
              404
            </h1>
            <span className="absolute -top-1 -right-4 text-2xl animate-bounce">🧼</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
            عذراً، هذه الصفحة غير موجودة!
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-sm">
            يبدو أن رفيق اللمعة قام بتلميع وتنظيف هذه الصفحة بتفانٍ ودقة فائقة حتى اختفت تماماً! ✨ أو ربما الرابط الذي اتبعته غير صحيح.
          </p>

          {/* Action Buttons with distinct IDs */}
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/" passHref className="w-full sm:w-auto">
              <motion.button
                id="404-go-home-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#48C2C1] to-[#3476A8] text-white rounded-full text-base font-bold shadow-lg shadow-[#48C2C1]/30 hover:shadow-xl hover:shadow-[#48C2C1]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Home className="w-5 h-5 shrink-0" />
                <span>العودة للرئيسية</span>
              </motion.button>
            </Link>

            <a
              id="404-contact-support-btn"
              href="https://wa.me/966559205714?text=مرحباً، واجهت مشكلة في موقع رفيق اللمعة وأنا بحاجة لمساعدة"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/25 text-white rounded-full text-base font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#25d366] shrink-0" />
                <span>تواصل معنا لدعمك</span>
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Footer info/suggestion */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-xs text-white/50 flex items-center gap-1"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>هل تعتقد أن هذا خطأ كود برمجي؟ جرب تحديث الصفحة.</span>
        </motion.p>
      </div>
    </div>
  );
}
