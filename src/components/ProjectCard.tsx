'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Layers, CheckCircle, ArrowRight, X, Sparkles, Terminal, Zap, Bot, Wrench, ShieldCheck, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  role: string;
  metrics: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  problem: string;
  aiTools: string[];
  highlights: string[];
  architecture: string[];
  demoUrl: string;
  githubUrl: string;
  heroImage: string;
  heroCaption: string;
  domainDisplay: string;
}

export const projects: ProjectData[] = [
  {
    id: 'klasik-wardrobe',
    title: 'Klasik Wardrobe',
    tagline: 'Modern full-stack apparel platform built with Next.js and Supabase.',
    role: 'AI-Augmented Full-Stack Development & Database Integration',
    metrics: '< 200ms Edge TTFB • Real-Time Inventory Sync',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/klasik.jpg',
    heroCaption: 'Minimalist Luxury Apparel • Real-Time Inventory & Cart',
    domainDisplay: 'kllasik-wardrobe.vercel.app',
    problem:
      'Traditional e-commerce platforms suffer from slow initial render times, inventory drift during flash sales, and clunky checkout steps that drive cart abandonment.',
    aiTools: [
      'Cursor AI — Accelerated full-stack React Server Component scaffolding and database schema mapping.',
      'Claude 3.5 Sonnet — Engineered atomic cart synchronization and Supabase Row Level Security (RLS) policies.',
      'v0 by Vercel — Prototyped high-converting responsive product catalog layout and filter drawers.',
    ],
    highlights: [
      'Multi-step shopping bag and responsive catalog with remote media caching.',
      'Supabase integration for real-time inventory and customer order management.',
      'AI-assisted schema modeling and automated UI component generation.',
      'Edge SSR & Server Actions for sub-second database mutations and instant state revalidation.',
    ],
    architecture: [
      'Next.js 14 App Router with Parallel and Intercepting Routes for product quick-views.',
      'Supabase PostgreSQL with real-time replication triggers for stock count broadcast.',
      'Optimistic cart state using atomic state slices with zero layout shift.',
    ],
    demoUrl: 'https://kllasik-wardrobe.vercel.app/',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
  {
    id: 'subtrack-global',
    title: 'SubTrack Global',
    tagline: 'Smart financial tracker that adapts to user location with dynamic multi-currency conversion.',
    role: 'UI/UX Architecture, Financial Logic & Frontend Engineering',
    metrics: '160+ Currencies • Sub-50ms Geolocation & FX Engine',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Exchange Rate API', 'Framer Motion'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/subtrack.jpg',
    heroCaption: 'Location-Aware Multi-Currency Tracker • 160+ FX Pairs',
    domainDisplay: 'helpora-cyan.vercel.app',
    problem:
      'Digital nomads and cross-border teams juggle recurring subscriptions across multiple international currencies with no unified visibility into actual localized spending.',
    aiTools: [
      'Claude 3.5 Sonnet — Built state machines for automated IP geolocation fallback and multi-currency rate calculation.',
      'ChatGPT — Generated time-series financial forecasting models and subscription renewal anomaly detection.',
      'Cursor — Prompt-crafted responsive glass analytics cards with Framer Motion transitions.',
    ],
    highlights: [
      'Automatic IP/location detection to calculate expenses in local and global currencies.',
      'Interactive expense analytics dashboards encased in liquid glass refractive cards.',
      'AI-driven UX layout generation and prompt-crafted business logic.',
      'Real-time automated conversion with offline cache persistence.',
    ],
    architecture: [
      'Client-side IndexedDB cache providing 100% offline access to historic financial entries.',
      'High-performance SVG chart tooltips with requestAnimationFrame gesture throttling.',
      'Tri-tier fallback currency exchange API integration handling automated failover.',
    ],
    demoUrl: 'https://helpora-cyan.vercel.app/',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
  {
    id: 'klingflow-studio',
    title: 'KlingFlow Studio',
    tagline: 'Workflow studio orchestrating structured prompt generation and pipeline tools for AI video generation.',
    role: 'Prompt Engineering, API Integration & Interactive Tooling',
    metrics: '4x Prompt Iteration Speed • Live Parameter Matrix',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'AI APIs', 'Lucide React'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/klingflow.jpg',
    heroCaption: 'AI Video Prompt Studio • Interactive Parameter Matrix',
    domainDisplay: 'vivosmartphone.netlify.app',
    problem:
      'Generative AI video workflows are fragmented across complex parameter syntax (camera pans, motion buckets, frame rates), making prompt repeatability challenging.',
    aiTools: [
      'Claude 3.5 Sonnet — Developed token-aware prompt optimization algorithms and aspect ratio presets.',
      'Cursor — Implemented real-time interactive parameter matrix with QuickLiquid dynamic lighting.',
      'Stable Diffusion / Kling API Orchestrator — Designed asynchronous webhook event pipelines.',
    ],
    highlights: [
      'Specialized prompt-tuning interface for text-to-video and image-to-video generators.',
      'Interactive parameter controls (camera motion, styling weights, aspect ratios).',
      'Designed with QuickLiquid dynamic lighting controls and spring press animations.',
      'Live syntax preview with instant camera trajectory visualization.',
    ],
    architecture: [
      'Asynchronous task orchestrator managing distributed prompt queue workloads.',
      'Client-side JSON schema validator guaranteeing adherence to Kling video parameters.',
      'QuickLiquid spring physics providing tactile feedback during parameter tuning.',
    ],
    demoUrl: 'https://vivosmartphone.netlify.app/',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
  {
    id: 'salon-luxe',
    title: 'Salon Luxe Booking Experience',
    tagline: 'Modern service platform with dynamic appointment scheduling and fluid UI motion.',
    role: 'Full-Stack Architecture, Booking Flow Design & Frontend Engineering',
    metrics: '99.4% Booking Completion • Zero Mobile Layout Shift',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    gradient: 'from-[#00E676]/20 via-white/5 to-transparent',
    accentColor: 'text-[#00E676]',
    heroImage: '/projects/salon.jpg',
    heroCaption: 'Luxury Salon Atelier • Bespoke Appointment Flow',
    domainDisplay: 'hair-salun.netlify.app',
    problem:
      'Service businesses face high mobile drop-off rates due to cumbersome booking wizards, poor calendar responsiveness, and non-intuitive tier selections.',
    aiTools: [
      'v0 by Vercel — Drafted mobile-first booking calendar component and service tier comparison cards.',
      'Claude 3.5 Sonnet — Architected slot reservation state machine preventing double-booking race conditions.',
      'Cursor — Styled fluid touch gestures and responsive liquid glass pricing badges.',
    ],
    highlights: [
      'Interactive service selector and multi-tier appointment booking flow.',
      'Fluid gesture transitions and optimized mobile-first responsive layout.',
      'AI-assisted copy generation and responsive calendar state management.',
      'Automated confirmation email triggers and localized time-zone adjustment.',
    ],
    architecture: [
      'Next.js Edge rendering ensuring rapid initial viewport paint on slow mobile connections.',
      'Framer Motion layout animations providing seamless multi-step step transitions.',
      'Optimistic calendar slot reservation with automated session timeout cleanup.',
    ],
    demoUrl: 'https://hair-salun.netlify.app/visit',
    githubUrl: 'https://github.com/amarnath3003/quickLiquid',
  },
];

export const ProjectHeroPreview: React.FC<{
  project: ProjectData;
  className?: string;
  isInteractive?: boolean;
  priority?: boolean;
}> = ({ project, className = '', isInteractive = true, priority = false }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/18 bg-[#010101]/80 shadow-2xl group/preview transition-all duration-300 ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-black/80 backdrop-blur-md border-b border-white/12 text-xs select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90" />
        </div>

        {/* Address bar pill */}
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/12 text-[11px] text-slate-300 font-mono max-w-[220px] truncate">
          <span className="text-[#00E676] text-[10px]">https://</span>
          <span className="truncate">{project.domainDisplay}</span>
        </div>

        {/* Live Hero indicator badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-full border border-[#00E676]/30">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00E676]"></span>
          </span>
          <span className="tracking-wider font-mono">HERO VIEW</span>
        </div>
      </div>

      {/* Video-to-Image Media Frame */}
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <Image
          src={project.heroImage}
          alt={`${project.title} Hero Section Preview`}
          fill
          priority={priority}
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/preview:scale-105"
        />

        {/* Ambient Gradient Depth Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/20" />

        {/* Dynamic Video Shimmer Scanline on hover */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-[#00E676]/10 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500" />

        {/* Center Hover Action / Launch Button */}
        {isInteractive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-all duration-300">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#010101]/95 border border-[#00E676]/70 text-white text-xs font-semibold shadow-[0_0_24px_rgba(0,230,118,0.4)] hover:bg-[#00E676] hover:text-black transition-all transform scale-90 group-hover/preview:scale-100 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#00E676] group-hover/preview:text-black" />
              <span>Launch Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Small Caption Strip at bottom of frame */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-[#010101]/85 backdrop-blur-md border border-white/18 flex items-center justify-between gap-2 shadow-xl">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shrink-0 animate-pulse" />
            <span className="text-[11px] font-medium text-slate-200 truncate">
              {project.heroCaption}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 shrink-0 uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10">
            Hero View
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<{ project: ProjectData; onOpenModal: (p: ProjectData) => void }> = ({
  project,
  onOpenModal,
}) => {
  return (
    <LiquidGlassWrapper
      config={{
        borderRadius: 16,
      }}
      liquidPress={{ scale: 0.94, squish: 0.03 }}
      fallbackClassName="liquid-glass-fallback"
      className="group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/18 hover:border-[#00E676]/60 transition-all duration-300 h-full overflow-hidden shadow-2xl bg-[#010101]/60"
    >
      {/* Visual Accent Glow Header */}
      <div className={`absolute top-0 left-0 right-0 h-36 bg-linear-to-b ${project.gradient} pointer-events-none rounded-t-2xl`} />

      <div>
        {/* Top bar with Metric chip & link icon */}
        <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-white/10 border border-white/20">
            <Sparkles className={`w-3.5 h-3.5 ${project.accentColor}`} />
            {project.metrics}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="View Live Project"
            >
              <ExternalLink className="w-4 h-4 text-[#00E676]" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="View Github Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#00E676] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Role badge */}
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#00E676] bg-[#00E676]/10 px-2.5 py-1 rounded-md border border-[#00E676]/25 mb-4">
          <Bot className="w-3.5 h-3.5" />
          <span>{project.role}</span>
        </div>

        {/* Hero Section Preview (Video-to-Image with Small Caption) */}
        <div className="mb-5">
          <ProjectHeroPreview project={project} />
        </div>

        {/* Highlights List */}
        <ul className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${project.accentColor}`} />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 pt-4 border-t border-white/12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/5 border border-white/12 hover:border-[#00E676]/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button Row */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/18 hover:border-[#00E676]/50 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
          >
            <span>Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00E676]" />
          </button>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#00E676]/15 hover:bg-[#00E676]/25 border border-[#00E676]/60 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[0_0_16px_rgba(0,230,118,0.2)]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00E676]" />
          </a>
        </div>
      </div>
    </LiquidGlassWrapper>
  );
};

export const ProjectModal: React.FC<{ project: ProjectData | null; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  React.useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in cursor-pointer"
    >
      {/* Refractive Liquid Modal Panel */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto cursor-default">
        <LiquidGlassWrapper
          config={{
            borderRadius: 16,
          }}
          fallbackClassName="liquid-glass-fallback"
          className="p-6 sm:p-10 rounded-2xl border border-white/20 shadow-2xl relative bg-[#010101]/90"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-12 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/10 border border-white/20 mb-3">
              <Sparkles className={`w-3.5 h-3.5 ${project.accentColor}`} />
              {project.metrics}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Hero Section Preview (Full Width with Small Caption) */}
          <div className="mb-8">
            <ProjectHeroPreview project={project} />
          </div>

          {/* Problem Statement Section */}
          <div className="mb-6 p-5 rounded-xl bg-white/5 border border-white/12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4" />
              The Problem & Engineering Challenge
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* AI Tools Used In Build Process */}
          <div className="mb-6 p-5 rounded-xl bg-white/5 border border-[#00E676]/25">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00E676] flex items-center gap-2 mb-3">
              <Bot className="w-4 h-4" />
              AI Tools & Prompt-Engineering Workflow
            </h4>
            <ul className="space-y-2">
              {project.aiTools.map((tool, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Wrench className="w-4 h-4 text-[#00E676] mt-0.5 shrink-0" />
                  <span className="leading-snug">{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Breakdown Section */}
          <div className="mb-6 p-5 rounded-xl bg-white/5 border border-white/12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00E676] flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4" />
              Architecture & System Design
            </h4>
            <ul className="space-y-2.5">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Terminal className="w-4 h-4 text-[#00E676] mt-0.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Highlights */}
          <div className="mb-6 p-5 rounded-xl bg-white/5 border border-white/12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00E676] flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4" />
              Key Features & Production Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#00E676] mt-0.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 border border-white/12"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/12">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[160px] py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#00E676]/20 hover:bg-[#00E676]/30 border border-[#00E676]/60 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,230,118,0.25)]"
            >
              <span>Launch Live Website</span>
              <ExternalLink className="w-4 h-4 text-[#00E676]" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[160px] py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/18 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repository Source</span>
            </a>
          </div>
        </LiquidGlassWrapper>
      </div>
    </div>
  );
};
