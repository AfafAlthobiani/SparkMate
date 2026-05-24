'use client';

import React from 'react';
import { motion } from 'motion/react';

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
        <p className="text-sm font-bold tracking-[2px] text-[#48C2C1] uppercase mb-3">آراء العملاء</p>
        <h2 className="text-3xl md:text-5xl font-black text-[#0d1b2a] mb-3 leading-tight">ماذا يقول عملاؤنا؟</h2>
        <p className="text-base text-[#6b7a8d] max-w-xl mx-auto leading-relaxed">ثقتهم فينا هي أكبر جائزة نحصل عليها</p>
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
            <div className="text-[#fbbf24] text-lg mb-3.5">★★★★★</div>
            <p className="text-[15px] text-[#0d1b2a] leading-relaxed mb-5 italic">{review.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center text-lg text-white font-black">
                {review.initial}
              </div>
              <div>
                <div className="text-[15px] font-bold text-[#0d1b2a]">{review.name}</div>
                <div className="text-[12px] text-[#6b7a8d]">{review.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
