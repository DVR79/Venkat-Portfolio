'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
const Ctx = createContext<{ theme: Theme; toggle: () => void; set: (t: Theme) => void }>({
  theme: 'dark', toggle: () => {}, set: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme | null);
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const t = saved ?? sys;
    setTheme(t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  }, []);

  const set = (t: Theme) => {
    setTheme(t);
    localStorage.setItem('theme', t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  };

  const toggle = () => set(theme === 'dark' ? 'light' : 'dark');

  return <Ctx.Provider value={{ theme, toggle, set }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
