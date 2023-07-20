/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif"
    },
    extend: {
      boxShadow: {
        'custom-shadow': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customTextColor: '#400E03',
        customBorderColor: '#E0D8D7',
        customPink: '#FDE4E5',
        customRed: '#ED1C24',
        customGray: '#434448',
        customDarkRed: '#400f03'
      },
    },
  },
  plugins: [],
}
