import { LinkItem, SiteConfig } from '../types';
import { DEFAULT_LINKS, DEFAULT_CONFIG } from '../constants';

const LINKS_KEY = 'rrgsoft_links';
const CONFIG_KEY = 'rrgsoft_config';

export const storageService = {
  getLinks: (): LinkItem[] => {
    try {
      const data = localStorage.getItem(LINKS_KEY);
      return data ? JSON.parse(data) : DEFAULT_LINKS;
    } catch (e) {
      console.error("Linklarni yuklashda xatolik:", e);
      return DEFAULT_LINKS;
    }
  },

  saveLinks: (links: LinkItem[]) => {
    localStorage.setItem(LINKS_KEY, JSON.stringify(links));
  },

  getConfig: (): SiteConfig => {
    try {
      const data = localStorage.getItem(CONFIG_KEY);
      return data ? JSON.parse(data) : DEFAULT_CONFIG;
    } catch (e) {
      console.error("Sozlamalarni yuklashda xatolik:", e);
      return DEFAULT_CONFIG;
    }
  },

  saveConfig: (config: SiteConfig) => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }
};
