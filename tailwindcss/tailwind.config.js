 /** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html"],
  theme: {
    extend: {
      colors(theme) {
        return {
          primary: {
            50: 'hsl(260, 100%, 95%)',
            300: 'hsl(264, 82%, 80%)',
            500: 'hsl(263, 55%, 52%)'
          },
          gray: {
            ...theme.colors.gray, 
            100: 'hsl(214, 17%, 92%)',
            200: 'hsl(0, 0%, 81%)',
            400: 'hsl(224, 10%, 45%)',
            500: 'hsl(217, 19%, 35%)'
          },
          darkblue: {
            DEFAULT: 'hsl(219, 29%, 14%)'
          } 
        }
      }
    }
  },
  plugins: [],
}