/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sterling-red': {
          500: '#CF2A2A',
          900: '#aa0000'
        }
      },
      boxShadow: {
        custom: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
})
