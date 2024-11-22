import { colors } from './src/shared/theme/colors'
import { fontFamily, fontSize } from './src/shared/theme/font'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    fontSize,
    fontFamily,
  },
  plugins: [],
} satisfies Config
