var config = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--color-bg) / <alpha-value>)',
                surface: 'rgb(var(--color-surface) / <alpha-value>)',
                ink: 'rgb(var(--color-ink) / <alpha-value>)',
                muted: 'rgb(var(--color-muted) / <alpha-value>)',
                line: 'rgb(var(--color-line) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
                teal: 'rgb(var(--color-teal) / <alpha-value>)',
                dark: 'rgb(var(--color-dark) / <alpha-value>)',
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                xl2: '18px',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0,0) scale(1)' },
                    '33%': { transform: 'translate(-40px,30px) scale(1.06)' },
                    '66%': { transform: 'translate(30px,-20px) scale(0.96)' },
                },
                pulseDot: {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.4)' },
                },
                blink: {
                    '0%, 49%': { opacity: '1' },
                    '50%, 100%': { opacity: '0' },
                },
            },
            animation: {
                float: 'float 22s ease-in-out infinite',
                'pulse-dot': 'pulseDot 2s ease-in-out infinite',
                blink: 'blink 1s step-end infinite',
            },
        },
    },
    plugins: [],
};
export default config;
