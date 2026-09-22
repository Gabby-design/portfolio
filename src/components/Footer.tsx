'use client';

import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10 mt-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-white font-semibold text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#00E676]" />
              <span>Developer Portfolio</span>
            </div>
            <span className="hidden sm:inline text-[#4B5563]">•</span>
            <span className="text-[11px] sm:text-xs text-[#4B5563] font-normal">Real-time Liquid Glass Optics</span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#4B5563]">
            Engineered with Next.js App Router, Tailwind CSS, and QuickLiquid refraction engine.
          </p>
        </div>

        {/* Liquid Scroll-to-Top Button */}
        <LiquidGlassWrapper
          as="button"
          onClick={scrollToTop}
          config={{
            borderRadius: 14,
          }}
          liquidPress={{ scale: 0.94, squish: 0.03 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className="px-4 py-2 rounded-full border border-white/18 hover:border-[#00E676]/50 text-xs font-semibold text-white flex items-center gap-2 transition-all cursor-pointer shadow-lg bg-white/5"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#00E676]" />
        </LiquidGlassWrapper>
      </div>

      <div className="mt-8 text-center text-[11px] text-[#4B5563]">
        © {new Date().getFullYear()} All rights reserved. Designed for optimal Chromium SVG refraction and universal fallback fidelity.
      </div>
    </footer>
  );
};

export default Footer;
