'use client';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';
import { SKILLS } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="EXPERTISE"
          title="Skills & Tools"
          sub="A comprehensive toolkit built over 3+ years of hands-on SEO practice"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-colors glow-border group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-lg font-bold font-display mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-line/7 border border-line/10 text-text-2 hover:border-primary/40 hover:text-text hover:bg-primary/5 transition-colors"
                    >
                      {t}
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
