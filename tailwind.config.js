// import foods from "./src/assets/foods.jpg"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ff4343",
        dark: {
          soft: "#323334",
        }
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'foods-bg': `url(${foods})`,
        'foods-bg' : "url('./src/assets/foods.jpg')",
      },
    },
  },
  plugins: [],
}
