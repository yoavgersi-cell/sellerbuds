import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C4612C',
        background: '#FFF8F4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            h1: { fontFamily: 'Playfair Display, serif' },
            h2: { fontFamily: 'Playfair Display, serif' },
            h3: { fontFamily: 'Playfair Display, serif' },
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
