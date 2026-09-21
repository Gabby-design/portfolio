'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cpu, 
  Sparkles, 
  Flame, 
  Zap, 
  Globe, 
  Boxes, 
  Check, 
  Wand2, 
  Bot, 
  Terminal, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import { LiquidGlassWrapper } from '@/components/LiquidGlassWrapper';

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'motion' | 'optics' | 'ai';
  level: string;
  description: string;
  architectureDetails: string;
  icon: React.ElementType;
  color: string;
}

const allSkills: Skill[] = [
  {
    id: 'nextjs',
    name: 'Next.js 14/15',
    category: 'frontend',
    level: 'Advanced / App Router',
    description: 'Edge SSR, Server Actions, streaming suspense boundaries, and Turbopack optimization.',
    architectureDetails: 'Parallel routing, intercepting routes, partial prerendering, and optimized image loaders.',
    icon: Globe,
    color: 'text-[#00E676]',
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    level: 'Deep Core Expertise',
    description: 'Concurrent mode, custom hooks architecture, optimistic updates, and fiber internals.',
    architectureDetails: 'Server Components, useActionState, useOptimistic, and seamless transitions.',
    icon: Code,
    color: 'text-[#00E676]',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'Strict Mode & Generics',
    description: 'Type-safe contracts, conditional typings, AST transformations, and zero-runtime schemas.',
    architectureDetails: 'End-to-end API type safety with Zod schemas and automatic inferencing.',
    icon: Cpu,
    color: 'text-[#00E676]',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS V4',
    category: 'frontend',
    level: 'Design Systems & V4',
    description: 'Modern container queries, fluid typographic scales, subgrid, and responsive systems.',
    architectureDetails: 'Zero-runtime CSS engine with custom utility layers and dark-mode tokens.',
    icon: Flame,
    color: 'text-[#00E676]',
  },
  {
    id: 'quickliquid',
    name: 'QuickLiquid Optics',
    category: 'optics',
    level: 'Optics & Physics',
    description: 'SVG displacement mapping, chromatic dispersion, Apple-style liquid glass, and spring dynamics.',
    architectureDetails: 'Custom displacement filters with refcounted memory cache and Chromium optimization.',
    icon: Sparkles,
    color: 'text-[#00E676]',
  },
  {
    id: 'framermotion',
    name: 'Framer Motion',
    category: 'motion',
    level: 'Fluid UI Physics',
    description: 'Gestural physics, layout morphing, spring velocity matching, and scroll-linked animations.',
    architectureDetails: 'Hardware-accelerated transforms, layoutId morphing, and orchestration trees.',
    icon: Wand2,
    color: 'text-[#00E676]',
  },
  {
    id: 'supabase',
    name: 'Supabase & PostgreSQL',
    category: 'backend',
    level: 'Postgres & Realtime',
    description: 'Row Level Security (RLS), real-time WebSockets replication, triggers, and Edge functions.',
    architectureDetails: 'Declarative database schema migrations, automated webhook relays, and multi-tenant auth.',
    icon: Database,
    color: 'text-[#00E676]',
  },
  {
    id: 'restapi',
    name: 'REST & GraphQL',
    category: 'backend',
    level: 'High-Throughput APIs',
    description: 'Edge endpoints, webhook consumers, rate limiting, and optimistic caching layers.',
    architectureDetails: 'Stripe, Exchange Rate APIs, and asynchronous worker queues.',
    icon: Boxes,
    color: 'text-[#00E676]',
  },
  {
    id: 'ai-tools',
    name: 'Cursor & Claude',
    category: 'ai',
    level: 'AI-Assisted Delivery',
    description: 'Prompt-engineered architecture, AST-aware scaffolding, and automated unit test generation.',
    architectureDetails: 'Multi-agent orchestration, schema prototyping, and code security auditing.',
    icon: Bot,
    color: 'text-[#00E676]',
  },
  {
    id: 'cwv',
    name: 'Core Web Vitals',
    category: 'optics',
    level: 'Sub-second LCP / INP',
    description: 'Backdrop rendering paths, paint containment, memory leak prevention, and bundle tree-shaking.',
    architectureDetails: 'Zero layout shift (CLS: 0), sub-100ms INP, and LCP image preload prioritization.',
    icon: Zap,
    color: 'text-[#00E676]',
  },
];

export default function TechStackPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(allSkills[0]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend Core' },
    { id: 'optics', label: 'Glass Optics & CWV' },
    { id: 'motion', label: 'Motion & UI' },
    { id: 'backend', label: 'Data & Backend' },
    { id: 'ai', label: 'AI Tooling' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? allSkills
      : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-20"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
          Interactive Stack Engine
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Modern Tech Stack & Architecture
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Hover over each individual liquid glass badge to inspect framework internals,
          production benchmarks, and real-time cursor-driven lighting refractions.
        </p>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                if (selectedCategory !== cat.id) setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'text-white bg-[#00E676]/20 border border-[#00E676]/60 shadow-[0_0_15px_rgba(0,230,118,0.25)]'
                  : 'text-[#4B5563] hover:text-white bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Glass Dock Container */}
      <div className="mb-12">
        <div className="p-6 sm:p-10 rounded-2xl border border-white/18 shadow-2xl relative bg-[#010101]/60 backdrop-blur-[2px]">
          {/* Badges Grid — Staggered Framer Motion Reveal */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.02 },
              },
            }}
          >
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              const isSelected = activeSkill?.id === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
                  }}
                >
                  {/* Each badge wrapped in its own LiquidGlass component */}
                  <LiquidGlassWrapper
                    as="div"
                    onClick={() => {
                      if (activeSkill?.id !== skill.id) setActiveSkill(skill);
                    }}
                    onMouseEnter={() => {
                      if (activeSkill?.id !== skill.id) setActiveSkill(skill);
                    }}
                    config={{
                      borderRadius: 14,
                    }}
                    liquidPress={{ scale: 0.94, squish: 0.03 }}
                    fallbackClassName="liquid-glass-pill-fallback"
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center gap-2 group h-full ${
                      isSelected
                        ? 'border-[#00E676]/70 bg-white/10 shadow-[0_0_24px_rgba(0,230,118,0.35)]'
                        : 'border-white/12 hover:border-[#00E676]/40 bg-white/5'
                    }`}
                  >
                    <div className="p-2.5 rounded-lg bg-[#010101]/80 border border-white/12 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <div className="font-semibold text-xs sm:text-sm text-white group-hover:text-[#00E676] transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium line-clamp-1">
                      {skill.level}
                    </div>
                  </LiquidGlassWrapper>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dynamic Detail Card Displaying Active Skill Info */}
          {activeSkill && (
            <div className="mt-8 pt-6 border-t border-white/12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#010101]/80 p-6 rounded-xl border border-white/15">
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3.5 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 shrink-0">
                  <activeSkill.icon className={`w-7 h-7 ${activeSkill.color}`} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {activeSkill.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/15 border border-[#00E676]/30">
                      {activeSkill.level}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {activeSkill.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                    <span>{activeSkill.architectureDetails}</span>
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs text-[#00E676] font-semibold bg-[#00E676]/10 px-4 py-2 rounded-xl border border-[#00E676]/30 shadow-sm">
                <Check className="w-4 h-4" />
                <span>Production Tested</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation CTA */}
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
          <span>See Real-World Case Studies</span>
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
