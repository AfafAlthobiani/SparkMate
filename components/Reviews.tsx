'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    initial: 'أ',
    name: 'أم عبدالله',
    location: '📍 المدينة المنورة',
    text: '"خدمة ممتازة جداً! الفريق جاء في الوقت المحدد وخلّى البيت يلمع من وجه. سعر معقول ومحترفين كذلك"'
  },
  {
    initial: 'م',
    name: 'محمد العمري',
    location: '📍 العوالي، المدينة المنورة',
    text: '"طلبت نظافة شاملة للفيلا قبل العيد والنتيجة كانت أحسن من توقعاتي. بجد يستاهلون الدعم وراح أكررها"'
  },
  {
    initial: 'ع',
    name: 'عبدالرحمن الزهراني',
    location: '📍 قباء، المدينة المنورة',
    text: '"تعاملت معهم لتنظيف مكتبنا، خدمة احترافية بكل معنى الكلمة. الفريق سريع ودقيق وبدون أي إزعاج للعمل"'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-[5%] bg-[#f0f8ff]">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-1.5 bg-[#48C2C1]/10 text-[#1a7a7a] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-[#48C2C1]/20 mb-4 select-none">
          <Star className="w-3.5 h-3.5 text-[#1a7a7a] fill-[#1a7a7a]" />
          <span>آراء عملائنا الكرام</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1b2a] mb-5 leading-tight">ماذا يقول عملاؤنا؟</h2>
        <p className="text-lg md:text-xl text-[#4f5e71] max-w-2xl mx-auto leading-relaxed">ثقتهم فينا هي أكبر جائزة نحصل عليها</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.5 max-w-6xl mx-auto">
        {REVIEWS.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[22px] p-7 border border-[#e8f4ff] shadow-[0_4px_18px_rgba(52,118,168,0.06)] hover:-translate-y-1.5 transition-all"
          >
            <div className="flex gap-1 mb-3.5" aria-label="تقييم 5 من 5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              ))}
            </div>
            <p className="text-[18px] text-[#0d1b2a] font-medium leading-relaxed mb-6 italic">{review.text}</p>
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center text-xl text-white font-black">
                {review.initial}
              </div>
              <div>
                <div className="text-[17px] font-black text-[#0d1b2a]">{review.name}</div>
                <div className="text-[14px] text-[#4f5e71]">{review.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
