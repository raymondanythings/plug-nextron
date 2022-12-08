/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   // use colors only specified
    //   // white: colors.white,
    //   // gray: colors.gray,
    //   // blue: colors.blue,
    // },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
