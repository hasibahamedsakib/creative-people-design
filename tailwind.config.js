/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Space Grotesk", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0f0f0f",
        secondary: "#fd9c06",
        gray: "#404040",
        lightGray: "#5B5F77",
        mediumGray: "#46535A",
      },
    },
  },
  plugins: [],
};
