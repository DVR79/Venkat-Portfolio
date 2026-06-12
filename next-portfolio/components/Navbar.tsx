'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, NAV_LINKS } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive('#' + e.target.id); });
    }, { threshold: 0.3 });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-bg/70 border-b border-line/5 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-extrabold tracking-tight font-display">
          {SITE.shortName}<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  active === l.href ? 'text-primary' : 'text-text-2 hover:text-text'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-primary to-accent rounded"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_8px_28px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 transition-all"
          >
            Hire Me
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-5 h-[2px] bg-text transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-text transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-text transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-t border-line/5"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-md text-text-2 hover:text-text hover:bg-line/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
