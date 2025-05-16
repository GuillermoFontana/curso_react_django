/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "footer-bg": 'rgb(192, 183, 176)',
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