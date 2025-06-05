/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        gold: '#D4AF37',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          'textDecoration': "underline",
          'text-decoration-color': "rgb(192, 183, 176)",
        },
      }
      addUtilities(extendUnderline);
    }
  ],
}