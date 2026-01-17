/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "Avenir-black": "Avenir-black",
        "Avenir-book": "Avenir-book",
        "Avenir-heavy": "Avenir-heavy",
        "Avenir-light": "Avenir-light",
        "Avenir-regular": "Avenir-regular",
        "Poppins-black": "Poppins-black",
        "Poppins-italic": "Poppins-italic",
        "Skillet-regular": "Skillet-regular",
      },
      colors: {
        brand: {
          primary: "#883D85",
          secondary: "#FFFFFF",
          background: "#F8F4FA",
        },
        heading: {
          primary: "#704896",
          secondary: "#7B707B",
        },
        pink: {
          pinkSherbet: "#F58EA8",
          vanillaIce: "#F0839F",
          lightPink: "#E989A1",
          darkPink: "#96364F",
          lightPastelPink: "#9F4C61",
          pastelPink: "#F5D0D0",
          mediumPastelPink: "#FBDEDE",
          deepPastelPink: "#BA697D",
          pastel: "#FCE0DC",
          piggyPink: "#FFE6EC",
          pinkLace: "#F7E5F1",
          queenPink: "#E4C2E2",
        },
        yellow: {
          warning: "#E9D502",
        },
        purple: {
          lightPurple: "ffffff4d",
          plum: "#883D85",
          jacarta: "#4B2C5E",
          africanVoilet: `#B57FB3`,
          magnolia: "#F5ECFF",
          maxPurple: "#7B3479",
          frenchLilac: "#836C8F",
          americanPurple: "#471457",
          lavender: "#E9DDEF",
          lightPastelPurple: "#AC99D3",
          darkPastelPurple: "#9E609B",
          pastelPurple: "#753D88",
          mediumPastelPurple: "#805AA4",
          deepPastelPurple: "#6D3C9C",
          deepPurple: "#63347B",
          lightPastel: "#DEBDDE",
          royalPurple: "#805AA4",
          darkLavender: "#6C4392",
          lavenderWeb: "#EDE7F8",
          maximumPurple: "#7A3278",
          platinum: "#ECD6EB",
          darkPurple: "#63347B",
          eminence: "#63347B",
          bluebell: "#A38ECF",
          wisteria: "#d19ade",
        },
        orange: {
          topaz: "#FFC981",
          snow: "#FFF7F6",
        },
        red: {
          error: "#CC0E0E",
        },
        grey: {
          lightSilver: "#D9D2DC",
          brightGrey: "#F3E9F3",
        },
        voilet: {
          americanVoilet: "#5A2391",
        },
        brown: {
          chocolate: "#5E1F3C",
        },
        whitefloral: "#FFF9F4",
        seashell: "#FFF0EE",
        input: {
          placeholder: "#8D8D8D",
        },
        silver: {
          quickSilver: "#A3A0A0",
        },
        darkLiver: "#505050",
      },
    },
  },
  plugins: [],
};
