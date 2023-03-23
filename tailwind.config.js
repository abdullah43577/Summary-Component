/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/*.jsx', './src/components/*.jsx', './public/index.html'],
    safelist: ['text-lightRed', 'text-orangeYellow', 'text-greenTeal', 'text-cobaltBlue'],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      colors: {
        // Primary Colors
        lightRed: 'hsl(0, 100%, 67%)',
        orangeYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',

        // Gradients
        lightSlateBlueBg: 'hsl(252, 100%, 67%)',
        lightRoyalBlueBg: 'hsl(241, 81%, 54%)',
        violetBlueCircle: 'hsla(256, 72%, 46%, 1)',
        persianBlueCircle: 'hsla(241, 72%, 46%, 0)',

        // Neutral
        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
};
