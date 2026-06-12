'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, suffix = '', duration = 1800, className = '' }: {
  to: number; suffix?: string; duration?: number; className?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const run = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setVal(Math.round((1 - Math.pow(1 - p, 4)) * to));
            if (p < 1) requestAnimationFrame(run);
          };
          requestAnimationFrame(run);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return <span ref={ref} className={className}>{val}{suffix}</span>;
}
