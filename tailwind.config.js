/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        void: '#070a10',
        panel: '#0d131f',
        card: '#131b2c',
        line: '#1e293f',
        edge: '#324468',
        ink: '#f0f4fc',
        mute: '#8696b0',
        cyan: { DEFAULT: '#5ee7ff', soft: '#8cf0ff' },
        heat: '#ff5a3c',
        gold: '#ffc233',
        lime: '#6bf28f',
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
