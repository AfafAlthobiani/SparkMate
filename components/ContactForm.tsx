'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'نظافة تأهيلية'
  });

  const services = [
    'نظافة تأهيلية',
    'نظافة شاملة',
    'تنظيف مكاتب',
    'تنظيف شاليهات',
    'تنظيف مدارس',
    'أخرى'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً، أرغب فيطلب خدمة:%0A- الاسم: ${formData.name}%0A- رقم الهاتف: ${formData.phone}%0A- نوع الخدمة: ${formData.service}`;
    const whatsappUrl = `https://wa.me/966559205714?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/10">
      <h4 className="text-white font-bold mb-4 text-sm">أرسل لنا طلبك مباشرة</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="الاسم"
            required
            className="w-full bg-[#0d1b2a] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#48C2C1] transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="رقم الهاتف"
            required
            className="w-full bg-[#0d1b2a] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#48C2C1] transition-colors font-sans text-right"
            dir="ltr"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <select
            className="w-full bg-[#0d1b2a] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#48C2C1] transition-colors appearance-none"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#48C2C1] text-[#0d1b2a] font-bold py-2 rounded-lg text-sm hover:bg-[#3bb1b0] transition-colors"
        >
          إرسال عبر واتساب
        </button>
      </form>
    </div>
  );
}
