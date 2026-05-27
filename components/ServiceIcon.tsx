'use client';

import React from 'react';
import { 
  Home, 
  Building, 
  Building2, 
  Gem, 
  Sparkles, 
  Crown, 
  Briefcase, 
  School,
  Layers,
  Hotel,
  Warehouse,
  Sofa,
  Package,
  Wind,
  ChefHat
} from 'lucide-react';

interface ServiceIconProps {
  id: string;
  className?: string;
}

export default function ServiceIcon({ id, className = "w-6 h-6 text-white" }: ServiceIconProps) {
  switch (id) {
    // النظافة التأهيلية
    case 't1':
      return <Home className={className} />;
    case 't2':
      return <Building className={className} />;
    case 't3':
      return <Building2 className={className} />;
      
    // النظافة الشاملة
    case 's1':
      return <Gem className={className} />;
    case 's2':
      return <Sparkles className={className} />;
    case 's3':
      return <Crown className={className} />;
      
    // تجاري وشركات
    case 'c1':
      return <Briefcase className={className} />;
    case 'c2':
      return <School className={className} />;
      
    // تعقيم وتخصيص
    case 'st1':
      return <Wind className={className} />;
    case 'st2':
      return <ChefHat className={className} />;
      
    default:
      return <Sparkles className={className} />;
  }
}

interface UnitIconProps {
  unitName: string;
  className?: string;
}

export function UnitIcon({ unitName, className = "w-5 h-5 text-[#3476A8]" }: UnitIconProps) {
  const name = unitName || '';
  if (name.includes('مكيف')) {
    return <Wind className={className} />;
  }
  if (name.includes('مطبخ')) {
    return <ChefHat className={className} />;
  }
  if (name.includes('صغيرة') && name.includes('شقة')) {
    return <Home className={className} />;
  }
  if (name.includes('كبيرة') && name.includes('شقة')) {
    return <Building className={className} />;
  }
  if (name.includes('دور') || name.includes('مستقل')) {
    return <Layers className={className} />;
  }
  if (name.includes('صغيرة') && name.includes('فلة')) {
    return <Hotel className={className} />;
  }
  if (name.includes('كبيرة') && name.includes('فلة')) {
    return <Warehouse className={className} />;
  }
  if (name.includes('عرض') || name.includes('متكامل') || name.includes('سجاد')) {
    return <Package className={className} />;
  }
  if (name.includes('كنب')) {
    return <Sofa className={className} />;
  }
  return <Home className={className} />;
}
