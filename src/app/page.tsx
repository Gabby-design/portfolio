'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Layers, Cpu, Compass, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { LiquidGlassWrapper } from '@/components/LiquidGlassWrapper';
import { ProjectCard, ProjectModal, ProjectHeroPreview, projects, ProjectData } from '@/components/ProjectCard';
import { motion } from 'framer-motion';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  // Take the first 2 projects for the homepage teaser
  const featuredProjects = projects.slice(0, 2);
  const activeHeroProject = projects[activeHeroIndex];

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center"
    >
      {/* 1. Hero Section */}
      <section className="pt-16 sm:pt-24 pb-16 sm:pb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Dynamic Liquid Glass Status Badge */}
        <div className="mb-6 sm:mb-8">
          <LiquidGlassWrapper
            config={{
              borderRadius: 14,
            }}
            liquidPress={{ scale: 0.94, squish: 0.03 }}
            fallbackClassName="liquid-glass-pill-fallback"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#00E676]/50 bg-[#00E676]/10 shadow-[0_0_24px_rgba(0,230,118,0.25)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E676]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#00E676] tracking-wide">
              Available for new roles & projects
            </span>
          </LiquidGlassWrapper>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.12]">
          Crafting{' '}
          <span className="text-[#00E676] underline decoration-[#00E676]/40 decoration-wavy decoration-2">
            High-Performance
          </span>{' '}
          Front-End Experiences & Modern Web Apps.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
          Senior front-end engineer and AI-augmented full-stack developer specializing in
          fluid user interfaces, real-time SVG liquid glass refraction, and edge-native architectures.
        </p>

        {/* Quick CTA Liquid Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
          {/* Primary CTA */}
          <LiquidGlassWrapper
            as={Link}
            href="/projects"
            config={{
              borderRadius: 14,
            }}
            liquidPress={{ scale: 0.94, squish: 0.03 }}
            fallbackClassName="liquid-glass-pill-fallback"
            className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#00E676]/15 hover:bg-[#00E676]/25 border border-[#00E676]/60 shadow-[0_0_24px_rgba(0,230,118,0.25)] transition-all group cursor-pointer"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 text-[#00E676] group-hover:translate-x-1 transition-transform" />
          </LiquidGlassWrapper>

          {/* Secondary CTA */}
          <LiquidGlassWrapper
            as="a"
            href="https://github.com/amarnath3003/quickLiquid"
            target="_blank"
            rel="noopener noreferrer"
            config={{
              borderRadius: 14,
            }}
            liquidPress={{ scale: 0.94, squish: 0.03 }}
            fallbackClassName="liquid-glass-pill-fallback"
            className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white hover:text-white bg-white/5 hover:bg-white/10 border border-white/18 hover:border-white/30 transition-all group cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span>GitHub Profile</span>
          </LiquidGlassWrapper>
        </div>

        {/* Interactive Hero Project Showcase */}
        <div className="mt-12 sm:mt-16 w-full max-w-4xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
              <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                Production Hero Preview
              </span>
            </div>
            {/* Project switcher tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    if (activeHeroIndex !== idx) setActiveHeroIndex(idx);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeHeroIndex === idx
                      ? 'bg-[#00E676]/20 text-[#00E676] border border-[#00E676]/60 shadow-[0_0_12px_rgba(0,230,118,0.3)]'
                      : 'bg-white/5 text-[#4B5563] hover:text-white border border-white/10'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          <LiquidGlassWrapper
            config={{
              borderRadius: 16,
            }}
            liquidPress={{ scale: 0.98, squish: 0.01 }}
            fallbackClassName="liquid-glass-fallback"
            className="p-2.5 sm:p-4 rounded-2xl border border-white/18 shadow-2xl bg-[#010101]/60"
          >
            <ProjectHeroPreview project={activeHeroProject} priority={true} />
          </LiquidGlassWrapper>

          {/* Invisible background preloader so project tab switches are instant */}
          <div className="hidden" aria-hidden="true">
            {projects.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.id} src={p.heroImage} alt="" fetchPriority="low" />
            ))}
          </div>
        </div>

        {/* Refractive Metric Chips */}
        <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          {[
            { icon: Sparkles, label: 'Optics Engine', value: 'SVG Refraction', color: 'text-[#00E676]' },
            { icon: Cpu, label: 'Performance', value: '100 / 100 CWV', color: 'text-[#00E676]' },
            { icon: Layers, label: 'Architecture', value: 'Next.js App Router', color: 'text-[#00E676]' },
            { icon: Compass, label: 'Interaction', value: 'Spring Gestures', color: 'text-[#00E676]' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <LiquidGlassWrapper
                key={idx}
                config={{
                  borderRadius: 16,
                }}
                liquidPress={{ scale: 0.94, squish: 0.03 }}
                fallbackClassName="liquid-glass-fallback"
                className="p-4 rounded-2xl border border-white/15 hover:border-[#00E676]/50 flex flex-col items-center justify-center text-center gap-1.5 transition-all shadow-md bg-white/5"
              >
                <Icon className={`w-5 h-5 ${item.color} mb-0.5`} />
                <div className="text-xs text-[#4B5563] font-medium">{item.label}</div>
                <div className="text-sm font-semibold text-white tracking-tight">{item.value}</div>
              </LiquidGlassWrapper>
            );
          })}
        </div>
      </section>

      {/* 2. Featured Projects Teaser */}
      <section className="py-12 sm:py-16 w-full border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
              Featured Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Selected Production Builds
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00E676] hover:text-emerald-300 group transition-colors"
          >
            <span>View All 4 Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* 3. Tech Stack Teaser Banner */}
      <section className="py-12 sm:py-16 w-full border-t border-white/10">
        <LiquidGlassWrapper
          config={{
            borderRadius: 16,
          }}
          fallbackClassName="liquid-glass-fallback"
          className="p-8 sm:p-12 rounded-2xl border border-white/18 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left bg-white/5"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/15 border border-[#00E676]/30 mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#00E676]" />
              Engineering Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Full-Stack Architecture & Optics Engine
            </h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Explore the complete multi-tier technology suite including Next.js 14 App Router,
              Supabase real-time replication, SVG displacement mapping, and AI prompt engineering tools.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <LiquidGlassWrapper
              as={Link}
              href="/stack"
              config={{
                borderRadius: 14,
              }}
              liquidPress={{ scale: 0.94, squish: 0.03 }}
              fallbackClassName="liquid-glass-pill-fallback"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#00E676]/15 hover:bg-[#00E676]/25 border border-[#00E676]/60 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <span>Explore Full Tech Stack</span>
              <ArrowRight className="w-4 h-4 text-[#00E676]" />
            </LiquidGlassWrapper>
            <Link
              href="/about"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/18 flex items-center justify-center gap-2 transition-all"
            >
              <span>About My Approach</span>
            </Link>
          </div>
        </LiquidGlassWrapper>
      </section>

      {/* 4. Ready to Collaborate CTA */}
      <section className="py-12 sm:py-16 w-full text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Have a project in mind?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Let&apos;s build high-performance interfaces, AI-powered applications, or next-generation web products.
          </p>
          <div className="mt-6 flex justify-center">
            <LiquidGlassWrapper
              as={Link}
              href="/contact"
              config={{
                borderRadius: 14,
              }}
              liquidPress={{ scale: 0.94, squish: 0.03 }}
              fallbackClassName="liquid-glass-pill-fallback"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#00E676]/15 hover:bg-[#00E676]/25 border border-[#00E676]/60 shadow-[0_0_24px_rgba(0,230,118,0.25)] flex items-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#00E676] animate-pulse" />
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </LiquidGlassWrapper>
          </div>
        </div>
      </section>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.main>
  );
}
