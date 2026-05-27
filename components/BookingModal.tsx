'use client';

import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service, ServiceUnit } from '@/lib/services';
import ServiceIcon, { UnitIcon } from './ServiceIcon';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, FileText, Sparkles, Check, ChevronRight, X, MapPin, Hash, Shield, Sunrise, Sun, Moon } from 'lucide-react';

interface BookingModalProps {
  service: Service | null;
  onClose: () => void;
}

const TIME_SLOTS = [
  { id: 'morning', label: 'الفترة الصباحية', time: '9:00 ص - 1:00 م' },
  { id: 'afternoon', label: 'الفترة المسائية', time: '1:00 م - 5:00 م' },
  { id: 'evening', label: 'الفترة المسائية المتأخرة', time: '5:00 م - 9:00 م' }
];

function getTimeSlotIcon(id: string, className = "w-5 h-5") {
  switch (id) {
    case 'morning':
      return <Sunrise className={`${className} text-amber-500`} />;
    case 'afternoon':
      return <Sun className={`${className} text-orange-400`} />;
    case 'evening':
      return <Moon className={`${className} text-indigo-500`} />;
    default:
      return <Clock className={className} />;
  }
}

// Custom datepicker input component to match theme and fit RTL perfectly
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}

const CustomDateInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="w-full flex items-center justify-between px-4 py-3 bg-[#f0f8ff] hover:bg-[#e0f7f7] border-2 border-[#e0f7f7] rounded-xl text-[#0d1b2a] font-bold text-right transition-all cursor-pointer focus:border-[#48C2C1] outline-none select-none"
    >
      <div className="flex items-center gap-2.5">
        <Calendar className="w-5 h-5 text-[#3476A8]" />
        <span className="text-[15px]">{value || 'اختر تاريخ الخدمة...'}</span>
      </div>
      <span className="text-xs text-[#3476A8] hover:text-[#48C2C1] transition-colors font-extrabold bg-white px-2.5 py-1 rounded-lg border border-[#e0f7f7]">
        تعديل
      </span>
    </button>
  )
);
CustomDateInput.displayName = 'CustomDateInput';

export default function BookingModal({ service, onClose }: BookingModalProps) {
  // Setup default date to tomorrow
  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  };

  const [selectedUnit, setSelectedUnit] = useState<ServiceUnit | null>(
    service?.units && service.units.length === 1 ? service.units[0] : null
  );
  const [startDate, setStartDate] = useState<Date>(getTomorrow());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('morning');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [approximateSize, setApproximateSize] = useState<string>('');

  const formatPrice = (price: string) => {
    if (!price) return '';
    const trimmed = price.trim();
    if (service?.id === 's1' || service?.id === 's2') {
      return trimmed;
    }
    if (trimmed.startsWith('تبدأ') || trimmed.startsWith('يبدأ')) {
      return trimmed;
    }
    return `تبدأ من ${trimmed}`;
  };

  if (!service) return null;

  const currentSlot = TIME_SLOTS.find(slot => slot.id === selectedTimeSlot) || TIME_SLOTS[0];

  const formattedDateArabic = startDate.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleWhatsApp = () => {
    if (!selectedUnit && service.units) return;

    const unitInfo = selectedUnit 
      ? (selectedUnit.unit ? `${selectedUnit.unit} (${selectedUnit.price})` : selectedUnit.price)
      : 'سيتم تحديد السعر لاحقاً المعاينة';

    const districtVal = district.trim() ? district : 'لم يتم تحديده بعد';
    const sizeVal = approximateSize.trim() ? approximateSize : 'لم يتم تحديدها بعد';
    const notesInfo = customerNotes.trim() ? `\n\n✍️ ملاحظات إضافية: ${customerNotes}` : '';

    const msg = encodeURIComponent(
      `مرحباً رفيق اللمعة 👋\n` +
      `أريد تقديم طلب حجز خدمة تنظيف سريعة:\n\n` +
      `لإتمام الحجز وخدمتي بشكل أسرع، إليك البيانات التالية لخدمتكم الموثوقة:\n` +
      `1️⃣ الحي: ${districtVal}\n` +
      `2️⃣ نوع الخدمة المطلوبة: ${service.name} [${unitInfo}]\n` +
      `3️⃣ عدد القطع أو المساحة التقريبية: ${sizeVal}\n` +
      `4️⃣ الوقت أو اليوم المناسب لك: ${formattedDateArabic} - ${currentSlot.label} (${currentSlot.time})${notesInfo}\n\n` +
      `الأسعار لفترة محدودة، وبإذن الله نتطلع لتأكيد السعر وموعد الزيارة تحت إشراف طاقم سعودي 🇸🇦`
    );

    window.open(`https://wa.me/966559205714?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-5 text-right"
        onClick={onClose}
        dir="rtl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-[28px] p-6 sm:p-9 max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-5 left-5 bg-[#f0f8ff] border-0 w-9 h-9 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#e0f7f7] transition-colors text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-6 flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-[#48C2C1] animate-pulse" />
            <h3 className="text-2xl font-black text-[#0d1b2a]">تخصيص وحجز موعدك</h3>
          </div>

          {/* Selected Service Badge */}
          <div className="bg-gradient-to-r from-[#f0f8ff] to-[#e0f7f7] border border-[#dceef9] rounded-2xl p-4 text-[#3476A8] mb-6 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs border border-[#e0f7f7] shrink-0">
              <ServiceIcon id={service.id} className="w-5 h-5 text-[#3476A8]" />
            </div>
            <div>
              <h4 className="font-extrabold text-[17px] text-[#0d1b2a]">{service.name}</h4>
              <p className="text-xs text-[#5c6e84] mt-0.5">{service.desc}</p>
            </div>
          </div>

          {/* STEP 1: Select Type/Unit (if applicable) */}
          {service.units && service.units.some(u => u.unit) && (
            <div className="mb-6">
              <label className="block text-sm font-black text-[#0d1b2a] mb-3">
                ١. اختر مساحة الوحدة السكنية:
              </label>
              <div className="space-y-2.5">
                {service.units.map((u, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedUnit(u)}
                    className={`flex justify-between items-center p-3.5 px-4.5 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedUnit?.unit === u.unit
                        ? 'bg-[#e0f7f7]/40 border-[#48C2C1] ring-2 ring-[#48C2C1]/15 scale-[1.01]'
                        : 'border-[#f0f8ff] hover:bg-[#f0f8ff]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <UnitIcon unitName={u.unit} className="w-5 h-5 text-[#3476A8]" />
                      <span className="text-[15px] font-extrabold text-[#0d1b2a]">{u.unit}</span>
                    </div>
                    <div className="text-[16px] font-black text-[#3476A8]">
                      {formatPrice(u.price)}
                    </div>
                  </div>
                ))}
                {(service.id === 's1' || service.id === 's2') && (
                  <div className="text-[13px] text-[#e05638] bg-[#fdf3f2] border border-[#fbdcd9] rounded-lg p-3.5 font-bold text-center mt-3 flex items-center justify-center gap-2 animate-pulse">
                    <Shield className="w-4 h-4 shrink-0 text-[#e05638] animate-bounce" />
                    <span>تنبيه: الأمتار الزائدة عن العرض تحسب بخصم خاص</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: Select Date (React Datepicker) */}
          <div className="mb-6">
            <label className="block text-sm font-black text-[#0d1b2a] mb-2.5">
              {service.units && service.units.some(u => u.unit) ? '٢. اختر التاريخ المفضل للزيارة:' : '١. اختر التاريخ المفضل للزيارة:'}
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => date && setStartDate(date)}
              minDate={new Date()}
              dateFormat="yyyy/MM/dd"
              customInput={<CustomDateInput />}
              popperClassName="modern-datepicker-popper"
              calendarClassName="modern-datepicker-calendar"
            />
          </div>

          {/* STEP 3: Select Time Slot */}
          <div className="mb-6">
            <label className="block text-sm font-black text-[#0d1b2a] mb-3">
              {service.units && service.units.some(u => u.unit) ? '٣. اختر توقيت الزيارة المفضل:' : '٢. اختر توقيت الزيارة المفضل:'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedTimeSlot(slot.id)}
                  className={`flex sm:flex-col items-center sm:justify-center justify-between p-3 border-2 rounded-xl text-right sm:text-center transition-all cursor-pointer ${
                    selectedTimeSlot === slot.id
                      ? 'bg-[#e0f7f7]/40 border-[#48C2C1] ring-2 ring-[#48C2C1]/15'
                      : 'border-[#f0f8ff] hover:bg-[#f0f8ff]'
                  }`}
                >
                  <div className="flex sm:flex-col items-center gap-2">
                    <div className="sm:mb-1">{getTimeSlotIcon(slot.id, "w-6 h-6")}</div>
                    <span className="text-xs font-bold text-[#0d1b2a]">{slot.label}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-sans tracking-wide sm:mt-1 font-bold">
                    {slot.time}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* District & Approximate Size Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-black text-[#0d1b2a] mb-2">
                🏠 الحي السكني بالمدينة المنورة:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="العزيزية، الخالدية، الرانوناء..."
                  className="w-full bg-[#f8fbfe] border-2 border-[#e0f7f7] rounded-xl pr-10 pl-4 py-3 text-sm text-[#0d1b2a] font-bold placeholder-gray-400 focus:outline-none focus:border-[#48C2C1] transition-all text-right"
                  required
                />
                <MapPin className="absolute right-3.5 top-3.5 w-4.5 h-4.5 text-[#3476A8]" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-[#0d1b2a] mb-2">
                📏 عدد القطع أو المساحة التقريبية:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={approximateSize}
                  onChange={(e) => setApproximateSize(e.target.value)}
                  placeholder="مثال: مجلس ٥*٤، كنب متصل، ٣ غرف..."
                  className="w-full bg-[#f8fbfe] border-2 border-[#e0f7f7] rounded-xl pr-10 pl-4 py-3 text-sm text-[#0d1b2a] font-bold placeholder-gray-400 focus:outline-none focus:border-[#48C2C1] transition-all text-right"
                />
                <Hash className="absolute right-3.5 top-3.5 w-4.5 h-4.5 text-[#3476A8]" />
              </div>
            </div>
          </div>

          {/* STEP 4: User Notes */}
          <div className="mb-6">
            <label className="block text-sm font-black text-[#0d1b2a] mb-2.5">
              ملاحظات إضافية أو طلبات خاصة (اختياري):
            </label>
            <div className="relative">
              <textarea
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                placeholder="مثال: يرجى التركيز على زوايا الجدران، أو غسيل سجاد الكنب..."
                rows={2}
                className="w-full bg-[#f8fbfe] border-2 border-[#e0f7f7] rounded-xl pr-10 pl-4 py-3 text-sm text-[#0d1b2a] placeholder-gray-400 focus:outline-none focus:border-[#48C2C1] transition-all resize-none text-right"
              />
              <FileText className="absolute right-3 top-3.5 w-4.5 h-4.5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Real-time Summary Card */}
          <div className="bg-[#f0fcfc] border border-[#c7f0ef] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between text-xs text-[#1a7a7a] font-extrabold mb-2.5 uppercase tracking-wide">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>ملخص حجز الموعد المفضل</span>
              </div>
              <span className="bg-[#48C2C1]/15 text-[#1a7a7a] px-2 py-0.5 rounded-md border border-[#48C2C1]/30">
                بإشراف سعودي 🇸🇦
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div className="text-gray-500">الخدمة المطلوبة:</div>
              <div className="font-bold text-[#0d1b2a]">{service.name}</div>

              {district.trim() && (
                <>
                  <div className="text-gray-500">الحي:</div>
                  <div className="font-bold text-[#0d1b2a]">{district}</div>
                </>
              )}

              {approximateSize.trim() && (
                <>
                  <div className="text-gray-500">المساحة/القطع:</div>
                  <div className="font-bold text-[#0d1b2a]">{approximateSize}</div>
                </>
              )}
              
              {selectedUnit && (
                <>
                  <div className="text-gray-500">تفاصيل الحجم:</div>
                  <div className="font-bold text-[#0d1b2a]">{selectedUnit.unit || service.desc}</div>
                </>
              )}
              
              <div className="text-gray-500">اليوم والموعد:</div>
              <div className="font-bold text-[#1a7a7a]">{formattedDateArabic}</div>
              
              <div className="text-gray-500">الوقت المفضل:</div>
              <div className="font-bold text-[#0d1b2a]">{currentSlot.label} ({currentSlot.time})</div>
              
              <div className="text-gray-500 border-t border-dashed border-[#c7f0ef] pt-2 mt-1">السعر المقدر:</div>
              <div className="font-black text-lg text-[#3476A8] border-t border-dashed border-[#c7f0ef] pt-2 mt-1 flex items-center gap-1.5">
                <span>{selectedUnit ? formatPrice(selectedUnit.price) : 'حسب المساحة'}</span>
                <span className="text-[10px] text-[#3476A8]/70 font-bold bg-[#3476A8]/10 px-1.5 py-0.5 rounded">بعد المعاينة</span>
              </div>
            </div>
          </div>

          {/* Confirm Book CTA */}
          <button
            onClick={handleWhatsApp}
            disabled={!!service.units && !selectedUnit}
            className={`flex items-center justify-center gap-2 w-full p-4 rounded-full font-sans text-base sm:text-lg font-black text-white transition-all shadow-lg ${
              !!service.units && !selectedUnit
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-gradient-to-br from-[#25d366] to-[#128c7e] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#25d366]/30 cursor-pointer'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span>متابعة وتأكيد الموعد عبر واتساب</span>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

