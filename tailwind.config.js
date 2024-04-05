/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ".//components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        droplet: {
          '0%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.2)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      animation: {
        droplet: 'droplet 0.4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

