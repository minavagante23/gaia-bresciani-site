import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F2F5F4',
        primary: {
          DEFAULT: '#243D42',
          light: '#35555C',
          dark: '#1A2E32',
        },
        accent: {
          DEFAULT: '#5A7D74',
          light: '#7A9A92',
          dark: '#4A6B63',
          /* Variante testo/CTA: contrasto AA sul bianco */
          deep: '#3E5F58',
        },
        muted: '#4A5F65',
        subtle: '#566B71',
        whatsapp: '#128C7E',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(36,61,66,0.10)',
        'soft-lg': '0 24px 50px -14px rgba(36,61,66,0.16)',
        'soft-xl': '0 32px 64px -16px rgba(36,61,66,0.20)',
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
