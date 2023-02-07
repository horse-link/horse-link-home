/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("tailwind-heropatterns")({
      patterns: ["houndstooth"],
      colors: {
        default: "rgb(28,160,129)"
      },
      opacity: {
        default: "0.4"
      }
    })
  ]
};
