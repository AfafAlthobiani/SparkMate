'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, Coins, Clock, Sparkle, ShieldCheck, Trophy } from 'lucide-react';

const FEATURES = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'فريق محترف ومدرّب',
    text: 'كل أفراد فريقنا مدرّبون على أعلى مستوى من الاحترافية والدقة في العمل'
  },
  {
    icon: <Coins className="w-6 h-6 text-white" />,
    title: 'أسعار واضحة وشفافة',
    text: 'بدون رسوم خفية أو مفاجآت، ويتم تحديد السعر النهائي حسب نوع الخدمة ومساحة الموقع.'
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: 'التزام بالمواعيد',
    text: 'نحترم وقتك ونصل في الموعد المحدد بدون أي تأخير'
  },
  {
    icon: <Sparkle className="w-6 h-6 text-white" />,
    title: 'منتجات تنظيف آمنة',
    text: 'نستخدم منتجات تنظيف عالية الجودة وآمنة لجميع أفراد العائلة'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: 'خصوصية وأمانة',
    text: 'فريقنا موثوق وأمين، ممتلكاتك في أمان تامة خلال تقديم الخدمة'
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: 'ضمان الرضا',
    text: 'نضمن رضاك التام عن الخدمة، وإلا نعيد الكرّة حتى تكون راضياً 100%'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 px-[5%] bg-white">
      <div className="text-center mb-16">
        <p className="text-base font-extrabold tracking-[2px] text-[#48C2C1] uppercase mb-3">لماذا نحن؟</p>
        <h2 className="text-4xl md:text-6xl font-black text-[#0d1b2a] mb-5 leading-tight">مميزات تخليك تختارنا دايماً</h2>
        <p className="text-lg md:text-xl text-[#4f5e71] max-w-2xl mx-auto leading-relaxed">نؤمن أن النظافة ليست مجرد خدمة، بل تجربة متكاملة تستحق الثقة</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5 max-w-6xl mx-auto">
        {FEATURES.map((feat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-[20px] p-7 bg-[#f0f8ff] border border-[#dceef9] hover:bg-linear-to-br hover:from-[#dceef9] hover:to-[#e0f7f7] hover:border-[#48C2C1] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#48C2C1]/10 transition-all flex gap-4.5 items-start"
          >
            <div className="w-13 h-13 rounded-2xl shrink-0 bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center shadow-sm">
              {feat.icon}
            </div>
            <div>
              <h4 className="text-xl font-black text-[#0d1b2a] mb-2">{feat.title}</h4>
              <p className="text-base text-[#4f5e71] leading-relaxed">{feat.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
