import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { transform: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config

