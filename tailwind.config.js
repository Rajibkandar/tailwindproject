/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'primary-color':'#dba074'
    },
    keyframes: {
      'bounce-custom': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-5px)' }, // Adjust bounce height here
      },
    },
    animation: {
      'bounce-custom': 'bounce-custom 1s infinite',
    },
  },
  plugins: [],
}

