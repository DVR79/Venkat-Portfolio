'use client';
import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiGlobe, FiMessageCircle, FiCheck, FiArrowRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { SITE } from '@/lib/data';

const CONTACT_ITEMS = [
  { icon: <FiMail className="w-4 h-4" />,         label: 'Email',     value: SITE.email,     href: `mailto:${SITE.email}` },
  { icon: <FiMapPin className="w-4 h-4" />,       label: 'Location',  value: SITE.location },
  { icon: <FiGlobe className="w-4 h-4" />,        label: 'Website',   value: SITE.websiteLabel, href: SITE.website },
  { icon: <FiMessageCircle className="w-4 h-4" />, label: 'WhatsApp', value: SITE.phone, href: `https://wa.me/${SITE.whatsapp}` },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent]     = useState(false);
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError('');
    const fd = new FormData(e.currentTarget);
    const data = {
      name:    String(fd.get('name')    || '').trim(),
      email:   String(fd.get('email')   || '').trim(),
      phone:   String(fd.get('phone')   || '').trim(),
      subject: String(fd.get('subject') || '').trim(),
      message: String(fd.get('message') || '').trim(),
    };

    const errs: Record<string, string> = {};
    if (data.name.length < 2) errs.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Please enter a valid email';
    if (!data.subject) errs.subject = 'Please enter a subject';
    if (data.message.length < 20) errs.message = 'Message must be at least 20 characters';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSending(true);

    const SERVICE  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC   = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (SERVICE && TEMPLATE && PUBLIC) {
        await emailjs.send(SERVICE, TEMPLATE, {
          from_name:  data.name,
          from_email: data.email,
          from_phone: data.phone || 'Not provided',
          subject:    data.subject,
          message:    data.message,
        }, { publicKey: PUBLIC });
      }

      // Also open WhatsApp
      const waText = [
        '👋 *New Portfolio Message*',
        '',
        `*From:* ${data.name}`,
        `*Email:* ${data.email}`,
        data.phone ? `*Phone:* ${data.phone}` : '',
        `*Subject:* ${data.subject}`,
        '',
        '*Message:*',
        data.message,
      ].filter(Boolean).join('\n');
      const a = document.createElement('a');
      a.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);

      setSent(true);
      formRef.current?.reset();
    } catch (err: any) {
      console.error(err);
      setServerError('Message failed to send. Please email me directly at ' + SITE.email);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-5 md:px-8 bg-bg-alt/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-[.2em] uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.1] mb-6">
            Let's Work<br />
            <em className="not-italic text-gradient">Together</em>
          </h2>
          <p className="text-text-2 leading-relaxed mb-8">
            I am actively exploring opportunities in SEO, Technical SEO, Digital Marketing,
            and Growth Marketing roles. If you are looking for a results-driven professional
            with hands-on experience in organic growth, technical optimization, analytics,
            and AI-powered marketing strategies, I would love to connect.
          </p>

          <div className="space-y-2.5 mb-7">
            {CONTACT_ITEMS.map((item) => {
              const Inner = (
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-line/[0.03] border border-line/5 hover:border-primary/40 transition-colors group">
                  <div className="text-primary mt-0.5">{item.icon}</div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-2">{item.label}</div>
                    <div className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            <a href={SITE.linkedin} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg text-xs font-semibold border border-line/10 hover:border-[#0a66c2] hover:text-[#0a66c2] hover:bg-[#0a66c2]/5 transition-colors">
              LinkedIn ↗
            </a>
            <a href={SITE.github} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg text-xs font-semibold border border-line/10 hover:border-line/30 hover:bg-line/5 transition-colors">
              GitHub ↗
            </a>
            <a href={SITE.resumeUrl} download className="px-4 py-2 rounded-lg text-xs font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors">
              Resume ↓
            </a>
          </div>
        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-3xl p-7 md:p-9 glow-border"
        >
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold mb-1">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="name" label="Full Name *" placeholder="Your full name" error={errors.name} />
                  <Field name="email" type="email" label="Email *" placeholder="your@email.com" error={errors.email} />
                </div>
                <Field name="phone" type="tel" label="Phone" placeholder="+91 XXXXX XXXXX" />
                <Field name="subject" label="Subject *" placeholder="SEO consultation, job opportunity…" error={errors.subject} />
                <Field name="message" textarea label="Message *" placeholder="Tell me about your project or opportunity…" error={errors.message} />

                {serverError && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-lg">{serverError}</div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-[0_10px_30px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {sending ? 'Sending…' : <>Send Message <FiArrowRight /></>}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-green/15 border-2 border-green flex items-center justify-center text-green text-3xl">
                  <FiCheck />
                </div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-sm text-text-2 max-w-sm">
                  Your message has been delivered to my inbox and WhatsApp. I'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-3 px-5 py-2.5 rounded-lg border border-line/15 hover:border-primary text-sm font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = 'text', textarea = false, error,
}: { name: string; label: string; placeholder: string; type?: string; textarea?: boolean; error?: string }) {
  const base = 'w-full bg-surface border rounded-lg px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] placeholder:text-text-3';
  const cls = `${base} ${error ? 'border-red-500/60' : 'border-line/10'}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold text-text-2">{label}</label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} placeholder={placeholder} className={`${cls} resize-none`} />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
