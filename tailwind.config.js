/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width:{
        'calc[100%-250px]': 'calc(100% - 250px)'
      },
      height:{
        "60": "60px"
      },
      colors:{

      }
    },
  },
  plugins: [],
}

