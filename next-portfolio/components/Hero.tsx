'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi';
import TypedText from './TypedText';
import Counter from './Counter';
import { SITE, ROLES, HERO_STATS } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-5 md:px-8 overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full text-xs font-medium border border-green/30 bg-green/5 text-green"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.05] mb-3"
          >
            {SITE.name}
          </motion.h1>

          <motion.a
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            href={SITE.website}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-l font-semibold text-sm underline underline-offset-4 decoration-primary/40 hover:decoration-primary-l transition-colors mb-5"
          >
            <span>🌐 {SITE.websiteLabel}</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </motion.a>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-text-2 mb-6"
          >
            I'm a <TypedText words={ROLES} className="text-primary font-semibold" />
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold font-display leading-tight mb-6"
          >
            Driving Organic Growth Through<br />
            <span className="text-gradient">SEO, Analytics & AI</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-text-2 leading-relaxed max-w-xl mb-9"
          >
            SEO Executive with 3+ years of experience helping B2B and EdTech organizations
            improve search visibility, increase organic traffic, and drive measurable business
            growth through technical SEO, content optimization, analytics, and AI-powered
            marketing strategies.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-11"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 transition-all"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={SITE.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-line/15 hover:border-primary text-text font-semibold text-sm transition-all hover:bg-line/5"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-text-2 font-semibold text-sm hover:text-text transition-colors"
            >
              Contact Me →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-line/5"
          >
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-extrabold font-display">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-text-2 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto"
        >
          {/* Main card */}
          <div className="glass rounded-2xl p-6 shadow-2xl shadow-primary/10 glow-border">
            <div className="text-sm font-semibold text-text-2 mb-5">SEO Performance Overview</div>
            <div className="flex items-end gap-2 h-32 mb-3">
              {[42, 55, 48, 71, 68, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex-1 rounded-t-md ${
                    i === 5 ? 'bg-gradient-to-t from-primary to-accent' : 'bg-primary/25'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-text-3">
              {['Jan','Feb','Mar','Apr','May','Jun'].map((m) => <span key={m}>{m}</span>)}
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-line/5 text-xs">
              <span className="text-green flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                ↑ 35% vs last period
              </span>
              <span className="text-text-2">Organic Sessions</span>
            </div>
          </div>

          {/* Floating pills */}
          <div className="absolute -top-4 -right-3 glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg animate-floatA">
            <span className="text-lg">📈</span>
            <div>
              <div className="text-sm font-bold leading-none">+35%</div>
              <div className="text-[10px] text-text-2 mt-0.5">Organic Traffic</div>
            </div>
          </div>

          <div className="absolute top-1/2 -right-5 glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg animate-floatB">
            <span className="text-lg">🏆</span>
            <div>
              <div className="text-sm font-bold leading-none">Top 3</div>
              <div className="text-[10px] text-text-2 mt-0.5">SERP Rankings</div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-lg animate-floatA">
            <span className="text-lg">⚡</span>
            <div>
              <div className="text-sm font-bold leading-none">3×</div>
              <div className="text-[10px] text-text-2 mt-0.5">Content Output</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-3 text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
