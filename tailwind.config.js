const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts,tsx}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
           
            scale: {
            },
            screens: {
                xs: '375px',
                '2xl': '1440px',
            },
            colors: {
        primary: 'rgba(26, 12, 40, 1)',
        secondary: '#FFF2C1',
        light: '#111827',
        light2: '#1f2937',
        light3: '#374151',
      },
             
        },
    },
  plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],

};