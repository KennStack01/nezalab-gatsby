// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "poppins light", "ui-sans-serif", "system-ui"],
      serif: ["Helvetica", "poppins medium", "ui-serif", "Georgia"],
    },
    extend: {
      colors: {
        jaffa: {
          DEFAULT: "#F19D39",
          50: "#FFFFFF",
          100: "#FEFBF8",
          200: "#FBE4C8",
          300: "#F8CC98",
          400: "#F4B569",
          500: "#F19D39",
          600: "#E78510",
          700: "#B7690D",
          800: "#874E0A",
          900: "#583306",
        },
        abbey: {
          DEFAULT: "#58595B",
          50: "#CBCCCD",
          100: "#BEBFC1",
          200: "#A5A6A7",
          300: "#8B8C8E",
          400: "#717275",
          500: "#58595B",
          600: "#3F4041",
          700: "#262627",
          800: "#0D0D0D",
          900: "#000000",
        },
      },
    },
  },
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
};
