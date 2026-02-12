import React from 'react';
import { motion } from 'framer-motion';
import { LinkItem, SiteConfig } from '../types';
import IconDisplay from './IconDisplay';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PublicViewProps {
  links: LinkItem[];
  config: SiteConfig;
}

const PublicView: React.FC<PublicViewProps> = ({ links, config }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  // Milliy naqsh (Ornament) SVG
  const OrnamentDivider = () => (
    <div className="flex items-center justify-center gap-4 my-6 opacity-60">
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-brand-gold" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
        <path d="M12 6L13.5 10.5L18 12L13.5 13.5L12 18L10.5 13.5L6 12L10.5 10.5L12 6Z" fill="white" />
      </svg>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-brand-gold" />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-6 relative z-10">
      
      {/* Hero Section */}
      <div className="w-full max-w-lg mx-auto text-center mb-10 md:mb-12 relative group">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {config.logoUrl ? (
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-brand-accent/5 blur-2xl rounded-full" />
              <img 
                src={config.logoUrl} 
                alt={config.companyName} 
                className="h-24 md:h-28 mx-auto mb-6 object-contain relative z-10 drop-shadow-xl" 
              />
            </div>
          ) : (
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-accent uppercase drop-shadow-sm">
              {config.companyName}
            </h1>
          )}
          
          <OrnamentDivider />
          
          <p className="text-brand-accent font-medium font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-2">
             {config.tagline}
          </p>
          
          <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
            {config.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Main Link Hub Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-[480px] relative"
      >
        {/* White Glass Effect */}
        <div className="absolute inset-0 bg-white/60 rounded-3xl blur-xl shadow-2xl" />
        
        <div className="relative bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/60 overflow-hidden">
          
          {/* Top Gold Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

          <div className="p-5 md:p-6 space-y-3">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-3"
            >
              {links.filter(l => l.active).map((link) => (
                <motion.a
                  key={link.id}
                  variants={item}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 bg-white hover:bg-brand-accent/5 border border-gray-100 hover:border-brand-accent/20 rounded-xl transition-all duration-300 ease-out shadow-sm hover:shadow-md overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <IconDisplay name={link.icon} className="w-5 h-5" />
                    </div>
                    
                    <span className="font-semibold text-gray-700 group-hover:text-brand-accent tracking-wide text-sm md:text-base transition-colors">
                      {link.title}
                    </span>
                  </div>

                  <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 group-hover:border-brand-gold/50 group-hover:text-brand-gold transition-all duration-300 group-hover:translate-x-1 bg-white">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent/60 font-semibold">RRGSOFT LinkHub</span>
            <div className="w-1.5 h-1.5 bg-brand-gold rotate-45" />
        </div>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {config.companyName}. Barcha huquqlar himoyalangan.
        </p>
      </motion.footer>
    </div>
  );
};

export default PublicView;