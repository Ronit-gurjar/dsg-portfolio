import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'Theme-black':'#1E1E1E',
      'Theme-cream':'#FEE9D0',
      'white': '#ffffff'
    },
    screens: {
      'sm': '375px',
      'lg': '1024px',
    }
  },
  plugins: [require("daisyui")],
}
export default config
