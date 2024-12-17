/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "540px",
      mmd: "767px",
      lg: "1080px",
    },
    colors: {
      "-blue": "#4170E8",
      "-white": "#ffff",
      "-black": "#000",
      "-gray": "#e4e4e7",
    },
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slideRight: "slideRight 10s linear infinite",
        slideLeft: "slideLeft 10s linear infinite",
      },
      boxShadow: {
        customShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
