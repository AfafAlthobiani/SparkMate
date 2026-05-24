'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, Service } from '@/lib/services';

interface ServicesProps {
  onBook: (service: Service) => void;
}

export default function Services({ onBook }: ServicesProps) {
  const [filter, setFilter] = useState<'all' | 'tahili' | 'shamil' | 'commercial'>('all');

  const filteredServices = SERVICES.filter(s => filter === 'all' || s.category === filter);

  return (
    <section id="services" className="py-24 px-[5%] bg-[#f0f8ff]">
      <div className="text-center mb-14">
        <p className="text-sm font-bold tracking-[2px] text-[#48C2C1] uppercase mb-3">خدماتنا</p>
        <h2 className="text-3xl md:text-5xl font-black text-[#0d1b2a] mb-3 leading-tight">اختر الخدمة المناسبة لك</h2>
        <p className="text-base text-[#6b7a8d] max-w-(--size-xl) mx-auto leading-relaxed">نوفر لك مجموعة متكاملة من خدمات التنظيف الاحترافية التي تلبي جميع احتياجاتك</p>
      </div>

      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {(['all', 'tahili', 'shamil', 'commercial'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6.5 py-2.5 rounded-full text-[15px] font-bold cursor-pointer transition-all border-2 ${
              filter === cat 
                ? 'bg-linear-to-br from-[#3476A8] to-[#48C2C1] text-white border-transparent shadow-lg shadow-[#3476A8]/30' 
                : 'bg-white text-[#3476A8] border-[#e0f7f7] hover:bg-linear-to-br hover:from-[#3476A8] hover:to-[#48C2C1] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#3476A8]/30'
            }`}
          >
            {cat === 'all' ? 'الكل' : cat === 'tahili' ? 'النظافة التأهيلية' : cat === 'shamil' ? 'النظافة الشاملة' : 'تجاري وشركات'}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5.5 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[22px] overflow-hidden border border-[#e8f4ff] shadow-[0_4px_18px_rgba(52,118,168,0.07)] hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(52,118,168,0.15)] transition-all cursor-pointer flex flex-col group"
            >
              <div className="p-5.5 pb-4 bg-linear-to-br from-[#f0f8ff] to-[#e0f7f7] border-b border-[#dceef9] flex items-center gap-3">
                <div className="w-11.5 h-11.5 rounded-xl bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center text-xl shrink-0">
                  {service.icon}
                </div>
                <div>
                  <div className="text-[17px] font-extrabold text-[#0d1b2a]">{service.name}</div>
                  <div className="text-[12px] text-[#6b7a8d] mt-1">{service.desc}</div>
                </div>
              </div>

              <div className="p-5.5 pt-4.5 flex-1 flex flex-col">
                {service.units ? (
                  <div className="space-y-2">
                    {service.units.map((u, i) => (
                      <div key={i} className="flex justify-between items-center py-2.5 border-b border-dashed border-[#e8f4ff] last:border-0 text-sm">
                        <span className="text-[#6b7a8d] font-medium">{u.unit}</span>
                        <span className="font-extrabold text-[#3476A8] text-[15px]">{u.price}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[#e0f7f7] border border-dashed border-[#48C2C1] rounded-xl p-3 text-[13px] text-[#1a7a7a] font-semibold leading-relaxed">
                    {service.specialNote}
                  </div>
                )}
                
                <div className="mt-auto pt-4">
                  <button 
                    onClick={() => onBook(service)}
                    className="flex items-center justify-center gap-2 w-full p-3 bg-linear-to-br from-[#25d366] to-[#128c7e] text-white rounded-full text-sm font-bold shadow-md hover:scale-[1.03] hover:shadow-xl hover:shadow-[#25d366]/40 transition-all font-sans"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    {service.units ? 'احجز عبر واتساب' : 'تواصل للحصول على عرض'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
