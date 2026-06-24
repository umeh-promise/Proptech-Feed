/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,svg,svg}",
  ],
  theme: {
    fontFamily: {
      openRunde: "var(--font-open-runde), sans-serif",
      sfPro: "var(--font-sf-pro), sans-serif",
    },
    colors: {
      transparent: "transparent",
      background: "#171717",
      foreground: "#5a5a5a",
      white: "#ffffff",
      black: "#000000",
      primary: "#2F8F63",

      "light-grey-100": "#F5F5F5",
      "light-grey-150": "#364153",
      "light-grey-200": "#F9FAFB",
      "light-grey-300": "#525252",
      "light-grey-400": "#E2E2E2",
      "light-grey-600": "#4B5563",

      "grey-100": "#B8B8B8",
      "grey-200": "#8A8A8A",
      "grey-250": "#737791",
      "grey-300": "#F7F7F7",
      "grey-350": "#D2D5DA",
      "grey-400": "#E1DEDE",
      "grey-500": "#ABA7AF",
      "grey-700": "#5A5A5A",
      "grey-800": "#4A5565",
      "grey-850": "#1F2937",
      "grey-900": "#7D7D7D",

      "dark-100": "#0F1113",
      "dark-150": "#D7DCE0",
      "dark-200": "#676A67",
      "dark-300": "#111928",
      "dark-400": "#15134B",
      "dark-500": "#344054",
      "dark-600": "#3A434B",
      "dark-700": "#101828",
      "dark-800": "#030712",
      "dark-900": "#111827",

      "green-100": "#1D3A25",
      "green-200": "#1D953D",
      "green-300": "#5ED85B",
      "green-350": "#00E096",
      "green-400": "#3CD856",
      "green-450": "#71C06C",
      "green-500": "#91CE8D",
      "green-550": "#BBF7D0",
      "green-600": "#5AB554",
      "green-700": "#65C55E",
      "green-800": "#085003",
      "green-900": "#45BF55",

      "yellow-100": "#FFD666",
      "yellow-500": "#FF947A",

      "blue-100": "#1CC4D4",
      "blue-300": "#0095FF",
      "blue-500": "#1976D2",

      "purple-100": "#E1F3E0",
      "purple-200": "#7800E0",
      "purple-300": "#F3E8FF",
      "purple-500": "#BF83FF",
      "purple-900": "#3B0876",

      "red-10": "#FEF0F2",
      "red-15": "#FFF8F1",
      "red-50": "#FCD9BD",
      "red-75": "#FEF2F2",
      "red-100": "#E7000B",
      "red-150": "#FFCCD3",
      "red-200": "#9F2D00",
      "red-300": "#771D1D",
      "red-400": "#DC2626",
      "red-500": "#A50036",
      "red-600": "#C70036",
      "red-800": "#FB2C36",
    },

    fontSize: {
      xxs: "1rem",
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      md: "1.8rem",
      lg: "2rem",
      xl: "2.4rem",
      xl2: "2.6rem",
      xl3: "2.8rem",
      xl4: "3rem",
      xl5: "3.2rem",
      xl6: "3.4rem",
      xl7: "3.6rem",
      xl8: "4rem",
      xl9: "4.2rem",
    },

    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
        base: "425px",
        xl2: "1440px",
      },
      maxWidth: {
        // default: "144rem",
        default: "192rem",
      },
      backgroundImage: {
        radial:
          "radial-gradient(100.56% 108.88% at 0% 0%, #085003 0%, #65C55E 100%)",
        "grid-dots": 'url("/svgs/grid-dots.svg")',
        "success-dots": 'url("/svgs/success-dots.svg")',
        "primary-gradient": "linear-gradient(180deg, #91CE8D 0%, #5AB554 100%)",
      },
      boxShadow: {
        1: "0px 4px 32px rgba(0, 0, 0, 0.1)",
        danger:
          "0px 10px 15px -3px rgba(251, 44, 54, 0.3), 0px 4px 6px -4px rgba(251, 44, 54, 0.3)",
        success:
          "0px 10px 15px -3px rgba(0, 201, 80, 0.3), 0px 4px 6px -4px rgba(0, 201, 80, 0.3);",
      },
    },
  },
  plugins: [],
} satisfies Config;
