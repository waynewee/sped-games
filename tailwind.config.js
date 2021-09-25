module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      "4xl": "3rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    backgroundSize: {
      full: "100% 100%",
    },
    fontFamily: {
      handwriting: ["'Patrick Hand'", "cursive"],
    },
    extend: {
      backgroundImage: {
        yellow:
          "linear-gradient(0deg, rgba(254,243,199,1) 0%, rgba(251,191,36,1) 50%)",
      },
      animation: {
        starSpin: "starSpin 4s ease-in-out infinite",
        appear: "appear 0.3s cubic-bezier(0.3, 0, 0.4, 1)",
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
