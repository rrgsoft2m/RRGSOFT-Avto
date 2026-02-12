import { LinkItem, SiteConfig } from './types';

export const DEFAULT_CONFIG: SiteConfig = {
  companyName: "RRGSOFT",
  tagline: "RRGSOFT Bilan Kelajak Sari",
  subtitle: "Avtomobil sanoatida innovatsiya va mukammallik.",
  logoUrl: null, // Will default to text if null
  socials: {}
};

export const DEFAULT_LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'Rasmiy Veb-sayt',
    url: 'https://rrgsoft.uz',
    icon: 'Globe',
    active: true
  },
  {
    id: '2',
    title: 'Yangi Modellar',
    url: 'https://emaktab.uz',
    icon: 'Car',
    active: true
  },
  {
    id: '3',
    title: 'Test Drayvga Yozilish',
    url: 'https://erp.maktab.uz',
    icon: 'Calendar',
    active: true
  },
  {
    id: '4',
    title: "Qo'llab-quvvatlash",
    url: 'tel:+998910011494',
    icon: 'Phone',
    active: true
  },
  {
    id: '5',
    title: 'Telegram Kanalimiz',
    url: 'https://t.me/rrgfcoder',
    icon: 'Send',
    active: true
  }
];

export const AVAILABLE_ICONS = [
  'Globe', 'Car', 'Calendar', 'MapPin', 'Phone', 'Instagram', 'Facebook', 'Send', 'Linkedin', 'ExternalLink'
];