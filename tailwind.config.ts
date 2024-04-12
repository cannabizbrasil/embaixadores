import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '4xl': '5rem',
      },
      colors: {
        'roxo': '#871c86', // roxo
        'verde': '#00ff01', // verde
        'laranja': '#ff9201', // laranja
        'azul': '#0085ca', // azul
        'azulclaro': '#12ffcb' // azulclaro
      }
    },
    strokeWidth: {
      '4': '4px',
      'medio': '100px',
      'largo': '200px',

    }
  },
  plugins: [],
}
export default config