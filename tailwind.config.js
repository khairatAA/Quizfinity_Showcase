/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#614BF2",
        secondary: "#D8DBFF",
        tertiary: "#1E1F24",

        lightBlue: "#F7F8FF",
        lightPink: "#E7E8EC",
        lightGreen: "#E4E7FF",
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      // OpenSans: ["Open Sans", "sans-serif"],
      IBMPlex: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
}

