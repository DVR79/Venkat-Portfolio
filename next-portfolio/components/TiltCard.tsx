'use client';
import { useEffect, useRef, ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
};

export default function TiltCard({ children, className = '', max = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    VanillaTilt.init(el, {
      max,
      glare,
      'max-glare': 0.12,
      speed: 600,
      scale: 1.015,
      gyroscope: false,
      perspective: 1200,
    });
    return () => {
      const tilt = (el as any).vanillaTilt;
      if (tilt) tilt.destroy();
    };
  }, [max, glare]);

  return (
    <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
}
