import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        siteBg: "#102b2a",
        siteColor: "rgb(223 63 1 / 1)",
        cardBg: "rgb(15 39 39 / 1)",
        imghover: "rgba(255, 255, 255, 0.3)",
        navBg: "rgb(15 39 39)",
        footerBg: "rgb(0 0 0 / 44%)",
      },
    },
  },
  plugins: [],
};
export default config;
