'use client';

import React from 'react';
import { ArrowRight, Sparkles, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';

export const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative pt-32 sm:pt-40 pb-20 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center"
    >
      {/* 1. Dynamic Liquid Glass Status Badge */}
      <div className="mb-6 sm:mb-8 animate-fade-in">
        <LiquidGlassWrapper
          config={{
            material: 'clear',
            dynamicLighting: true,
            chromaticAberration: 0.22,
            borderRadius: 999,
            bezelWidth: 20,
            refractionStrength: 16,
            blur: 12,
            tintOpacity: 0.06,
          }}
          liquidPress={{ scale: 0.96, squish: 0.02 }}
          animateIn={150}
          fallbackClassName="liquid-glass-pill-fallback"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_24px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-300 tracking-wide">
            Available for new roles & projects
          </span>
        </LiquidGlassWrapper>
      </div>

      {/* 2. Hero Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.12]">
        Crafting{' '}
        <span className="bg-linear-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy decoration-2">
          High-Performance
        </span>{' '}
        Front-End Experiences & Modern Web Apps.
      </h1>

      {/* 3. Subtitle / Value Proposition */}
      <p className="mt-6 sm:mt-8 text-base sm:text-xl text-zinc-300/90 max-w-2xl font-normal leading-relaxed">
        Senior creative front-end engineer specializing in fluid user interfaces, real-time SVG refraction optics, 
        and production-grade full-stack architectures built with Next.js and TypeScript.
      </p>

      {/* 4. Liquid Glass CTA Buttons with Spring Physics */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
        {/* Primary Liquid Button */}
        <LiquidGlassWrapper
          as="a"
          href="#projects"
          config={{
            material: 'clear',
            dynamicLighting: true,
            chromaticAberration: 0.24,
            borderRadius: 999,
            refractionStrength: 24,
            bezelWidth: 28,
            tintOpacity: 0.1,
          }}
          liquidPress={{ scale: 0.94, squish: 0.03 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-cyan-500/25 via-indigo-500/25 to-violet-500/25 border border-cyan-400/40 shadow-[0_0_28px_rgba(6,182,212,0.25)] hover:border-cyan-300 transition-all group cursor-pointer"
        >
          <span>Explore Work</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </LiquidGlassWrapper>

        {/* Secondary Liquid Button */}
        <LiquidGlassWrapper
          as="a"
          href="https://github.com/amarnath3003/quickLiquid"
          target="_blank"
          rel="noopener noreferrer"
          config={{
            material: 'regular',
            dynamicLighting: true,
            chromaticAberration: 0.15,
            borderRadius: 999,
            refractionStrength: 18,
            tintOpacity: 0.08,
          }}
          liquidPress={{ scale: 0.95, squish: 0.02 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
        >
          <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          <span>GitHub Profile</span>
        </LiquidGlassWrapper>
      </div>

      {/* 5. Refractive Highlights Banner (Metric Pills) */}
      <div className="mt-14 sm:mt-18 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
        {[
          { icon: Sparkles, label: 'Optics Engine', value: 'SVG Refraction', color: 'text-cyan-400' },
          { icon: Cpu, label: 'Performance', value: '100 / 100 CWV', color: 'text-emerald-400' },
          { icon: Layers, label: 'Architecture', value: 'Next.js App Router', color: 'text-violet-400' },
          { icon: Compass, label: 'Interaction', value: 'Spring Gestures', color: 'text-pink-400' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <LiquidGlassWrapper
              key={idx}
              config={{
                material: 'thin',
                dynamicLighting: true,
                chromaticAberration: 0.14,
                borderRadius: 20,
                refractionStrength: 12,
                tintOpacity: 0.04,
              }}
              liquidPress={{ scale: 0.97, squish: 0.015 }}
              fallbackClassName="liquid-glass-fallback"
              className="p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center gap-1.5 transition-all hover:border-white/20"
            >
              <Icon className={`w-5 h-5 ${item.color} mb-0.5`} />
              <div className="text-xs text-zinc-400 font-medium">{item.label}</div>
              <div className="text-sm font-semibold text-zinc-100 tracking-tight">{item.value}</div>
            </LiquidGlassWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
