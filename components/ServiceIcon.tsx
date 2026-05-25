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
  School 
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
      
    default:
      return <Sparkles className={className} />;
  }
}
