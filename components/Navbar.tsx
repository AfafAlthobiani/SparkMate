'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  showPromo?: boolean;
}

export default function Navbar({ showPromo = false }: NavbarProps) {
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
    <nav className={`fixed ${showPromo ? 'top-10 sm:top-11' : 'top-0'} right-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#e0f7f7] flex items-center justify-between px-[5%] h-18 shadow-sm transition-all duration-300`}>
      <div className="flex items-center gap-2.5">
        {!hasError ? (
          <Image 
            src={logoSrc} 
            alt="رفيق اللمعة" 
            width={180} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain"
            onError={handleLogoError}
            priority
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex items-center gap-1 select-none">
            <span className="text-[#0d1b2a] font-black text-xl tracking-tight">
              رفيق <span className="text-[#48C2C1]">اللمعة</span>
            </span>
          </div>
        )}
      </div>
      
      <ul className="hidden md:flex gap-7 list-none">
        <li>
          <a href="#services" className="text-[15px] font-medium text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-[#48C2C1] hover:after:w-full after:transition-all">خدماتنا</a>
        </li>
        <li>
          <a href="#how" className="text-[15px] font-medium text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-[#48C2C1] hover:after:w-full after:transition-all">طريقة الحجز</a>
        </li>
        <li>
          <a href="#why" className="text-[15px] font-medium text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-[#48C2C1] hover:after:w-full after:transition-all">لماذا نحن؟</a>
        </li>
        <li>
          <a href="#blog" className="text-[15px] font-medium text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-[#48C2C1] hover:after:w-full after:transition-all">المدونة</a>
        </li>
        <li>
          <a href="#reviews" className="text-[15px] font-medium text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-[#48C2C1] hover:after:w-full after:transition-all">آراء العملاء</a>
        </li>
        <li>
          <a href="#contact" className="text-[15px] font-medium text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-[#48C2C1] hover:after:w-full after:transition-all">تواصل معنا</a>
        </li>
      </ul>

      <a 
        href="https://wa.me/966559205714?text=مرحباً، أريد الاستفسار عن خدمات رفيق اللمعة" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-[#48C2C1] to-[#3476A8] text-white px-5 py-2.5 rounded-full text-[15px] font-bold shadow-lg shadow-[#48C2C1]/35 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#48C2C1]/50 transition-all text-center no-underline"
      >
        حجز الخدمة
      </a>
    </nav>
  );
}
