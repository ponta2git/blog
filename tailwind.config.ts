import type { Config } from "tailwindcss";
import Colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/elements/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/templates/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: Colors.neutral,
      blue: Colors.sky,
      red: Colors.rose,
    },
    extend: {},
  },
  plugins: [],
};

export default config;
