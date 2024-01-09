import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-png': "url('/hero-bg.png')",
      },
      colors: {
        'main-red': '#da4438',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite both',
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(-200px)' },
          to: { transform: 'translateX(100%)' },
        }
      }                    
    },
  },
  plugins: [],
}
export default config
