/** @type {import('tailwindcss').Config} */
export default {
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(6, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-1.5": "span 3 / span 3",
      },
      colors: {
        "primary-1": "#b97979",
        "primary-2": "#468585",
        "primary-3": "#DEF9C4",
        "primary-4": "#50B498",
        "primary-6": "#BCFCC9",

        "primary-5": "#F56960",
        "blue-10": "#6482AD",
        "pink-10": "#FFB0B0",
        "pink-2": "#FF7777",
        "background": "#EFF0F5",
        "primary-7": "#FEF08c",
      },
      boxShadow: {
        "3d": "0 4px 12px rgba(0, 0, 0, 0.3), 0 0 25px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
      backgroundImage: {
        'logo': "",
      },
    },
  },
  plugins: [],
};
