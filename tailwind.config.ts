import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0e1630",
        primaryLight: "#171f38",
        primaryLightOP: "#808dad68",
        secondary: "#01d293",
        textPrimary: "#808dad",
        offCanvas: "rgba(0,0,0,0.54)"
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: "100%",
        md: "728px",
        lg: "984px",
        xl: "1050px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
