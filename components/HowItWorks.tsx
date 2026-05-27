'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import Bubbles from './Bubbles';

const STEPS = [
  {
    num: 1,
    title: 'اختر خدمتك',
    text: 'تصفح قائمة خدماتنا واختر الخدمة اللي تناسب احتياجك، مع الاطلاع على الأسعار بكل شفافية'
  },
  {
    num: 2,
    title: 'أرسل عبر واتساب',
    text: 'بضغطة زر واحدة تنتقل مباشرة للواتساب مع تفاصيل الخدمة جاهزة، وتحدد الوقت المناسب لك'
  },
  {
    num: 3,
    title: 'استقبل الفريق واسترح',
    text: 'يصلك فريقنا المتخصص في الوقت المحدد، ويشتغل بأعلى مستوى من الدقة والاحترافية'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 px-[5%] bg-linear-to-br from-[#0d1b2a] via-[#1a3a5c] to-[#0d1b2a] overflow-hidden">
      <Bubbles />
      
      <div className="relative z-10 text-center mb-16">
        <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#48C2C1] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-[rgba(72,194,193,0.2)] mb-4 select-none">
          <Clock className="w-3.5 h-3.5 text-[#48C2C1]" />
          <span>سهولة وسرعة الحجز</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">3 خطوات بس وخلصنا!</h2>
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">حجز خدمتك أسهل من أي وقت، بدون تعقيد ولا انتظار</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto before:hidden md:before:block before:absolute before:top-14 before:inset-x-[15%] before:h-0.5 before:bg-linear-to-l before:from-[#48C2C1] before:to-[#3476A8] before:z-0">
        {STEPS.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 border border-[#48C2C1]/20 rounded-3xl p-8.5 text-center relative z-10 backdrop-blur-md hover:-translate-y-2 transition-transform"
          >
            <div className="w-13.5 h-13.5 rounded-full bg-linear-to-br from-[#48C2C1] to-[#3476A8] flex items-center justify-center text-2xl font-black text-white mx-auto mb-5 shadow-[0_0_0_8px_rgba(72,194,193,0.15)]">
              {step.num}
            </div>
            <h3 className="text-2xl font-black text-white mb-3.5">{step.title}</h3>
            <p className="text-base text-white/75 leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
