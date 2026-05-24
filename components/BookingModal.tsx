'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service, ServiceUnit } from '@/lib/services';

interface BookingModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function BookingModal({ service, onClose }: BookingModalProps) {
  const [selectedUnit, setSelectedUnit] = useState<ServiceUnit | null>(
    service?.units && service.units.length === 1 ? service.units[0] : null
  );

  if (!service) return null;

  const handleWhatsApp = () => {
    if (!selectedUnit && service.units) return;

    const unitInfo = selectedUnit ? `\n🏠 النوع: ${selectedUnit.unit}\n💰 السعر: ${selectedUnit.price}` : '';
    const msg = encodeURIComponent(`مرحباً رفيق اللمعة 👋\n\nأريد حجز خدمة:\n📋 ${service.name} - ${service.desc}${unitInfo}\n\nأرجو التواصل لتأكيد الموعد 🙏`);
    window.open(`https://wa.me/966559205714?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/55 backdrop-blur-sm flex items-center justify-center p-5"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-[28px] p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-black text-[#0d1b2a]">احجز خدمتك 🧹</h3>
            <button 
              onClick={onClose}
              className="bg-[#f0f8ff] border-0 w-9 h-9 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#e0f7f7] transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="bg-linear-to-br from-[#dceef9] to-[#e0f7f7] border border-[#48C2C1] rounded-2xl p-3.5 px-4.5 text-base font-bold text-[#3476A8] mb-5 flex items-center gap-2.5">
            <span className="text-xl">{service.icon}</span>
            <span>{service.name} – {service.desc}</span>
          </div>

          <p className="text-sm text-[#6b7a8d] mb-4">اختر نوع الوحدة ثم اضغط لإرسال الطلب عبر واتساب:</p>

          <div className="mb-6">
            {service.units ? (
              <div className="space-y-3">
                {service.units.map((u, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedUnit(u)}
                    className={`flex justify-between items-center p-3 px-4 border rounded-xl cursor-pointer transition-all ${
                      selectedUnit?.unit === u.unit
                        ? 'bg-[#e0f7f7] border-[#48C2C1] ring-1 ring-[#48C2C1]'
                        : 'border-[#e8f4ff] hover:bg-[#f0f8ff]'
                    }`}
                  >
                    <span className="text-[15px] font-semibold text-[#0d1b2a]">🏠 {u.unit}</span>
                    <div className="text-[17px] font-extrabold text-[#3476A8]">
                      {u.price}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#e0f7f7] border border-dashed border-[#48C2C1] rounded-xl p-4 text-[13px] text-[#1a7a7a] font-semibold leading-relaxed">
                {service.specialNote}
              </div>
            )}
          </div>

          <button
            onClick={handleWhatsApp}
            disabled={!!service.units && !selectedUnit}
            className={`flex items-center justify-center gap-2.5 w-full p-4 rounded-full font-sans text-lg font-extrabold text-white transition-all shadow-lg ${
              !!service.units && !selectedUnit
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-linear-to-br from-[#25d366] to-[#128c7e] hover:scale-[1.02] hover:shadow-[#25d366]/40'
            }`}
          >
            احجز الآن عبر واتساب
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
