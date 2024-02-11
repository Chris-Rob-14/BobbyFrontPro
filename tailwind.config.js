/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: "#ff6100",
        ivoire: "#fff8eb",
        "bleu-nuit": "#0a2864",
        darkslateblue: {
          "100": "#1746a2",
          "200": "rgba(10, 40, 100, 0.9)",
          "300": "rgba(10, 40, 100, 0.5)",
        },
        lavender: "#e3efff",
        khaki: "#ead35b",
        darkkhaki: "#a7cb78",
        black: "#000",
        darkgray: {
          "100": "#b3b3b3",
          "200": "rgba(179, 179, 179, 0.9)",
        },
        orangered: "rgba(255, 97, 0, 0.9)",
        gray: "rgba(255, 255, 255, 0.9)",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        cocogoose: "COCOGOOSE",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        smi: "13px",
        "181xl": "200px",
        "58xl-2": "77.2px",
        "82xl-8": "101.8px",
        "76xl-9": "95.9px",
        "115xl-7": "134.7px",
        "31xl": "50px",
        "81xl": "100px",
        "71xl-4": "90.4px",
        "62xl": "81px",
        "57xl-3": "76.3px",
        "49xl": "68px",
        "106xl": "125px",
        "9xl-6": "28.6px",
      },
    },
    fontSize: {
      mini: "15px",
      lgi: "19px",
      "3xl": "22px",
      lg: "18px",
      "5xl-7": "24.7px",
      xl: "20px",
      "mid-9": "17.9px",
      "4xl-4": "23.4px",
      sm: "14px",
      "7xl": "26px",
      "xl-2": "20.2px",
      base: "16px",
      "5xl-4": "24.4px",
      "6xl": "25px",
      "11xl-6": "30.6px",
      "5xl": "24px",
      "24xl-2": "43.2px",
      "16xl": "35px",
      "mini-3": "14.3px",
      "lg-6": "18.6px",
      "12xl-7": "31.7px",
      "11xl-5": "30.5px",
      "3xs": "10px",
      "9xl-5": "28.5px",
      "4xl": "23px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1850: {
        raw: "screen and (max-width: 1850px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
