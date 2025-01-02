/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to point to your React files
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        light: "var(--color-light)",
        blue: "var(--color-blue)",
        red: "var(--color-red)",
        grey: "var(--color-grey)",
        purple: "var(--color-purple)",
        "dark-red": "var(--color-dark-red)",
        cutomGray: '#ccc',
      },
    },
  },
  plugins: [], // You can add any Tailwind plugins here if needed
};
