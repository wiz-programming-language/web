/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3399FF',
        'secondary': '#FFD500',
        'dark': '#00060B',
        'contrast-dark': '#000918',
        'light-dark': '#000f24',
        'light': '#f7f7f7',
        'light-gray': 'rgb(205, 205, 205)',
        'dark-gray': 'rgb(105, 105, 105)',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
      },
      fontFamily: {
        'quantum': ['Quantum', 'sans-serif'],
        'chakra': ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}
