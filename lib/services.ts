export type ServiceUnit = {
  unit: string;
  price: string;
};

export type Service = {
  id: string;
  category: 'tahili' | 'shamil' | 'commercial';
  icon: string;
  name: string;
  desc: string;
  units?: ServiceUnit[];
  specialNote?: string;
};

export const SERVICES: Service[] = [
  {
    id: 't1',
    category: 'tahili',
    icon: '🏠',
    name: 'نظافة تأهيلية',
    desc: 'شقة صغيرة',
    units: [{ unit: 'غرفتين وصالة', price: '229 ريال' }]
  },
  {
    id: 't2',
    category: 'tahili',
    icon: '🏡',
    name: 'نظافة تأهيلية',
    desc: 'شقة كبيرة',
    units: [{ unit: '4 غرف وصالة', price: '419 ريال' }]
  },
  {
    id: 't3',
    category: 'tahili',
    icon: '🏘️',
    name: 'نظافة تأهيلية',
    desc: 'دور مستقل وفلل',
    units: [
      { unit: 'دور مستقل', price: 'من 500 ريال' },
      { unit: 'فلة صغيرة (حتى 300م)', price: 'من 819 ريال' },
      { unit: 'فلة كبيرة (+400م)', price: 'من 1,119 ريال' }
    ]
  },
  {
    id: 's1',
    category: 'shamil',
    icon: '💎',
    name: 'نظافة شاملة',
    desc: 'شقة صغيرة',
    units: [{ unit: 'غرفتين وصالة', price: '329 ريال' }]
  },
  {
    id: 's2',
    category: 'shamil',
    icon: '🌟',
    name: 'نظافة شاملة',
    desc: 'شقة كبيرة',
    units: [{ unit: '4 غرف وصالة', price: '579 ريال' }]
  },
  {
    id: 's3',
    category: 'shamil',
    icon: '👑',
    name: 'نظافة شاملة',
    desc: 'دور مستقل وفلل',
    units: [
      { unit: 'دور مستقل', price: 'من 749 ريال' },
      { unit: 'فلة صغيرة (حتى 300م)', price: 'من 1,119 ريال' },
      { unit: 'فلة كبيرة (+400م)', price: 'من 1,449 ريال' }
    ]
  },
  {
    id: 'c1',
    category: 'commercial',
    icon: '🏢',
    name: 'مكاتب وشركات',
    desc: 'بيئة عمل نظيفة دائماً',
    specialNote: 'تواصل معنا للحصول على عرض مخصص يناسب احتياجاتك. السعر يختلف حسب المساحة.'
  },
  {
    id: 'c2',
    category: 'commercial',
    icon: '🏫',
    name: 'مدارس وقاعات',
    desc: 'محلات، نوادي، شاليهات',
    specialNote: 'تواصل معنا للحصول على عرض مخصص يناسب احتياجاتك. السعر يختلف حسب المساحة.'
  }
];
