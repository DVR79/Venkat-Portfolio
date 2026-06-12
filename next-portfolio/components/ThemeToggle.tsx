'use client';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative w-10 h-10 inline-flex items-center justify-center rounded-lg border border-line/10 hover:border-primary/40 hover:bg-line/5 transition-all ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ y: -10, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark
            ? <FiMoon className="w-[18px] h-[18px] text-primary-l" />
            : <FiSun  className="w-[18px] h-[18px] text-primary" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
