'use client';

import React from 'react';
import { motion } from 'motion/react';
import Bubbles from './Bubbles';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-linear-to-br from-[#0d1b2a] via-[#1a3a5c] to-[#0d2d40] flex items-center overflow-hidden">
      <Bubbles />
      
      <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-32 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-[#48C2C1]/15 border border-[#48C2C1]/40 text-[#48C2C1] px-4.5 py-1.5 rounded-full text-[15px] font-semibold mb-5">
            🌟 الخيار الأول في المدينة المنورة
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-5">
            رفيقك في<br />
            <span className="text-[#48C2C1]">النظافة واللمعان</span>
          </h1>
          
          <p className="text-lg text-white/75 leading-relaxed mb-9">
            نقدم لك خدمات تنظيف احترافية تُعيد لمنزلك بريقه وجماله،<br />
            بأيدي متخصصة وأسعار تناسب الجميع في المدينة المنورة
          </p>
          
          <div className="flex flex-wrap gap-3.5">
            <a 
              href="#services" 
              className="bg-linear-to-br from-[#48C2C1] to-[#2ea8a7] text-white px-8 py-3.5 rounded-full text-base font-bold shadow-2xl shadow-[#48C2C1]/40 hover:-translate-y-1 hover:shadow-[#48C2C1]/55 transition-all inline-flex items-center gap-2"
            >
              احجز خدمتك الآن
            </a>
            <a 
              href="#how" 
              className="bg-transparent text-white px-8 py-3.5 rounded-full text-base font-bold border-2 border-white/30 hover:border-[#48C2C1] hover:text-[#48C2C1] transition-all inline-flex items-center gap-2"
            >
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
          <div className="relative w-85 h-96">
            <div className="absolute inset-0 bg-linear-to-br from-[#3476A8]/30 to-[#48C2C1]/20 border border-[#48C2C1]/25 backdrop-blur-xl rounded-[28px] p-9 flex flex-col gap-4.5">
              <div className="absolute -top-4.5 -left-5 bg-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl text-[13px] font-bold text-[#3476A8] animate-float-slow">
                ⭐ 4.9 تقييم ممتاز
              </div>
              <div className="absolute bottom-7.5 -left-6 bg-white rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl text-[13px] font-bold text-[#48C2C1] animate-float-slow [animation-delay:1.5s]">
                ✅ +10 عميل راضٍ
              </div>
              
              <div className="bg-[#48C2C1]/15 border border-[#48C2C1]/30 rounded-2xl p-4.5 flex items-center grow gap-3.5">
                <div className="text-3xl">🏠</div>
                <div>
                  <div className="text-[12px] text-white/60">نظافة تأهيلية</div>
                  <div className="text-2xl font-extrabold text-white">من 229 ريال</div>
                </div>
              </div>
              
              <div className="bg-[#48C2C1]/15 border border-[#48C2C1]/30 rounded-2xl p-4.5 flex items-center grow gap-3.5">
                <div className="text-3xl">💎</div>
                <div>
                  <div className="text-[12px] text-white/60">نظافة شاملة</div>
                  <div className="text-2xl font-extrabold text-white">من 329 ريال</div>
                </div>
              </div>
              
              <div className="bg-[#48C2C1]/15 border border-[#48C2C1]/30 rounded-2xl p-4.5 flex items-center grow gap-3.5">
                <div className="text-3xl">🏢</div>
                <div>
                  <div className="text-[12px] text-white/60">شركات ومكاتب</div>
                  <div className="text-2xl font-extrabold text-white">سعر خاص</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
