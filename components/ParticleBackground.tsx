'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { useTheme } from './ThemeProvider';

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const dark = theme === 'dark';
    return {
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: dark ? 55 : 40, density: { enable: true, width: 1200, height: 800 } },
        color: { value: dark ? ['#6366f1', '#8b5cf6', '#818cf8'] : ['#4f46e5', '#7c3aed', '#6366f1'] },
        shape: { type: 'circle' },
        opacity: { value: { min: dark ? 0.1 : 0.18, max: dark ? 0.45 : 0.55 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 140,
          color: dark ? '#6366f1' : '#4f46e5',
          opacity: dark ? 0.18 : 0.22,
          width: 1,
        },
        move: {
          enable: true, speed: 0.6, direction: 'none', random: true, straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: { distance: 180, links: { opacity: dark ? 0.45 : 0.55 } },
          push: { quantity: 3 },
        },
      },
    };
  }, [theme]);

  if (!ready) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 spotlight-bg" />
      <div className="pointer-events-auto absolute inset-0">
        <Particles id="tsparticles" options={options} />
      </div>
    </div>
  );
}
