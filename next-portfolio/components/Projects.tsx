'use client';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';
import { FEATURED_PROJECT, PROJECTS } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-5 md:px-8 bg-bg-alt/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="CASE STUDIES"
          title="Featured Projects"
          sub="Real campaigns. Real results. Data-backed outcomes."
        />

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-10 mb-12 grid lg:grid-cols-2 gap-10 glow-border"
        >
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary mb-4">
              ⭐ Featured Project
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-display mb-4">{FEATURED_PROJECT.title}</h3>
            <p className="text-text-2 leading-relaxed mb-6">{FEATURED_PROJECT.description}</p>

            <div className="text-[11px] font-bold uppercase tracking-wider text-text-2 mb-3">Strategic Approach</div>
            <div className="space-y-3 mb-6">
              {FEATURED_PROJECT.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-text-2">{step}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {FEATURED_PROJECT.stack.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-line/7 border border-line/10 text-text-2 font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {FEATURED_PROJECT.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-line/[0.03] border border-line/5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-end justify-between mb-2">
                  <span className="text-2xl md:text-3xl font-extrabold font-display text-gradient">{m.val}</span>
                  <span className="text-xs font-semibold text-text-2">{m.label}</span>
                </div>
                <div className="h-1.5 rounded-full bg-line/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.65, 0.05, 0.36, 1] }}
                    className={`h-full rounded-full ${
                      m.accent
                        ? 'bg-gradient-to-r from-accent to-primary-l'
                        : 'bg-gradient-to-r from-primary to-accent'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard className="glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-colors group glow-border">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary self-start mb-4">
                  {p.tag}
                </span>
                <h4 className="text-base font-bold font-display mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                <p className="text-sm text-text-2 leading-relaxed mb-5 flex-1">{p.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {p.results.map((r) => (
                    <div key={r.label} className="p-3 rounded-lg bg-line/[0.03] border border-line/5">
                      <div className="text-base font-extrabold text-gradient">{r.val}</div>
                      <div className="text-[10px] font-semibold uppercase tracking-wide text-text-2 mt-0.5">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-line/7 border border-line/10 text-text-2 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
