import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      backgroundImage: {
        home: "url('../public/Images/HomeBack.svg')",
        phoneDonate: "url('../public/Images/PhoneDonate.svg')",
        phoneBack: "url('../public/Images/PhoneLanding.svg')",
      },

      colors: {
        orange: '#F2A043',
        lightOrange: '#FCE7D0',
        gray: '#C4C6CA',
        overlay: "#141E30",
        light: '#F8F8F9',
        blue: '#001D23',
        lightBlue: '#00AEEF',
      },
    },
  },
  plugins: [],
} satisfies Config;
