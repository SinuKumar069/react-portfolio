/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
      },
    },
  },
  keyframes: {
    slideDown: {
      "0%": { transform: "translateY(-100%)" },
      "100%": { transform: "translateY(0)" },
    },
  },
  animation: {
    "slide-down": "slideDown 0.5s ease-out forwards",
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

