/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'JetBrains Mono'", ...defaultTheme.fontFamily.sans],
        basement: [
          "Basement Grotesk",
          "'JetBrains Mono'",
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        "hl-background": "#000",
        "hl-primary": "#fff",
        "hl-secondary": "#ff431c",
        "hl-tertiary": "#b1b1b1",
        "hl-background-secondary": "#151515",
        "hl-border": "#3b3b3b",
        // home page colors
        "hl-home-background": "#151515",
        "hl-home-background-bars": "#222222",
        "hl-home-text-gray": "#5E6B7E",
        "hl-home-card-background": "#222325",
        "hl-home-card-body": "#DDDDDD",
        "hl-scrollbar-background": "#101010",
        "hl-home-text-gray-2": "#808080",
        "hl-home-cta-background": "#EB5BE5" // to be used with 5% opacity
      },
      screens: {
        "3xl": "1900px"
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
    }),
    require("tailwind-scrollbar")({ nocompatible: true })
  ]
};
