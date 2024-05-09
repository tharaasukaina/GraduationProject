/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customPurple: '#520462', // Define your custom color
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

