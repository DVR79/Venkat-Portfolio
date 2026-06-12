import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:        'rgb(var(--bg) / <alpha-value>)',
        'bg-alt':  'rgb(var(--bg-alt) / <alpha-value>)',
        surface:   'rgb(var(--surface) / <alpha-value>)',
        card:      'rgb(var(--card) / <alpha-value>)',
        border:    'rgb(var(--border) / <alpha-value>)',
        line:      'rgb(var(--border) / <alpha-value>)',
        primary:   'rgb(var(--primary) / <alpha-value>)',
        'primary-d': 'rgb(var(--primary-d) / <alpha-value>)',
        'primary-l': 'rgb(var(--primary-l) / <alpha-value>)',
        accent:    'rgb(var(--accent) / <alpha-value>)',
        green:     'rgb(var(--green) / <alpha-value>)',
        text:      'rgb(var(--text) / <alpha-value>)',
        'text-2':  'rgb(var(--text-2) / <alpha-value>)',
        'text-3':  'rgb(var(--text-3) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        blink:   { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        floatA:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        floatB:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(8px)' } },
        gradientShift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        glow:    { '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,.3)' }, '50%': { boxShadow: '0 0 40px rgba(139,92,246,.6)' } },
        scroll:  { from: { transform: 'translateY(0)' }, to: { transform: 'translateY(8px)' } },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        blink:   'blink 0.8s step-end infinite',
        floatA:  'floatA 4s ease-in-out infinite',
        floatB:  'floatB 5s ease-in-out infinite',
        gradient: 'gradientShift 8s ease infinite',
        glow:    'glow 3s ease-in-out infinite',
        scroll:  'scroll 1.5s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.85'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
