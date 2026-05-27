'use client';

import React from 'react';
import { motion } from 'motion/react';
import Bubbles from './Bubbles';
import { Sparkle, ShieldCheck, CheckCircle, Home, Gem, Building2, CalendarRange, HelpCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-linear-to-br from-[#0d1b2a] via-[#1a3a5c] to-[#0d2d40] flex items-center overflow-hidden">
      <Bubbles />
      
      <div className="relative z-10 w-[90%] max-w-7xl mx-auto pt-28 pb-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#48C2C1]/15 border border-[#48C2C1]/40 text-[#48C2C1] px-3 sm:px-4.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-[15px] font-extrabold mb-5 shadow-xs">
            <Sparkle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#48C2C1] animate-spin-slow" />
            <span>الخيار الأول في المدينة المنورة</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-5">
            رفيقك في<br />
            <span className="text-[#48C2C1]">النظافة واللمعان</span>
          </h1>
          
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-6 sm:mb-9 max-w-xl">
            نقدم لك خدمات تنظيف احترافية تُعيد لمنزلك بريقه وجماله، بأيدي متخصصة وأسعار تناسب الجميع في المدينة المنورة.
          </p>
          
          <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
            <a 
              href="#services" 
              className="bg-linear-to-br from-[#48C2C1] to-[#2ea8a7] text-white px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-bold shadow-2xl shadow-[#48C2C1]/40 hover:-translate-y-1 hover:shadow-[#48C2C1]/55 transition-all inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <CalendarRange className="w-4 h-4 sm:w-5 sm:h-5" />
              احجز خدمتك الآن
            </a>
            <a 
              href="#how" 
              className="bg-transparent text-white px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-bold border-2 border-white/30 hover:border-[#48C2C1] hover:text-[#48C2C1] transition-all inline-flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              كيف يعمل؟
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-85 h-[410px]">
            <div className="absolute inset-0 bg-linear-to-br from-[#3476A8]/30 to-[#48C2C1]/20 border border-[#48C2C1]/25 backdrop-blur-xl rounded-[28px] p-9 flex flex-col gap-5 shadow-2xl">
              <div className="absolute -top-4.5 -left-5 bg-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl text-[13px] font-bold text-[#3476A8] animate-float-slow border border-[#3476A8]/10">
                <ShieldCheck className="w-4 h-4 text-[#3476A8]" />
                <span>إشراف شاب سعودي🇸🇦 (بخدمتكم)</span>
              </div>
              <div className="absolute bottom-2 -left-6 bg-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl text-[13px] font-bold text-[#48C2C1] animate-float-slow [animation-delay:1.5s] border border-[#48C2C1]/10">
                <CheckCircle className="w-4 h-4 text-[#48C2C1]" />
                <span>الأسعار لفترة محدودة ⏱️</span>
              </div>
              
              <div className="bg-[#48C2C1]/10 hover:bg-[#48C2C1]/15 border border-[#48C2C1]/25 hover:border-[#48C2C1]/40 rounded-2xl p-4 flex items-center grow gap-3.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center shrink-0 shadow-md">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[12px] text-white/60 font-semibold mb-0.5">النظافة التأهيلية</div>
                  <div className="text-xl font-bold text-white">تبدأ من 229 ريال</div>
                </div>
              </div>
              
              <div className="bg-[#48C2C1]/10 hover:bg-[#48C2C1]/15 border border-[#48C2C1]/25 hover:border-[#48C2C1]/40 rounded-2xl p-4 flex items-center grow gap-3.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center shrink-0 shadow-md">
                  <Gem className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[12px] text-white/60 font-semibold mb-0.5">غسيل الكنب والسجاد</div>
                  <div className="text-xl font-bold text-white">تبدأ من 189 ريال</div>
                </div>
              </div>
              
              <div className="bg-[#48C2C1]/10 hover:bg-[#48C2C1]/15 border border-[#48C2C1]/25 hover:border-[#48C2C1]/40 rounded-2xl p-4 flex items-center grow gap-3.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center shrink-0 shadow-md">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[12px] text-white/60 font-semibold mb-0.5">شاليهات ومساحات كبيرة</div>
                  <div className="text-xl font-bold text-white">سعر خاص ومناسب</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
