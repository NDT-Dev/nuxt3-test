/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@acmecorp/tailwind-base')
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    gridRow: {
      flexShrink: {
        'span-16': 'span 16 / span 16',
      }
    },
    gridRowStart: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridRowEnd: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
variants: {
  extend: {
    display: ['group-focus']
  },
},
}

