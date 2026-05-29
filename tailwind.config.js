/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        'craft-dark': '#1A1A1A',
        'craft-gold': '#C9963A',
        'craft-gold-light': '#E8B84B',
        'craft-navy': '#1C2B3A',
        'craft-warm': '#E8DDD0',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        craftease: {
          "primary": "#C9963A",
          "primary-content": "#ffffff",
          "secondary": "#1C2B3A",
          "secondary-content": "#ffffff",
          "accent": "#E8B84B",
          "neutral": "#1A1A1A",
          "base-100": "#F5F0E8",
          "base-200": "#EDE6DA",
          "base-300": "#E0D6C8",
          "base-content": "#1A1A1A",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: false,
  },
}
