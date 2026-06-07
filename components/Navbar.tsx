'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Calendar, 
  Trophy, 
  BookOpen, 
  Heart, 
  Phone, 
  Menu, 
  X,
  MessageCircle
} from 'lucide-react';

interface NavbarProps {
  showPromo?: boolean;
}

export default function Navbar({ showPromo = false }: NavbarProps) {
  const [logoSrc, setLogoSrc] = useState('/images/logo.png');
  const [hasError, setHasError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoError = () => {
    if (logoSrc === '/images/logo.png') {
      setLogoSrc('/logo.png');
    } else {
      setHasError(true);
    }
  };

  const navItems = [
    { href: '#services', label: 'خدماتنا', icon: <Sparkles className="w-4 h-4" /> },
    { href: '#how', label: 'طريقة الحجز', icon: <Calendar className="w-4 h-4" /> },
    { href: '#why', label: 'لماذا نحن؟', icon: <Trophy className="w-4 h-4" /> },
    { href: '#blog', label: 'المدونة', icon: <BookOpen className="w-4 h-4" /> },
    { href: '#reviews', label: 'آراء العملاء', icon: <Heart className="w-4 h-4" /> },
    { href: '#contact', label: 'تواصل معنا', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav className={`fixed ${showPromo ? 'top-10 sm:top-11' : 'top-0'} right-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#e0f7f7] flex items-center justify-between px-[4%] sm:px-[5%] h-16 sm:h-18 shadow-sm transition-all duration-300`}>
        {/* Right side: Logo */}
        <div className="flex items-center gap-2 shrink-0">
          {!hasError ? (
            <Image 
              src={logoSrc} 
              alt="رفيق اللمعة" 
              width={180} 
              height={60} 
              className="h-8 xs:h-10 md:h-12 w-auto object-contain"
              onError={handleLogoError}
              priority
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex items-center gap-1 select-none">
              <span className="text-[#0d1b2a] font-black text-sm xs:text-lg sm:text-xl tracking-tight">
                رفيق <span className="text-[#48C2C1]">اللمعة</span>
              </span>
            </div>
          )}
        </div>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="flex items-center gap-1.5 text-[14px] lg:text-[15px] font-bold text-[#0d1b2a] hover:text-[#48C2C1] transition-colors relative group py-2"
              >
                <span className="text-[#3476A8] group-hover:text-[#48C2C1] transition-colors">
                  {item.icon}
                </span>
                <span>{item.label}</span>
                <span className="absolute bottom-1 right-0 w-0 h-0.5 bg-[#48C2C1] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="https://wa.me/966559205714?text=مرحباً، أريد الاستفسار عن خدمات رفيق اللمعة" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#48C2C1] to-[#3476A8] text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-[15px] font-bold shadow-lg shadow-[#48C2C1]/35 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#48C2C1]/50 transition-all text-center no-underline shrink-0 flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white" />
            <span>حجز الخدمة</span>
          </a>

          {/* Hamburger Menu Toggle for Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-[#e0f7f7] bg-[#f0f8ff] text-[#3476A8] hover:bg-[#48C2C1]/10 hover:text-[#48C2C1] transition-all cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation with backdrop filter */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black md:hidden"
            />

            {/* Content drawer */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed ${showPromo ? 'top-[88px] sm:top-[96px]' : 'top-16 sm:top-18'} right-0 left-0 z-40 bg-white/98 backdrop-blur-lg md:hidden border-b-2 border-[#e0f7f7] shadow-xl px-[5%] py-6`}
            >
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-bold text-gray-400 select-none border-b border-[#f0f8ff] pb-2">
                  تصفح أقسام رفيق اللمعة بالمدينة المنورة 👇
                </span>
                
                <div className="grid grid-cols-2 gap-3.5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f0f8ff] border border-[#e8f4ff] hover:border-[#ccdffa] text-[#0d1b2a] hover:text-[#48C2C1] font-bold text-sm transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#e0f7f7] text-[#3476A8] flex items-center justify-center shadow-xs">
                        {item.icon}
                      </div>
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </div>

                {/* Additional Quick Contact for mobile users */}
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#f6fdfd] to-[#f0f8ff] border border-[#e0f7f7] text-center flex flex-col items-center gap-2">
                  <span className="text-xs text-[#4f5e71] font-medium">نحن متواجدون لخدمتكم على مدار الساعة</span>
                  <a 
                    href="tel:+966559205714"
                    className="flex items-center gap-2 text-sm font-black text-[#3476A8] hover:text-[#48C2C1] transition-colors"
                  >
                    <Phone className="w-4 h-4 animate-bounce" />
                    <span>0559205714</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
