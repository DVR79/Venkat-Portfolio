'use client';
import { motion } from 'framer-motion';
import Counter from './Counter';
import { IMPACT_STATS } from '@/lib/data';

export default function ImpactStrip() {
  return (
    <div className="relative py-14 bg-gradient-to-r from-primary/[0.08] via-accent/[0.08] to-primary/[0.08] border-y border-line/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        {IMPACT_STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold font-display text-gradient">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="text-xs md:text-sm font-medium text-text-2 mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
