import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "oba-orange": "#EA6229",
        "oba-light": "#F6F6F6",
        "oba-dark": "#3D3D3D",
      },
    },
  },
  plugins: [],
};
export default config;
