'use client';

import React, { useEffect } from 'react';
import {
  Sparkles,
  ExternalLink,
  X,
  CheckCircle,
  ShieldCheck,
  Bot,
  Wrench,
  Layers,
  Terminal,
  Zap,
} from 'lucide-react';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';
import { ProjectData } from '@/data/projects';
import { ProjectHeroPreview } from './ProjectHeroPreview';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export const ProjectModal: React.FC<{ project: ProjectData | null; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in cursor-pointer"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto cursor-default rounded-2xl">
        <LiquidGlassWrapper
          config={{
            borderRadius: 16,
          }}
          fallbackClassName="liquid-glass-fallback"
          className="p-4 sm:p-6 md:p-10 rounded-2xl border border-white/20 shadow-2xl relative bg-[#010101]/95"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
            aria-label="Close Project Details"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="pr-8 sm:pr-12 mb-5 sm:mb-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-white/10 border border-white/20 mb-2 sm:mb-3">
              <Sparkles className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${project.accentColor}`} />
              <span className="truncate max-w-[240px] sm:max-w-none">{project.metrics}</span>
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <ProjectHeroPreview project={project} />
          </div>

          <div className="mb-6 p-5 rounded-xl bg-white/5 border border-white/12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4" />
              The Problem & Engineering Challenge
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

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

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-white/12">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#00E676]/20 hover:bg-[#00E676]/30 border border-[#00E676]/60 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,230,118,0.25)] active:scale-[0.98]"
            >
              <span>Launch Live Website</span>
              <ExternalLink className="w-4 h-4 text-[#00E676]" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/18 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98]"
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
