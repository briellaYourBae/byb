// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./public/**/*.{html,js}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./index.html",
    "./ach.html",
    "./biodata.html",
    "./project.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'custom-bg': '#1F252E'
      }
    },
  },
  plugins: [],
}