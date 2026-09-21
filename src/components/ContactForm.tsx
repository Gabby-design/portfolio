'use client';

import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, Sparkles, MessageSquare, User, AtSign } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XTwitterIcon } from './Icons';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';

export const ContactForm: React.FC = () => {
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
      color: 'hover:text-cyan-400',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@example.com',
      color: 'hover:text-emerald-400',
    },
    {
      name: 'X (Twitter)',
      icon: XTwitterIcon,
      href: 'https://twitter.com',
      color: 'hover:text-violet-400',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          Let&apos;s Collaborate
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch & Start a Project
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Have an exciting project, front-end architecture inquiry, or full-time role?
          Drop a message below or connect directly across channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Contact Info & Social Badges */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <LiquidGlassWrapper
            config={{
              material: 'thin',
              dynamicLighting: true,
              chromaticAberration: 0.18,
              borderRadius: 24,
              refractionStrength: 16,
              blur: 16,
              tintOpacity: 0.06,
            }}
            fallbackClassName="liquid-glass-fallback"
            className="p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-white tracking-tight">
              Direct Contact & Socials
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Always open to discuss technical leadership, Next.js optimization,
              optical glass engineering, or high-impact creative web platforms.
            </p>

            {/* Social Pills */}
            <div className="grid grid-cols-2 gap-3 mt-2">
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
                      material: 'clear',
                      dynamicLighting: true,
                      chromaticAberration: 0.15,
                      borderRadius: 999,
                      refractionStrength: 12,
                      tintOpacity: 0.05,
                    }}
                    liquidPress={{ scale: 0.94, squish: 0.02 }}
                    fallbackClassName="liquid-glass-pill-fallback"
                    className={`p-3 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-300 transition-colors cursor-pointer group ${item.color}`}
                  >
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </LiquidGlassWrapper>
                );
              })}
            </div>

            {/* Availability Note */}
            <div className="mt-4 p-4 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div className="text-xs text-zinc-300">
                <span className="font-semibold text-white">Current status:</span> Actively accepting new freelance & full-time roles.
              </div>
            </div>
          </LiquidGlassWrapper>
        </div>

        {/* Right column: Liquid Glass Inquiry Form */}
        <div className="lg:col-span-7">
          <LiquidGlassWrapper
            config={{
              material: 'regular',
              dynamicLighting: true,
              chromaticAberration: 0.22,
              borderRadius: 24,
              refractionStrength: 20,
              bezelWidth: 28,
              blur: 18,
              tintOpacity: 0.08,
            }}
            fallbackClassName="liquid-glass-fallback"
            className="p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-zinc-300 max-w-md">
                  Thank you for reaching out. Your inquiry has been received, and I will get back to you shortly.
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  Send an Inquiry
                </h3>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Project Description / Message</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/60 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all resize-none"
                  />
                </div>

                {/* Submit Liquid Button */}
                <LiquidGlassWrapper
                  as="button"
                  type="submit"
                  disabled={status === 'submitting'}
                  config={{
                    material: 'clear',
                    dynamicLighting: true,
                    chromaticAberration: 0.22,
                    borderRadius: 999,
                    refractionStrength: 18,
                    tintOpacity: 0.1,
                  }}
                  liquidPress={{ scale: 0.95, squish: 0.02 }}
                  fallbackClassName="liquid-glass-pill-fallback"
                  className="w-full mt-2 py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-linear-to-r from-cyan-500/30 via-violet-500/30 to-emerald-500/30 hover:from-cyan-500/40 hover:to-violet-500/40 border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.2)] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 text-cyan-400" />
                    </>
                  )}
                </LiquidGlassWrapper>
              </form>
            )}
          </LiquidGlassWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
