/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
