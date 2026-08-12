/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E5BFF',
          50: '#EEF1FF',
          100: '#DBE1FF',
          200: '#B4C0FF',
          300: '#8C9FFF',
          400: '#5F7CFF',
          500: '#2E5BFF',
          600: '#1E42DB',
          700: '#152FAD',
          800: '#102383',
          900: '#0C1A60',
          950: '#080F38',
        },
        accent: {
          DEFAULT: '#17B8C9',
          50: '#EAFBFC',
          100: '#CFF5F8',
          200: '#9EEAEF',
          300: '#67D9E1',
          400: '#33C4D0',
          500: '#17B8C9',
          600: '#118F9C',
          700: '#0D6E78',
          800: '#0A545C',
          900: '#073B41',
        },
        mint: {
          DEFAULT: '#33E0AE',
          400: '#5DEBC0',
          500: '#33E0AE',
          600: '#22B98D',
        },
        ink: {
          DEFAULT: '#05070C',
          900: '#05070C',
          800: '#0A0F1A',
          700: '#0F1626',
          600: '#151E33',
          border: 'rgba(255,255,255,0.08)',
        },
        paper: {
          DEFAULT: '#F7F9FC',
          50: '#FFFFFF',
          100: '#F7F9FC',
          200: '#EEF1F7',
          border: '#E3E8F1',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'flo-gradient': 'linear-gradient(135deg, #33E0AE 0%, #17B8C9 45%, #2E5BFF 100%)',
        'flo-gradient-soft': 'linear-gradient(135deg, rgba(51,224,174,0.12) 0%, rgba(23,184,201,0.12) 45%, rgba(46,91,255,0.12) 100%)',
        'flo-radial': 'radial-gradient(60% 60% at 50% 40%, rgba(23,184,201,0.25) 0%, rgba(5,7,12,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(23,184,201,0.15), 0 8px 40px -8px rgba(46,91,255,0.35)',
        card: '0 1px 2px rgba(8,15,56,0.04), 0 8px 24px -8px rgba(8,15,56,0.10)',
        'card-dark': '0 1px 0 rgba(255,255,255,0.04), 0 12px 32px -12px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        flow: 'flow 8s linear infinite alternate',
      },
    },
  },
  plugins: [typography],
};
