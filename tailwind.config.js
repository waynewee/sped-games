module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bubblegum: ["'Bubblegum Sans'", "cursive"],
    },
    extend: {
      backgroundImage: {
        main: "url('/background.jpg')",
      },
      animation: {
        starSpin: "starSpin 4s ease-in-out infinite",
        appear: "appear 0.5s ease-in",
      },
      keyframes: {
        starSpin: {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(360deg)" },
          "60%, 100%": { transform: "rotate(0deg)" },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      borderColor: ["disabled"],
    },
  },
  plugins: [],
};
