/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const { colors: defaultColors} = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
      },
      padding: {
        "5": "5px",
        
      },
      height: {
        "737": "737px"
      },
      minWidth: {
        "688": "688px"
      },
      margin: {
        "140": "140px",
        "18": "18px"
      },
      marginTop: {
        "66": "72px"},
      width: {
        "489.013": "489.013px",
        "1064": "1000px",
        "688": "688px"
      },
      bottom: {
        "6px": "6px"
      },
      fontSize: {
        "14": "14px",
      },
      colors: {
        "background-color": "#F5F0EC",
        "main-color": "#DCC1AB",
        "button-main-color": "#1B5B31",
        "button-text-color": "#F5F0EC"
      },
      borderRadius: {
        "button": "200px"
      },
      letterSpacing: {
        "-0.14": "-0.14px"
      },
      lineHeight: {
        "70": "70px"
      },
     
    },
  },
  plugins: [],
}

