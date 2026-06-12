'use client';
import { TOOLS } from '@/lib/data';

export default function ToolsMarquee() {
  const doubled = [...TOOLS, ...TOOLS];
  return (
    <div className="relative border-y border-line/5 bg-bg-alt/60 backdrop-blur-sm py-5 flex items-center gap-6 overflow-hidden">
      <div className="flex-shrink-0 pl-5 md:pl-8 text-xs font-bold tracking-[.15em] uppercase text-text-2 whitespace-nowrap">
        Tools &amp; Platforms
      </div>
      <div className="flex-1 marquee-mask overflow-hidden">
        <div className="flex items-center gap-3 w-max animate-marquee">
          {doubled.map((t, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-text-2 whitespace-nowrap">
              {t}
              <span className="text-[.5rem] text-primary/60">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
