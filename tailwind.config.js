module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#3b82f6', // Modern Blue
          600: '#2563eb',
        },
        dark: {
          bg: '#0f172a', // Slate 900
          card: '#1e293b', // Slate 800
        }
      }
    },
  },
  plugins: [],
}
