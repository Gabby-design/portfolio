'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ProjectCard, ProjectModal, projects, ProjectData } from '@/components/ProjectCard';
import Link from 'next/link';
import { LiquidGlassWrapper } from '@/components/LiquidGlassWrapper';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-20"
    >
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
          Featured Engineering Builds
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Production-Grade Case Studies
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Real-world web applications built with rigorous architecture, sub-second latency,
          and real-time optical glass bezels. Click &quot;Deep Dive&quot; on any project to inspect the 
          problem statement, tech stack, and AI build workflow.
        </p>
      </div>

      {/* 2. All 4 Projects Grid with Smooth Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-20">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.25, 
              delay: idx * 0.04, 
              ease: 'easeOut' 
            }}
            className="h-full"
          >
            <ProjectCard
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          </motion.div>
        ))}
      </div>

      {/* 3. Bottom CTA Banner */}
      <div className="text-center max-w-2xl mx-auto pt-10 border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-2">
          Looking for a customized build?
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          I design and engineer performant web applications, design systems, and AI-enabled tools from idea to production.
        </p>
        <LiquidGlassWrapper
          as={Link}
          href="/contact"
          config={{
            borderRadius: 14,
          }}
          liquidPress={{ scale: 0.94, squish: 0.03 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#00E676]/15 hover:bg-[#00E676]/25 border border-[#00E676]/60 shadow-[0_0_28px_rgba(0,230,118,0.25)] transition-all cursor-pointer"
        >
          <span>Get in Touch for New Projects</span>
          <ArrowRight className="w-4 h-4 text-[#00E676]" />
        </LiquidGlassWrapper>
      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.main>
  );
}
