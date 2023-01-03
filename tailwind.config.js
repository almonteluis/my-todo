/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#000500",
        secondary: "#362417",
        tertiary: "#92817A",
        quaternary: "#F1DABF",
        quinary: "#FFFBFF",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      width: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      height: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      minWidth: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      minHeight: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      maxWidth: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      maxHeight: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
  purge: {
    // Enable purging in production only
    enabled: process.env.NODE_ENV === "production",
    // Purge all unused styles
    content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  },
};
