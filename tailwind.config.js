const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: colors.white,
        gray: {
          header: "#9E9E9E",
          banner: "#D9D9D9",
          test: "#E5E5E5",
          "item-opacity": "rgba(0, 0, 0, 0.5)",
          video: "#F7F7F7",
          "dark-gray": "#5B6876",
          "details-bg": "#F5F5F5",
          "contact-opacity": "rgba(255, 255, 255, 0.9)",
          "sideNav-opacity": "rgba(0, 0, 0, 0.6)",
          "input-border": "rgba(0, 0, 0, 0.12)",
          "input-background": "rgba(255, 255, 255, 0.01)",
        },
        pink: {
          primary: "#FC3358",
          card: "#FFE8E8",
        },
        black: {
          black: colors.black,
          "item-text": "#1F1F1F",
          "item-paragraph": "#8491A0",
          "item-paragraph-sec": "#6D6D6D",
          "primary-card": "#7E7C7C",
          "secondary-card": "#2E2E2E",
        },
      },

      maxWidth: {
        "screen-lg": "1200px",
        // "screen-r": "608px",
        // "screen-md-r": "720px",
        // "screen-lg-r": "960px",
        // "screen-xl-r": "1200px"
      },
      minHeight: {
        72: "18rem",
        92: "23rem",
        123: "30.75rem",
        87: "21.75rem",
        140: "35rem",
      },
      fontFamily: {
        body: ['"Open Sans"'],
        roboto: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        allison: ["Allison", "cursive"],
      },
      fontSize: {
        "2.5xl": "28px",
        "3.5xl": "32px",
        "4.5xl": "40px",
        "7.5xl": "80px",
        "contact-heading": "55px",
        banner: "192px",
        "small-banner": "153.5px",
        title: "200px",
        "title-small": "160px",
        "title-xsmall": "128px",
        "title-double-x-small": "102.5px",
        "title-tr-x-small": "60px",
      },

      boxShadow: {
        button: "0px 4px 4px 0px #00000040",
        grid: "0px -31px 56px rgba(0, 0, 0, 0.1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "0",
        },
        // screens: {
        //   sm: "608px",
        //   md: "720px",
        //   lg: "960px",
        //   xl: "1200px",
        // },
        screens: {
          DEFAULT: "90%",
          sm: "90%",
          md: "90%",
          lg: "85%",
          xl: "85%",
          // "2xl": "85%",
        },
      },
      spacing: {
        "2/5": "40%",
        "3/5": "60%",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25.25: "6.3125rem",
        87: "21.75rem",
        92: "23rem",
        114: "28.625rem",
        123: "30.75rem",
        140: "35rem",
      },
    },
  },
  // important: true,

  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
