module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/background.jpg')",
      },
      animation: {
        starSpin: "starSpin 4s ease-in-out infinite",
      },
      keyframes: {
        starSpin: {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(360deg)" },
          "60%, 100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
