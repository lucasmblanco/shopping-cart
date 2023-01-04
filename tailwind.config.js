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
      gridTemplateColumns:{
        'home': 'repeat(24, 5rem)',
        
      },
      gridTemplateRows:{
        'home-rows': ' repeat(20, 2rem)',
      },
      gridColumnStart:{
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        
      }, 
      gridRowStart:{
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        
      }, 
      colors: {
        'red-accent': '#E63946',
        'light-red-accent': '#FA5F6A',
        'blue-accent': ' #1D3557', 
        'light-blue-accent': '#457B9D',
        'lightest-blue-accent': '#A8DADC',
        'white-accent': '#F1FAEE',
        'grey-accent': '#5C5C5C'
      },
      spacing: {
        'image-width': '30rem',
        '100': '40rem',
        'image-one-left': '47rem',
        'image-one-top': '36rem',
        'image-two-left': '59rem', 
        'image-three-left': '28rem', 
        'div-home-width': ' 23rem', 
        'cart-left-position': '66rem'
      },
      keyframes: {
       'fade-in-bck': {
        '0%': { transform: 'translateZ(80px)', opacity: '0' },
        '100%': { transform: 'translateZ(0)', opacity: '1' }
       },
       'fade-in-bck-2': {
        '0%': { transform: 'translateZ(80px)', opacity: '0' },
        '100%': { transform: 'translateZ(0)', opacity: '1' }
       },
       'fade-in-bck-3': {
        '0%': { transform: 'translateZ(80px)', opacity: '0' },
        '100%': { transform: 'translateZ(0)', opacity: '1' }
       },
        
      }, 
      animation: {
        'fade-in-bck': 'fade-in-bck 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both',
        'fade-in-bck-2': 'fade-in-bck 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.3s both',
        'fade-in-bck-3': 'fade-in-bck 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.8s both'
      }
    },
  },
  plugins: [],
}
