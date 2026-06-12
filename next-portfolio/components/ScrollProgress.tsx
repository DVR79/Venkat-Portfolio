'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary-l transition-[width] duration-100"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
