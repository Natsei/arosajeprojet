module.exports = {
  content: [
    // Chemins vers vos fichiers où les classes Tailwind seront utilisées :
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Ajoutez d'autres chemins ici si nécessaire
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '7.5': '3rem',
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {
    // Ici, vous pouvez spécifier les variantes (états) pour lesquels certains styles sont générés
    // Par exemple : 'extend': { opacity: ['disabled'], cursor: ['hover', 'focus'] }
    extend: {},
  },
  plugins: [
    // Ici, vous pouvez ajouter des plugins Tailwind supplémentaires si nécessaire
    // Par exemple : require('@tailwindcss/forms'), require('@tailwindcss/typography')
  ],
};
