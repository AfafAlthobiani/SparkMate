'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const [logoSrc, setLogoSrc] = useState('/images/logo.png');
  const [hasError, setHasError] = useState(false);

  const handleLogoError = () => {
    if (logoSrc === '/images/logo.png') {
      setLogoSrc('/logo.png');
    } else {
      setHasError(true);
    }
  };

  return (
    <footer id="contact" className="bg-[#0d1b2a] text-white/75 pt-15 px-[5%] pb-7.5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mb-12">
        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-1 bg-white px-4 py-2 rounded-xl w-44 shadow-md select-none">
            {!hasError ? (
              <Image 
                src={logoSrc} 
                alt="رفيق اللمعة" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain"
                onError={handleLogoError}
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-[#0d1b2a] font-bold text-base tracking-tight">
                رفيق <span className="text-[#48C2C1]">اللمعة</span>
              </span>
            )}
          </div>
          <p className="text-[13px] text-white/50 leading-relaxed my-4">رفيقك في النظافة واللمعان<br />نخدم المدينة المنورة وضواحيها بكل احتراف وأمانة</p>
          <div className="flex gap-2.5">
            <a href="https://www.facebook.com/profile.php?id=61590314567967" target="_blank" rel="noopener noreferrer" className="w-9.5 h-9.5 rounded-full bg-white/8 flex items-center justify-center text-lg hover:bg-[#48C2C1] hover:scale-110 transition-all text-white">
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a href="https://www.instagram.com/sparkmate.sa" target="_blank" className="w-9.5 h-9.5 rounded-full bg-white/8 flex items-center justify-center text-lg hover:bg-[#48C2C1] hover:scale-110 transition-all text-white">
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
            <a href="https://www.tiktok.com/@sparkmate.sa" target="_blank" className="w-9.5 h-9.5 rounded-full bg-white/8 flex items-center justify-center text-lg hover:bg-[#48C2C1] hover:scale-110 transition-all text-white">
              <i className="fa-brands fa-tiktok text-sm"></i>
            </a>
            <a href="https://wa.me/966559205714" target="_blank" className="w-9.5 h-9.5 rounded-full bg-white/8 flex items-center justify-center text-lg hover:bg-[#48C2C1] hover:scale-110 transition-all text-white">
              <i className="fa-brands fa-whatsapp text-sm"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[15px] font-bold text-white mb-4.5 pb-2.5 border-b-2 border-[#48C2C1]/30">خدماتنا</h4>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><a href="#services" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">النظافة التأهيلية</a></li>
            <li><a href="#services" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">النظافة الشاملة</a></li>
            <li><a href="#services" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">تنظيف المكاتب</a></li>
            <li><a href="#services" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">تنظيف الشاليهات</a></li>
            <li><a href="#services" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">تنظيف المدارس</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] font-bold text-white mb-4.5 pb-2.5 border-b-2 border-[#48C2C1]/30">روابط سريعة</h4>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><a href="#hero" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">الرئيسية</a></li>
            <li><a href="#how" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">طريقة الحجز</a></li>
            <li><a href="#why" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">لماذا نحن؟</a></li>
            <li><a href="#reviews" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">آراء العملاء</a></li>
            <li><a href="#services" className="text-white/60 hover:text-[#48C2C1] transition-colors text-sm">احجز الآن</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] font-bold text-white mb-4.5 pb-2.5 border-b-2 border-[#48C2C1]/30">تواصل معنا</h4>
          <div className="space-y-3.5">
            <div className="flex gap-2.5 items-center text-sm">
              <MapPin className="w-4.5 h-4.5 text-[#48C2C1] shrink-0" />
              <p>المدينة المنورة، المملكة العربية السعودية</p>
            </div>
            <div className="flex gap-2.5 items-center text-sm">
              <Phone className="w-4.5 h-4.5 text-[#48C2C1] shrink-0" />
              <p className="font-sans">0559205714</p>
            </div>
            <div className="flex gap-2.5 items-center text-sm">
              <MessageCircle className="w-4.5 h-4.5 text-[#48C2C1] shrink-0" />
              <p>واتساب متاح 24/7</p>
            </div>
            <div className="flex gap-2.5 items-center text-sm">
              <Mail className="w-4.5 h-4.5 text-[#48C2C1] shrink-0" />
              <p className="font-sans">info@sparkmate.sa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 pt-6 text-center text-[13px] text-white/35 max-w-6xl mx-auto">
        <p>© 2025 رفيق اللمعة | SparkMate — جميع الحقوق محفوظة | المدينة المنورة، المملكة العربية السعودية 🇸🇦</p>
      </div>
    </footer>
  );
}
