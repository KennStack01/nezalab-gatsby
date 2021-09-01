// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "poppins light", "ui-sans-serif", "system-ui"],
      serif: ["Helvetica", "poppins medium", "ui-serif", "Georgia"],
    },
  },
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
};
