'use client';

import React from 'react';
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';
import { ProjectData, projects } from '@/data/projects';
import { ProjectHeroPreview } from './ProjectHeroPreview';
import { ProjectModal } from './ProjectModal';

// Re-export for backwards compatibility across existing pages
export { projects };
export type { ProjectData };
export { ProjectHeroPreview };
export { ProjectModal };

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

export const ProjectCard: React.FC<{ project: ProjectData; onOpenModal: (p: ProjectData) => void }> = ({
  project,
  onOpenModal,
}) => {
  return (
    <LiquidGlassWrapper
      config={{
        borderRadius: 20,
      }}
      liquidPress={{ scale: 0.98, squish: 0.01 }}
      fallbackClassName="liquid-glass-fallback"
      className="p-4 sm:p-6 rounded-2xl border border-white/15 hover:border-[#00E676]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden bg-[#010101]/80 backdrop-blur-[2px]"
    >
      <div className={`absolute top-0 left-0 right-0 h-36 bg-linear-to-b ${project.gradient} pointer-events-none rounded-t-2xl`} />

      <div>
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 mb-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide text-white bg-white/10 border border-white/20 max-w-full">
            <Sparkles className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${project.accentColor} shrink-0`} />
            <span className="truncate">{project.metrics}</span>
          </span>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-auto sm:ml-0">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="View Live Project"
            >
              <ExternalLink className="w-4 h-4 text-[#00E676]" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="View Github Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#00E676] transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 mb-3">
          {project.role}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
          {project.tagline}
        </p>

        <div className="mb-4">
          <ProjectHeroPreview project={project} />
        </div>

        <div className="space-y-2 mb-5">
          <div className="text-xs text-slate-400 line-clamp-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">{project.problem}</span>
          </div>
          <div className="text-xs text-slate-300 line-clamp-1 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
            <span className="truncate">{project.highlights[0]}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 rounded-lg text-[11px] font-medium text-slate-400 bg-white/5">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="text-xs sm:text-sm font-semibold text-[#00E676] group-hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Deep-Dive & Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#00E676]/20 hover:bg-[#00E676]/30 border border-[#00E676]/50 shadow-[0_0_12px_rgba(0,230,118,0.25)] transition-all cursor-pointer"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00E676]" />
          </a>
        </div>
      </div>
    </LiquidGlassWrapper>
  );
};
