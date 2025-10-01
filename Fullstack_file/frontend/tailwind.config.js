/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // all files inside app/
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // all files inside components/
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // optional, if you add pages/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // custom blue
        secondary: "#1e293b", // slate
        accent: "#10b981",    // green accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
