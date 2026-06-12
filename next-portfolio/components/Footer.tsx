'use client';
import { FiArrowUp } from 'react-icons/fi';
import { SITE, NAV_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative border-t border-line/5 bg-bg py-12 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-8 pb-10 border-b border-line/5 mb-6">
          <div>
            <a href="#hero" className="text-2xl font-extrabold font-display tracking-tight">
              {SITE.shortName}<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-text-2 mt-2">SEO Executive  |  Technical SEO Specialist</p>
            <p className="text-xs text-text-2 italic mt-1">Turning Search Intent Into Business Growth.</p>
            <a
              href={SITE.website}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              🌐 {SITE.websiteLabel}
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-2 hover:text-text px-3 py-1.5 rounded-md hover:bg-line/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-text-2">Copyright © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</span>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line/10 text-text-2 hover:text-text hover:border-primary/40 transition-colors"
          >
            <FiArrowUp /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
