'use client';
import { useRef, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
};

export default function MagneticButton({ children, className = '', href, strength = 22, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  const inner = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`inline-flex items-center justify-center transition-transform duration-200 will-change-transform ${className}`}
        {...rest}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-flex items-center justify-center transition-transform duration-200 will-change-transform ${className}`}
      {...rest}
    >
      {inner}
    </button>
  );
}
