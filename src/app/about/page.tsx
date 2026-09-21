'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Bot, 
  ArrowRight, 
  Code2, 
  ShieldCheck 
} from 'lucide-react';
import { LiquidGlassWrapper } from '@/components/LiquidGlassWrapper';

export default function AboutPage() {
  const philosophies = [
    {
      icon: Cpu,
      title: 'Performance-First Edge Architecture',
      description:
        'Engineered around Next.js App Router, React Server Components, and Edge runtimes to deliver sub-200ms TTFB and perfect 100/100 Core Web Vitals across devices.',
      accent: 'text-[#00E676]',
    },
    {
      icon: Layers,
      title: 'Real-Time Full-Stack Integration',
      description:
        'Architecting robust database schemas with Supabase PostgreSQL, Row Level Security (RLS), real-time WebSockets replication, and automated cache revalidation.',
      accent: 'text-[#00E676]',
    },
    {
      icon: Sparkles,
      title: 'Mathematical Liquid Glass Optics',
      description:
        'Pioneering realistic browser glass physics with QuickLiquid SVG displacement mapping, prismatic chromatic aberration, and critically-damped spring mechanics.',
      accent: 'text-[#00E676]',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Type-Safety & Code Integrity',
      description:
        'Zero-compromise code quality with strict TypeScript typings, comprehensive error boundaries, atomic state machines, and automated validation pipelines.',
      accent: 'text-[#00E676]',
    },
  ];

  const aiWorkflowSteps = [
    {
      tool: 'Cursor AI & Copilot',
      role: 'Context-Aware Scaffolding',
      details: 'Navigating multi-file codebases, drafting boilerplate types, and executing synchronized refactors with AST awareness.',
    },
    {
      tool: 'Claude 3.5 Sonnet',
      role: 'Architecture & Complex Logic',
      details: 'Designing robust database schemas, RLS security policies, complex state machines, and mathematical optical algorithms.',
    },
    {
      tool: 'v0 by Vercel',
      role: 'Rapid Component Ideation',
      details: 'Instant wireframing of responsive layouts and accessible interactive UI elements, followed by meticulous manual engineering.',
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-20"
    >
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 mb-4">
          <Code2 className="w-3.5 h-3.5 text-[#00E676]" />
          Engineering Philosophy & Background
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Senior Creative Front-End &{' '}
          <span className="text-[#00E676]">
            AI-Augmented
          </span>{' '}
          Full-Stack Developer
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
          I build high-throughput, fluid digital products combining design engineering,
          sub-second full-stack architectures, and AI tooling workflows that accelerate delivery 
          without compromising code quality.
        </p>
      </div>

      {/* 2. Core Bio Card */}
      <div className="mb-16">
        <LiquidGlassWrapper
          config={{
            borderRadius: 16,
          }}
          fallbackClassName="liquid-glass-fallback"
          className="p-8 sm:p-12 rounded-2xl border border-white/18 shadow-2xl bg-[#010101]/60"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#00E676]" />
            <span>Bridging Design Craft with Systems Engineering</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              With years of dedicated experience in modern web ecosystems, I bridge the gap between creative visual expression and rigorous systems architecture. From building multi-tenant e-commerce platforms with real-time stock sync to crafting bespoke SVG refraction engines, my focus is always on user delight, responsiveness, and clean maintainable code.
            </p>
            <p>
              I embrace AI as a force multiplier—leveraging intelligent agents, prompt orchestration, and generative tooling to automate repetitive tasks, stress-test edge cases, and focus deeply on craft, interaction feel, and system resilience.
            </p>
          </div>
        </LiquidGlassWrapper>
      </div>

      {/* 3. Architectural Philosophies Grid */}
      <div className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-8 text-white">
          Architectural Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <LiquidGlassWrapper
                key={idx}
                config={{
                  borderRadius: 16,
                }}
                fallbackClassName="liquid-glass-fallback"
                className="p-6 sm:p-8 rounded-2xl border border-white/15 hover:border-[#00E676]/50 transition-all flex flex-col gap-3 bg-white/5"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/12 w-fit">
                  <Icon className={`w-6 h-6 ${item.accent}`} />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </LiquidGlassWrapper>
            );
          })}
        </div>
      </div>

      {/* 4. AI-Augmented Engineering Workflow */}
      <LiquidGlassWrapper
        config={{
          borderRadius: 16,
        }}
        fallbackClassName="liquid-glass-fallback"
        className="p-8 sm:p-12 rounded-2xl border border-[#00E676]/30 shadow-2xl mb-16 bg-[#010101]/60"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676]">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              My AI-Augmented Development Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How modern AI capabilities supercharge velocity, architecture, and code quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiWorkflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white/5 border border-white/12 flex flex-col gap-2"
            >
              <div className="text-xs font-bold text-[#00E676] uppercase tracking-wider">
                {step.tool}
              </div>
              <div className="text-sm font-semibold text-white">
                {step.role}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </LiquidGlassWrapper>

      {/* 5. Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <LiquidGlassWrapper
          as={Link}
          href="/projects"
          config={{
            borderRadius: 14,
          }}
          liquidPress={{ scale: 0.94, squish: 0.03 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#00E676]/15 hover:bg-[#00E676]/25 border border-[#00E676]/60 flex items-center gap-2 cursor-pointer shadow-lg"
        >
          <span>View Real-World Projects</span>
          <ArrowRight className="w-4 h-4 text-[#00E676]" />
        </LiquidGlassWrapper>

        <LiquidGlassWrapper
          as={Link}
          href="/contact"
          config={{
            borderRadius: 14,
          }}
          liquidPress={{ scale: 0.94, squish: 0.03 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/18 flex items-center gap-2 cursor-pointer"
        >
          <span>Get in Touch</span>
        </LiquidGlassWrapper>
      </div>
    </motion.main>
  );
}
