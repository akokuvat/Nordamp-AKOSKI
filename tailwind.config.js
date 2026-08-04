/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        north: '#0C1826',
        navy: '#16293F',
        'navy-2': '#1F3A5F',
        steel: '#5B7A99',
        mist: '#8CA0B3',
        ice: '#F4F7FA',
        ink: '#15212E',
        brand: '#2C51E6',
        'brand-lite': '#7E9CFF',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: { content: '1180px' },
    },
  },
  plugins: [],
};
