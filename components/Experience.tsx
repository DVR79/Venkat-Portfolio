'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { EXPERIENCE } from '@/lib/data';

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = EXPERIENCE[active];

  return (
    <section id="experience" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="CAREER TIMELINE"
          title="Work Experience"
          sub="3+ years driving measurable SEO outcomes across B2B and EdTech"
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
          {/* Sticky job index */}
          <div className="lg:sticky lg:top-28">
            <div className="text-[10px] font-bold uppercase tracking-[.2em] text-text-2 mb-4">
              Positions
            </div>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent" />
              {EXPERIENCE.map((j, i) => (
                <button
                  key={j.role}
                  onClick={() => setActive(i)}
                  className={`relative w-full text-left pl-9 pr-4 py-3 rounded-xl mb-1.5 transition-all group ${
                    active === i
                      ? 'bg-primary/8 border border-primary/20'
                      : 'border border-transparent hover:bg-line/5'
                  }`}
                >
                  <span
                    className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all ${
                      active === i
                        ? 'bg-primary border-primary scale-110 shadow-[0_0_0_4px_rgb(var(--primary)/0.2)]'
                        : 'bg-bg border-line/30 group-hover:border-primary/60'
                    }`}
                  />
                  <div className={`text-sm font-bold ${active === i ? 'text-text' : 'text-text-2'}`}>
                    {j.role}
                  </div>
                  <div className="text-[11px] text-text-2 mt-0.5 truncate">{j.company}</div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] text-text-3">{j.duration}</span>
                    {j.current && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-green/15 text-green border border-green/30">
                        Current
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active job detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 md:p-10 glow-border"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-line/5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary">
                      <FiBriefcase className="w-5 h-5" />
                    </div>
                    {job.current && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-green/15 text-green border border-green/30">
                        Current Role
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display leading-tight">{job.role}</h3>
                  <div className="text-primary font-semibold mt-1">{job.company}</div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-text-2">
                    <span className="inline-flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {job.date}</span>
                    <span className="inline-flex items-center gap-1"><FiMapPin   className="w-3 h-3" /> {job.location}</span>
                    <span className="px-2 py-0.5 rounded-md bg-line/5 border border-line/10 font-semibold text-text-2">{job.duration}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-text-2 leading-relaxed mb-7 text-[15px]">{job.summary}</p>

              {/* Responsibilities */}
              <div className="text-[11px] font-bold uppercase tracking-[.15em] text-text-2 mb-4">
                What I do
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm text-text-2 leading-relaxed">
                    <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              {/* Achievements */}
              {job.achievements && (
                <>
                  <div className="text-[11px] font-bold uppercase tracking-[.15em] text-text-2 mb-4 flex items-center gap-2">
                    <FiTrendingUp className="w-3.5 h-3.5 text-primary" /> Key Impact
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {job.achievements.map((a, i) => (
                      <motion.div
                        key={a.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.4 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-primary/[0.07] to-accent/[0.05] border border-primary/15 hover:border-primary/30 transition-colors"
                      >
                        <div className="text-2xl font-extrabold font-display text-gradient">{a.num}</div>
                        <div className="text-[10px] font-bold uppercase tracking-wide text-text-2 mt-1 leading-tight">
                          {a.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {/* Outcome */}
              {job.outcome && (
                <div className="p-5 rounded-xl bg-accent/[0.06] border-l-4 border-accent text-sm text-text-2 leading-relaxed italic mb-8">
                  {job.outcome}
                </div>
              )}

              {/* Tools */}
              {job.tools && (
                <>
                  <div className="text-[11px] font-bold uppercase tracking-[.15em] text-text-2 mb-3">
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tools.map((t) => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-line/5 border border-line/10 text-text-2 hover:border-primary/40 hover:text-text hover:bg-primary/5 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
