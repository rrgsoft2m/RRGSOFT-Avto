import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#f8fafc]">
      {/* 1. Base Gradient - Light & Clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-slate-100" />
      
      {/* 2. National Ornament Pattern (Gireh / Geometric Star) */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230E2954' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Large Decorative National Element (Corner) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl" />

      {/* 4. Central Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 rounded-full blur-[100px]" />
    </div>
  );
};

export default Background;