'use client';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, sub }: { label: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14"
    >
      <div className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[.2em] uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display leading-[1.1]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-text-2 max-w-2xl mx-auto">{sub}</p>}
    </motion.div>
  );
}
