'use client';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';
import { CERTIFICATIONS } from '@/lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="CREDENTIALS"
          title="Certifications"
          sub="Industry-recognized qualifications validating expertise"
        />

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <TiltCard className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group glow-border">
                <div className="flex items-start gap-4">
                  <div className="text-4xl w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 group-hover:scale-110 transition-transform">
                    🏅
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-base leading-snug mb-1">{c.name}</div>
                    <div className="text-sm text-primary font-medium">{c.issuer}</div>
                    <div className="flex items-center gap-3 mt-3 text-xs">
                      <span className="text-text-2 font-semibold">{c.year}</span>
                      <span className="inline-flex items-center gap-1 text-green">
                        <FiCheckCircle className="w-3 h-3" /> Verified
                      </span>
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
