'use client';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';
import { EDUCATION } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 px-5 md:px-8 bg-bg-alt/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="ACADEMIC BACKGROUND" title="Education" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TiltCard className="glass rounded-2xl p-7 h-full hover:border-primary/30 transition-colors glow-border">
                <div className="flex items-start gap-5">
                  <div className="text-4xl">🎓</div>
                  <div className="flex-1">
                    <div className="text-base md:text-lg font-bold mb-1.5">{e.degree}</div>
                    <div className="text-primary font-semibold text-sm">{e.school}</div>
                    <div className="text-text-2 text-xs mt-1">{e.location}</div>
                    <div className="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      Graduated {e.year}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
