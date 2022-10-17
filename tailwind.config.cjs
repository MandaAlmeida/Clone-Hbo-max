/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        fundoHome: 'url(/background-home.png)',
        fundoPerfil1: 'linear-gradient(4.71239rad, rgb(252, 0, 196) 12%, rgb(255, 140, 230) 90%)',
        fundoPerfil2: 'linear-gradient(4.71239rad, rgb(116, 50, 255) 8%, rgb(254, 67, 213) 84%)',
        fundoPerfil3: 'linear-gradient(4.71239rad, rgb(102, 1, 229) 12%, rgb(196, 137, 255) 90%)',
        fundoPerfil4: 'linear-gradient(4.71239rad, rgb(49, 131, 255) 1%, rgb(143, 0, 255) 96%)'
      }
    },
  },
  plugins: [],
}
