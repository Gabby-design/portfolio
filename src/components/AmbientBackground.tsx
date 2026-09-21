'use client';

import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div 
      suppressHydrationWarning
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#010101]"
      style={{
        contain: 'strict',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* 1. Global 10px Data Grid: Hardware-isolated background pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:10px_10px]"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* 2. Unified Light Engine: Single, static Neon Emerald Green (#00E676) glow node with soft multi-stop gradient */}
      <div 
        className="absolute -top-[140px] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] rounded-full blur-2xl sm:blur-3xl pointer-events-none opacity-90"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 30%, rgba(0, 230, 118, 0.42) 0%, rgba(0, 230, 118, 0.22) 35%, rgba(0, 230, 118, 0.06) 65%, transparent 85%)',
          transform: 'translate3d(-50%, 0, 0)',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
