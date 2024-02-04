/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E2E4E5",
        stripColor: "#292828",
        buttonColor: "#535353",
      },
    },
    fontFamily: {
      custom: ["GloriaHallelujah", "sans"],
      reckless: ["recklessneue", "sans"],
    },
  },
  plugins: [],
};
