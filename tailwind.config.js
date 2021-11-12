module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      center: true,
      padding: {
        default: theme("spacing.4"),
        sm: theme("spacing.5"),
        lg: theme("spacing.6"),
        xl: theme("spacing.8"),
      },
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
