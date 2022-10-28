/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fd8b4b",
          dark: "#fd7224"
        },
        secondary: {
          DEFAULT: "#231d1f"
        },
        error: {
          DEFAULT: "#f5222d"
        }
      }
    }
  },
  plugins: []
};
