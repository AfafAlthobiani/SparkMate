'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, Service } from '@/lib/services';
import ServiceIcon, { UnitIcon } from './ServiceIcon';
import { Info, Building2 } from 'lucide-react';

interface ServicesProps {
  onBook: (service: Service) => void;
}

export default function Services({ onBook }: ServicesProps) {
  const [filter, setFilter] = useState<'all' | 'tahili' | 'shamil' | 'sterilization' | 'commercial'>('all');

  const filteredServices = SERVICES.filter(s => filter === 'all' || s.category === filter);

  const formatPrice = (price: string, serviceId?: string) => {
    if (!price) return '';
    const trimmed = price.trim();
    if (serviceId === 's1' || serviceId === 's2') {
      return trimmed;
    }
    if (trimmed.startsWith('تبدأ') || trimmed.startsWith('يبدأ')) {
      return trimmed;
    }
    return `تبدأ من ${trimmed}`;
  };

  return (
    <section id="services" className="py-24 px-[5%] bg-[#f0f8ff]">
      <div className="text-center mb-16">
        <p className="text-base font-extrabold tracking-[2px] text-[#48C2C1] uppercase mb-3">خدماتنا</p>
        <h2 className="text-4xl md:text-6xl font-black text-[#0d1b2a] mb-5 leading-tight">اختر الخدمة المناسبة لك</h2>
        <p className="text-lg md:text-xl text-[#4f5e71] max-w-2xl mx-auto leading-relaxed">نوفر لك مجموعة متكاملة من خدمات التنظيف الاحترافية التي تلبي جميع احتياجاتك</p>
      </div>

      <div className="flex justify-center gap-2 sm:gap-4 mb-14 flex-wrap">
        {(['all', 'tahili', 'shamil', 'sterilization', 'commercial'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-[17px] font-extrabold cursor-pointer transition-all border-2 ${
              filter === cat 
                ? 'bg-linear-to-br from-[#3476A8] to-[#48C2C1] text-white border-transparent shadow-lg shadow-[#3476A8]/30 scale-105' 
                : 'bg-white text-[#3476A8] border-[#e0f7f7] hover:bg-linear-to-br hover:from-[#3476A8] hover:to-[#48C2C1] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#3476A8]/30 hover:scale-105'
            }`}
          >
            {cat === 'all' 
              ? 'الكل' 
              : cat === 'tahili' 
              ? 'النظافة التأهيلية' 
              : cat === 'shamil' 
              ? 'غسيل الكنب والسجاد' 
              : cat === 'sterilization' 
              ? 'خدمات التعقيم المتخصصة' 
              : 'تجاري وشركات'}
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
              <div className="p-6 pb-4.5 bg-linear-to-br from-[#f0f8ff] to-[#e0f7f7] border-b border-[#dceef9] flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#3476A8] to-[#48C2C1] flex items-center justify-center shrink-0">
                  <ServiceIcon id={service.id} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-[20px] font-black text-[#0d1b2a]">{service.name}</div>
                  <div className="text-[14px] text-[#4f5e71] mt-1">{service.desc}</div>
                </div>
              </div>

              <div className="p-6 pt-5 flex-1 flex flex-col">
                {service.units ? (
                  <div className="space-y-2.5">
                    {service.units.map((u, i) => {
                      if (!u.unit) {
                        return (
                          <div key={i} className="flex justify-center items-center py-3 text-base">
                            <span className="font-black text-[#3476A8] text-[20px]">{formatPrice(u.price, service.id)}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-dashed border-[#e8f4ff] last:border-0 text-base">
                          <div className="flex items-center gap-2">
                            <UnitIcon unitName={u.unit} className="w-4.5 h-4.5 text-[#3476A8]" />
                            <span className="text-[#4f5e71] font-semibold text-[15px]">{u.unit}</span>
                          </div>
                          <span className="font-black text-[#3476A8] text-[18px]">{formatPrice(u.price, service.id)}</span>
                        </div>
                      );
                    })}
                    {(service.id === 's1' || service.id === 's2') && (
                      <div className="text-[12px] text-[#e05638] bg-[#fdf3f2] border border-[#fbdcd9] rounded-lg p-2 font-bold text-center mt-3 flex items-center justify-center gap-1.5 animate-pulse">
                        <Info className="w-3.5 h-3.5 shrink-0 animate-bounce" />
                        <span>الأمتار الزائدة عن العرض تحسب بخصم خاص</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-[#e0f7f7] border border-dashed border-[#48C2C1] rounded-xl p-4 text-[15px] text-[#1a7a7a] font-bold leading-relaxed">
                    {service.specialNote}
                  </div>
                )}
                
                <div className="mt-auto pt-5.5 relative">
                  {service.id === 's1' && (
                    <span id="s1-popular-badge" className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full shadow-md select-none animate-bounce z-10 flex items-center gap-1 border border-orange-400">
                      🔥 الأكثر طلباً ووفراً
                    </span>
                  )}
                  {service.id === 's1' ? (
                    <motion.button 
                      id={`book-btn-${service.id}`}
                      onClick={() => onBook(service)}
                      className="relative flex items-center justify-center gap-2.5 w-full p-4 bg-gradient-to-r from-[#25d366] via-[#20ba56] to-[#128c7e] text-white rounded-full text-base font-extrabold shadow-lg shadow-[#25d366]/40 font-sans cursor-pointer overflow-hidden border border-[#25d366]/50"
                      animate={{
                        boxShadow: [
                          "0 4px 12px rgba(37, 211, 102, 0.3)",
                          "0 8px 25px rgba(37, 211, 102, 0.7)",
                          "0 4px 12px rgba(37, 211, 102, 0.3)"
                        ],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Pulse ring simulating Lottie animation */}
                      <span className="absolute inset-0 rounded-full border-2 border-[#25d366]/60 animate-ping opacity-60 pointer-events-none"></span>
                      
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      {service.units ? 'احجز عبر واتساب' : 'تواصل للحصول على عرض'}
                    </motion.button>
                  ) : (
                    <button 
                      id={`book-btn-${service.id}`}
                      onClick={() => onBook(service)}
                      className="flex items-center justify-center gap-2.5 w-full p-4 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white rounded-full text-base font-extrabold shadow-md hover:scale-[1.03] hover:shadow-xl hover:shadow-[#25d366]/40 transition-all font-sans cursor-pointer animate-none"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      {service.units ? 'احجز عبر واتساب' : 'تواصل للحصول على عرض'}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Saudi Supervision & Pricing Notice Banner */}
      <div className="mt-16 max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-9 border-2 border-[#e0f7f7] shadow-[0_12px_30px_-5px_rgba(52,118,168,0.08)] text-right relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2.5 h-full bg-gradient-to-b from-[#3476A8] to-[#48C2C1]" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-dashed border-[#e0f7f7]">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇸🇦</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1b2a]">بإشراف شاب سعودي 🫡</h3>
              <p className="text-sm font-bold text-[#1a7a7a] mt-0.5">بخدمتكم في جميع أعمال التنظيف والمتابعة المباشرة لضمان أعلى جودة.</p>
            </div>
          </div>
          <span className="bg-[#48C2C1]/10 text-[#1a7a7a] text-sm font-black px-4 py-2 rounded-xl border border-[#48C2C1]/30 shrink-0 self-start md:self-auto">
            الأسعار لفترة محدودة ⏱️
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4f5e71] text-sm sm:text-base leading-relaxed font-bold">
          <div className="space-y-3">
            <h4 className="text-[#3476A8] font-black text-[15px] sm:text-[16px] flex items-center gap-2">
              <Info className="w-5 h-5 text-[#3476A8] shrink-0" />
              <span>ملاحظة هامة بشأن تسعير الخدمات:</span>
            </h4>
            <ul className="space-y-2 pr-2.5">
              <li className="flex items-start gap-2 text-xs sm:text-[14px]">
                <span className="text-[#48C2C1] mt-1 shrink-0">✔</span>
                <span>الأسعار أعلاه تختلف حسب الحجم والمساحة، ويتم احتساب السعر النهائي بعد المعاينة الميدانية لضمان الدقة والنزاهة.</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-[14px]">
                <span className="text-[#48C2C1] mt-1 shrink-0">✔</span>
                <span>لأعمال غسيل الكنب والسجاد: الأمتار الزائدة عن عرض العرض الأساسي تحسب بدقة وبخصم خاص ومميز جداً لرضاكم.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[#3476A8] font-black text-[15px] sm:text-[16px] flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#3476A8] shrink-0" />
              <span>المساحات التجارية الكبرى الخاصّة:</span>
            </h4>
            <p className="text-xs sm:text-[14px] leading-relaxed pr-2.5">
              في حال وجود مساحات أكبر مثل <strong>المحلات التجارية، والمدارس، والنوادي، والمكاتب، والشاليهات</strong>، يرجى التواصل المباشر معنا لتزويدكم بالسعر المميز الذي يناسب احتياجاتكم بدقة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
