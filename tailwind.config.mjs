/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E8',
          200: '#FFF0C9',
          300: '#FFE4A0',
          400: '#FFD470',
          500: '#F5C34B',
        },
        espresso: {
          50: '#F5F0EB',
          100: '#E8DED3',
          200: '#D4C4B0',
          300: '#B89E82',
          400: '#9C7B5C',
          500: '#7A5C3E',
          600: '#5C4330',
          700: '#3E2D20',
          800: '#2A1E15',
          900: '#1A120D',
          950: '#0F0A07',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
