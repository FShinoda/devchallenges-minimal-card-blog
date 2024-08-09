/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "strong-purple": 'var(--strong-purple)',
        "light-purple": 'var(--light-purple)',
        "light-gray" : 'var(--light-gray)',
        "off-white" : 'var(--off-white)',
        "pure-white" : 'var(--pure-white)',
        "almost-black" : 'var(--almost-black)',
        "dark-gray" : 'var(--dark-gray)'
      }
    },
  },
  plugins: [],
}

