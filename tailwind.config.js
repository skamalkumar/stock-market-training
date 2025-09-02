/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // App directory
    './pages/**/*.{js,ts,jsx,tsx}', // Optional: if using /pages too
    './components/**/*.{js,ts,jsx,tsx}', // Your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
