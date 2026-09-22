'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles } from 'lucide-react';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';
import { ProjectData } from '@/data/projects';

export const ProjectHeroPreview: React.FC<{
  project: ProjectData;
  className?: string;
  isInteractive?: boolean;
  priority?: boolean;
}> = ({ project, className = '', isInteractive = true, priority = false }) => {
  return (
    <div className={`group/preview relative rounded-xl overflow-hidden border border-white/15 bg-[#010101]/90 shadow-2xl transition-all duration-300 hover:border-[#00E676]/50 ${className}`}>
      <div className="h-8 bg-[#0a0a0a] border-b border-white/10 px-3 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 border border-rose-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono tracking-tight max-w-[200px] truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
          <span>https://{project.domainDisplay}</span>
        </div>
        <div className="w-8 flex justify-end">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00E676] transition-colors p-1"
            title="Open in new window"
            aria-label="Open project demo"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
        <Image
          src={project.heroImage}
          alt={`${project.title} - ${project.heroCaption}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-[1.03]"
          priority={priority}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#010101]/90 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white bg-black/70 backdrop-blur-md border border-white/20">
            <Sparkles className="w-3 h-3 text-[#00E676]" />
            <span className="truncate max-w-[220px]">{project.heroCaption}</span>
          </div>

          {isInteractive && (
            <div className="opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 pointer-events-auto">
              <LiquidGlassWrapper
                as="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                config={{
                  borderRadius: 9999,
                }}
                fallbackClassName="liquid-glass-pill-fallback"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-[#00E676]/30 hover:bg-[#00E676]/45 border border-[#00E676]/70 shadow-[0_0_15px_rgba(0,230,118,0.4)] transition-all cursor-pointer"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3 text-[#00E676]" />
              </LiquidGlassWrapper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
