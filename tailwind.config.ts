import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': { 'max': '639px' },
      // => @media (max-width: 639px) { ... } Mobile

      'sm': '640px',
      // => @media (min-width: 640px) { ... } // Don't use

      'md': '768px',
      // => @media (min-width: 768px) { ... } Tablet

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } Laptop

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... } Laptop L 

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
