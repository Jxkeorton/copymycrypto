module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_3f": "#0000003f" },
        blue: { 800: "#2e77ae" },
        indigo: { 50: "#e0eaf4" },
        amber: { 600: "#ffb700" },
        blue_gray: { 900: "#0d2237" },
        orange: { 400: "#ff8e2b" },
        white: { A700: "#ffffff" },
        gray: { 300: "#e5e5e5" },
      },
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat" },
      boxShadow: { bs: "-11px 11px  13px 0px #0000003f" },
      backgroundImage: { gradient: "linear-gradient(116deg ,#2e77ae,#0d2237)" },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
