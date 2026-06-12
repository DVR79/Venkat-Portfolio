'use client';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { SITE, ABOUT_QUICK_INFO, EXPERTISE_PILLS } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >
          {/* Avatar */}
          <div className="relative w-56 h-56 mx-auto lg:mx-0 mb-8">
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-accent/15 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl font-extrabold font-display text-white shadow-2xl shadow-primary/30">
              DV
            </div>
          </div>

          {/* Quick info */}
          <div className="space-y-4 mb-6">
            {ABOUT_QUICK_INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-base mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-text-2">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="text-sm font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={SITE.resumeUrl}
            download
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-primary hover:bg-primary-l text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[.2em] uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
            ABOUT ME
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] mb-7">
            Transforming Search Visibility Into<br />
            <em className="not-italic text-gradient">Sustainable Business Growth</em>
          </h2>

          <div className="space-y-5 text-text-2 leading-relaxed">
            <p>
              I am <span className="text-text font-semibold">D Venkataramana</span>, an SEO Executive with over three years of experience in{' '}
              <strong className="text-text">Technical SEO, On-Page SEO, Off-Page SEO, Content Optimization, Website
              Audits, and Digital Marketing.</strong>
            </p>
            <p>
              I specialize in helping businesses improve search rankings, increase website traffic, optimize technical performance,
              and create scalable SEO strategies that generate measurable results. My expertise includes technical website audits,
              Core Web Vitals optimization, competitor research, keyword strategy, AI-powered content workflows, and performance reporting.
            </p>
            <p>
              I have successfully worked on SEO initiatives for <strong className="text-text">B2B and EdTech organizations</strong>,
              improving visibility, engagement, and conversion performance through data-driven optimization strategies.
            </p>
          </div>

          {/* Expertise pills */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {EXPERTISE_PILLS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-line/5 border border-line/10 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <span>{p.icon}</span> {p.label}
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 rounded-2xl glass border-l-4 border-l-primary flex items-start gap-4"
          >
            <div className="text-3xl">💡</div>
            <div>
              <div className="font-bold text-base mb-1.5">What makes me different?</div>
              <div className="text-sm text-text-2 leading-relaxed">
                I don't just optimize for rankings. I connect SEO strategy directly to revenue impact.
                Every recommendation I make is backed by data, tied to a business goal, and measured against real KPIs.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
