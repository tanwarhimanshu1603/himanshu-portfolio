/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nodejs': '#44883e',
        'bootstrap': '#8800c7'
      }
    },
    fontFamily: {
      signature: ['Great Vibes']
    }
  },
  plugins: [],
}
