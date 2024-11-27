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
        background1234: "url('../public/Images/Contact/BackGround234.svg')",
        phoneAbout: "url('../public/Images/PhoneAbout.svg')",
        phoneCauses: "url('../public/Images/PhoneCauses.svg')",
        phonePages: "url('../public/Images/PhonePages.svg')",
        phoneContact: "url('../public/Images/PhoneContact.svg')",
        phoneDonatte: "url('../public/Images/PhoneDonateLanding.svg')"
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
