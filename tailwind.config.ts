import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           'rgb(var(--color-bg) / <alpha-value>)',
        surface:      'rgb(var(--color-surface) / <alpha-value>)',
        ink:          'rgb(var(--color-ink) / <alpha-value>)',
        muted:        'rgb(var(--color-muted) / <alpha-value>)',
        line:         'rgb(var(--color-line) / <alpha-value>)',
        accent:       'rgb(var(--color-accent) / <alpha-value>)',
        'accent-soft':'rgb(var(--color-accent-soft) / <alpha-value>)',
        teal:         'rgb(var(--color-teal) / <alpha-value>)',
        dark:         'rgb(var(--color-dark) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '18px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        blink: {
          '0%, 49%':   { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scrollDown: {
          '0%':   { top: '-40%' },
          '100%': { top: '100%' },
        },
      },
      animation: {
        blink:      'blink 1s step-end infinite',
        scrollDown: 'scrollDown 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
