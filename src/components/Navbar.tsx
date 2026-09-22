'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { LiquidGlassWrapper } from './LiquidGlassWrapper';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tech Stack', href: '/stack' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll and handle escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Automatically close mobile menu on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto w-full max-w-5xl">
        <LiquidGlassWrapper
          config={{
            borderRadius: 999,
          }}
          liquidPress={{ scale: 0.98, squish: 0.01 }}
          fallbackClassName="liquid-glass-pill-fallback"
          className={`w-full rounded-full px-3 sm:px-5 py-2 border border-white/18 shadow-[0_8px_32px_rgba(0,0,0,0.85)] transition-all duration-300 ${
            scrolled ? 'bg-[#010101]/60' : 'bg-[#010101]/30'
          }`}
        >
          {/* Explicit Flex Alignment Container to ensure all items align uniformly */}
          <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Brand / Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white transition-colors group shrink-0 h-9"
            >
              <div className="w-8 h-8 rounded-full bg-[#010101] border border-[#00E676]/60 p-[1.5px] flex items-center justify-center shadow-[0_0_14px_rgba(0,230,118,0.35)] group-hover:scale-105 transition-transform shrink-0">
                <Code2 className="w-4 h-4 text-[#00E676] group-hover:rotate-12 transition-transform" />
              </div>
              <span className="font-bold text-sm tracking-tight text-white leading-none flex items-center">
                dev<span className="text-[#00E676]">.liquid</span>
              </span>
            </Link>

            {/* Right: Nav Links & Action CTA Button */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 h-9">
              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-1 h-full">
                {navItems.map((item) => {
                  const isActive = pathname
                    ? item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)
                    : false;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`inline-flex items-center justify-center h-8 px-3.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 leading-none ${
                        isActive
                          ? 'text-white bg-white/12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] border border-white/20'
                          : 'text-[#4B5563] hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] mr-1.5 shadow-[0_0_8px_#00E676] shrink-0" />
                      )}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* High-Performance Cut Glass CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-8 rounded-full border border-[#00E676]/60 bg-[#00E676]/15 hover:bg-[#00E676]/25 shadow-[0_0_20px_rgba(0,230,118,0.3)] transition-all cursor-pointer group active:scale-95"
              >
                <div className="flex items-center justify-center gap-1.5 px-2.5 sm:px-4 h-full text-xs font-semibold text-white leading-none">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00E676] animate-pulse shrink-0" />
                  <span className="hidden sm:inline whitespace-nowrap">Get in Touch</span>
                  <span className="inline sm:hidden whitespace-nowrap">Contact</span>
                  <ArrowUpRight className="hidden sm:inline w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </div>
              </Link>

              {/* Mobile Drawer Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-8 w-8 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </LiquidGlassWrapper>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden pointer-events-auto animate-fade-in"
        />
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed top-18 sm:top-20 left-4 right-4 z-50 animate-fade-in max-w-md mx-auto">
          <LiquidGlassWrapper
            config={{
              borderRadius: 18,
            }}
            fallbackClassName="liquid-glass-fallback"
            className="p-4 sm:p-5 rounded-2xl border border-white/20 shadow-2xl flex flex-col gap-1.5 bg-[#010101]/95"
          >
            {navItems.map((item) => {
              const isActive = pathname
                ? item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
                : false;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between active:scale-[0.98] ${
                    isActive
                      ? 'text-white bg-white/15 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]'
                      : 'text-[#4B5563] hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />}
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              );
            })}

            {/* Mobile Drawer Direct Contact Button */}
            <div className="pt-2 mt-1 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#00E676]/20 hover:bg-[#00E676]/30 border border-[#00E676]/50 flex items-center justify-center gap-2 transition-all shadow-[0_0_16px_rgba(0,230,118,0.2)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </LiquidGlassWrapper>
        </div>
      )}
    </header>
  );
};

export default Navbar;
