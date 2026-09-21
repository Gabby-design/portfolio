'use client';

import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Database, 
  Cpu, 
  Sparkles, 
  Flame, 
  Zap, 
  Globe, 
  Boxes, 
  Check, 
  Wand2 
} from 'lucide-react';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'motion' | 'optics';
  level: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'Advanced / App Router',
    description: 'Edge rendering, Server Actions, streaming SSR, and Turbopack optimization.',
    icon: Globe,
    color: 'text-zinc-100',
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    level: 'Deep Core Expertise',
    description: 'Concurrent mode, custom hooks architecture, optimistic updates, and fiber internals.',
    icon: Code,
    color: 'text-cyan-400',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'Strict Mode & Generics',
    description: 'Type-safe contracts, conditional typings, AST transformations, and zero-runtime schemas.',
    icon: Cpu,
    color: 'text-blue-400',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Design Systems & V4',
    description: 'Modern container queries, subgrid, fluid typographic scales, and responsive design systems.',
    icon: Flame,
    color: 'text-teal-400',
  },
  {
    id: 'quickliquid',
    name: 'QuickLiquid',
    category: 'optics',
    level: 'Optics & Physics',
    description: 'SVG displacement mapping, chromatic dispersion, Apple-style liquid glass, and spring dynamics.',
    icon: Sparkles,
    color: 'text-pink-400',
  },
  {
    id: 'framermotion',
    name: 'Framer Motion',
    category: 'motion',
    level: 'Fluid UI Physics',
    description: 'Gestural physics, layout morphing, spring velocity matching, and scroll-linked animations.',
    icon: Wand2,
    color: 'text-violet-400',
  },
  {
    id: 'supabase',
    name: 'Supabase & SQL',
    category: 'backend',
    level: 'Postgres & Realtime',
    description: 'Row Level Security (RLS), real-time WebSockets replication, triggers, and Edge functions.',
    icon: Database,
    color: 'text-emerald-400',
  },
  {
    id: 'restapi',
    name: 'REST & GraphQL',
    category: 'backend',
    level: 'High-Throughput APIs',
    description: 'Edge endpoints, webhook consumers, rate limiting, and optimistic caching layers.',
    icon: Boxes,
    color: 'text-amber-400',
  },
  {
    id: 'state',
    name: 'State Architecture',
    category: 'frontend',
    level: 'Zustand & TanStack Query',
    description: 'Atomic state slices, cache hydration, background invalidation, and offline persistence.',
    icon: Layers,
    color: 'text-indigo-400',
  },
  {
    id: 'cwv',
    name: 'Core Web Vitals',
    category: 'optics',
    level: 'Sub-second LCP / INP',
    description: 'Backdrop rendering paths, paint containment, memory leak prevention, and bundle tree-shaking.',
    icon: Zap,
    color: 'text-yellow-400',
  },
];

export const TechDock: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(skills[0]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend Core' },
    { id: 'optics', label: 'Glass Optics & CWV' },
    { id: 'motion', label: 'Motion & UI' },
    { id: 'backend', label: 'Data & Backend' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="stack" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Interactive Stack Engine
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Modern Tech Stack & Architecture
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Hover over badges to inspect technical capabilities, framework internals, 
          and production implementation details.
        </p>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'text-white bg-linear-to-r from-cyan-500/30 to-violet-500/30 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'text-zinc-400 hover:text-zinc-200 bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Glass Dock Shelf */}
      <LiquidGlassWrapper
        config={{
          material: 'clear',
          dynamicLighting: true,
          chromaticAberration: 0.22,
          borderRadius: 28,
          refractionStrength: 20,
          bezelWidth: 28,
          blur: 16,
          tintOpacity: 0.06,
          specularStrength: 0.28,
        }}
        fallbackClassName="liquid-glass-fallback"
        className="p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
      >
        {/* Badges Grid (Metaball/Liquid Group Concept) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isSelected = activeSkill?.id === skill.id;

            return (
              <LiquidGlassWrapper
                key={skill.id}
                as="div"
                onClick={() => setActiveSkill(skill)}
                onMouseEnter={() => setActiveSkill(skill)}
                config={{
                  material: isSelected ? 'clear' : 'thin',
                  dynamicLighting: true,
                  chromaticAberration: isSelected ? 0.25 : 0.12,
                  borderRadius: 20,
                  refractionStrength: isSelected ? 18 : 10,
                  tintOpacity: isSelected ? 0.12 : 0.04,
                }}
                liquidPress={{ scale: 0.94, squish: 0.02 }}
                fallbackClassName="liquid-glass-pill-fallback"
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
                  isSelected
                    ? 'border-cyan-400/60 bg-white/15 shadow-[0_0_25px_rgba(6,182,212,0.25)]'
                    : 'border-white/10 hover:border-white/30 bg-white/5'
                }`}
              >
                <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${skill.color}`} />
                </div>
                <div className="font-semibold text-xs sm:text-sm text-zinc-100 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </div>
                <div className="text-[10px] text-zinc-400 font-medium line-clamp-1">
                  {skill.level}
                </div>
              </LiquidGlassWrapper>
            );
          })}
        </div>

        {/* Dynamic Detail Card Displaying Active Skill Info */}
        {activeSkill && (
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-zinc-950/40 p-5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <activeSkill.icon className={`w-6 h-6 ${activeSkill.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {activeSkill.name}
                  </h4>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-cyan-300 bg-cyan-500/15 border border-cyan-400/30">
                    {activeSkill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300/85 mt-0.5">
                  {activeSkill.description}
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
              <Check className="w-3.5 h-3.5" />
              <span>Production Tested</span>
            </div>
          </div>
        )}
      </LiquidGlassWrapper>
    </section>
  );
};

export default TechDock;
