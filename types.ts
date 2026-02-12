export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  active: boolean;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  subtitle: string;
  logoUrl: string | null;
  socials: {
    instagram?: string;
    telegram?: string;
    facebook?: string;
    linkedin?: string;
  }
}

export type IconName = 'Globe' | 'Car' | 'Calendar' | 'MapPin' | 'Phone' | 'Instagram' | 'Facebook' | 'Send' | 'Linkedin' | 'ExternalLink';
