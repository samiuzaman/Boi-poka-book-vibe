/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
      colors: {
        dark1: ["#131313"],
        dark2: ["#131313CC"],
        dark3: ["#131313B3"],
        dark4: ["#13131399"],
        myGreen: ["#23BE0A"],
        lightBlack2: ["#FFFFFF99"],
        btnBg: ["#E7FE29"],
        footerBg: ["#06091A"],
      },
    },
  },
  plugins: [require("daisyui")],
};
