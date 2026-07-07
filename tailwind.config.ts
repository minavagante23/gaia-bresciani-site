import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9F7F2',
        primary: {
          DEFAULT: '#2D464C',
          light: '#3A5A62',
          dark: '#1E3238',
        },
        accent: {
          DEFAULT: '#D1A684',
          light: '#E0C4A8',
          dark: '#B8875F',
          /* Variante "funzionale" per testo e CTA: contrasto AA col bianco (4.8:1) */
          deep: '#9C6644',
        },
        /* Testo secondario con contrasto AA su sfondo #F9F7F2 */
        muted: '#4A5F65',
        subtle: '#566B71',
        whatsapp: '#128C7E',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(45,70,76,0.10)',
        'soft-lg': '0 24px 50px -14px rgba(45,70,76,0.16)',
        'soft-xl': '0 32px 64px -16px rgba(45,70,76,0.20)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
