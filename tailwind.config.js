/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'red-accent': '#E63946',
        'blue-accent': ' #1D3557', 
        'light-blue-accent': '#457B9D',
        'lightest-blue-accent': '#A8DADC',
        'white-accent': '#F1FAEE',
      },
      spacing: {
        'image-width': '30rem',
        '100': '40rem',
        'image-one-left': '47rem',
        'image-one-top': '36rem',
        'image-two-left': '59rem', 
        'image-three-left': '28rem', 
        'div-home-width': ' 23rem', 
      },
    },
  },
  plugins: [],
}
