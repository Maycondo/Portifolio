/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-slider": "infiniteSlider 20s linear infinite",
        "infinite-slider-reverse": "infiniteSliderReverse 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" },
        },
        infiniteSliderReverse: {
          "0%": { transform: "translateX(calc(-250px * 5))" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [], // Pode deixar plugins vazio se não estiver usando nenhum
};
