'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle2, Sparkles, MessageSquare, User, AtSign } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XTwitterIcon } from '@/components/Icons';
import { LiquidGlassWrapper } from '@/components/LiquidGlassWrapper';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/amarnath3003/quickLiquid',
      color: 'hover:text-[#00E676]',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://linkedin.com',
      color: 'hover:text-[#00E676]',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@example.com',
      color: 'hover:text-[#00E676]',
    },
    {
      name: 'X (Twitter)',
      icon: XTwitterIcon,
      href: 'https://twitter.com',
      color: 'hover:text-[#00E676]',
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-20"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
          Let&apos;s Collaborate
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Get in Touch & Start a Project
        </h1>
        <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
          Have an exciting web project, front-end architecture inquiry, or full-time role?
          Drop a message below or connect directly across channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Direct Contact & Social Pills */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <LiquidGlassWrapper
            config={{
              borderRadius: 16,
            }}
            fallbackClassName="liquid-glass-fallback"
            className="p-5 sm:p-8 rounded-2xl border border-white/18 flex flex-col gap-4 shadow-xl bg-[#010101]/60"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Direct Contact & Socials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Always open to discuss technical leadership, Next.js optimization,
              optical glass engineering, or high-impact creative web platforms.
            </p>

            {/* Social Pills */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <LiquidGlassWrapper
                    key={item.name}
                    as="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    config={{
                      borderRadius: 14,
                    }}
                    liquidPress={{ scale: 0.94, squish: 0.03 }}
                    fallbackClassName="liquid-glass-pill-fallback"
                    className={`p-2.5 sm:p-3 rounded-full border border-white/12 hover:border-[#00E676]/50 flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-300 transition-colors cursor-pointer group bg-white/5 ${item.color}`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:scale-110 group-hover:text-[#00E676] transition-all shrink-0" />
                    <span className="text-white truncate">{item.name}</span>
                  </LiquidGlassWrapper>
                );
              })}
            </div>

            {/* Availability Note */}
            <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-[#010101]/80 border border-white/12 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E676] animate-ping shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Current status:</span> Actively accepting new freelance & full-time roles.
              </div>
            </div>
          </LiquidGlassWrapper>
        </div>

        {/* Right column: Liquid Glass Inquiry Form */}
        <div className="lg:col-span-7">
          <LiquidGlassWrapper
            config={{
              borderRadius: 16,
            }}
            fallbackClassName="liquid-glass-fallback"
            className="p-5 sm:p-8 md:p-10 rounded-2xl border border-white/18 shadow-2xl relative bg-[#010101]/60"
          >
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#00E676]/20 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Message Transmitted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  Thank you for reaching out. Your inquiry has been logged, and I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                  Send an Inquiry
                </h3>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="text-xs font-medium text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00E676]" />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#010101]/80 border border-white/12 text-xs sm:text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-[#00E676]/60 focus:ring-1 focus:ring-[#00E676]/40 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="text-xs font-medium text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5 text-[#00E676]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#010101]/80 border border-white/12 text-xs sm:text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-[#00E676]/60 focus:ring-1 focus:ring-[#00E676]/40 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="text-xs font-medium text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#00E676]" />
                    <span>Project Description / Message</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project scope, timeline, and requirements..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#010101]/80 border border-white/12 text-xs sm:text-sm text-white placeholder-[#4B5563] focus:outline-none focus:border-[#00E676]/60 focus:ring-1 focus:ring-[#00E676]/40 transition-all resize-none"
                  />
                </div>

                {/* Submit Liquid Button */}
                <LiquidGlassWrapper
                  as="button"
                  type="submit"
                  disabled={status === 'submitting'}
                  config={{
                    borderRadius: 14,
                  }}
                  liquidPress={{ scale: 0.94, squish: 0.03 }}
                  fallbackClassName="liquid-glass-pill-fallback"
                  className="w-full mt-2 py-3 sm:py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#00E676]/20 hover:bg-[#00E676]/30 border border-[#00E676]/60 shadow-[0_0_28px_rgba(0,230,118,0.25)] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 text-[#00E676]" />
                    </>
                  )}
                </LiquidGlassWrapper>
              </form>
            )}
          </LiquidGlassWrapper>
        </div>
      </div>
    </motion.main>
  );
}
