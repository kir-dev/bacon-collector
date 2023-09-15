import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      brand: {
        100: '#e4d5d1',
        200: '#c9aca3',
        300: '#ad8276',
        400: '#925948',
        500: '#772F1A',
        600: '#5f2615',
        700: '#471c10',
        800: '#30130a',
        900: '#180905'
      },
      background: '#EDF2F7',
      ...colors
    },
    extend: {
      backgroundImage: {
        'world-map': "url('/images/world.svg')"
      }
    }
  },
  plugins: []
}
export default config
