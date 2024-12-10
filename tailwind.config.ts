import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      
      },
      colors:{
        primary: {
          700: "#F7931A",
          600: "#F1AD5B",
          500: "#F2B974",
          400: "#F3CEA0",
          300: "#F58D06FF",
          200: "#F3E5D4",
          100: "#F8F0E7",
          50: "#FAF7F4",
        },
        sky:{
          1:"#F3F9FF",
          2:''
        },
        black:{
          1:"#1E1E1E"
        },
        accent: {
          DEFAULT: "#F7931A",
          hover: "#E6B30E2FF",
          7: "",
        },
        primarygradient: {
          primary: "linear(90deg, #F7931A 0%,#FAF7F4 100%)",
        },
      },
      keyframes:{
        slide:{
          '0%':{backgroundPosition: '0% 50%'},
          '100%': { backgroundPosition: '100% 50%' },
        },
       fadIn:{
        '0%':{opacity:'0'},
        '100%':{opacity:'1'}
       },
       slideUp: { '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' }, },
          
      },
        animation:{
        fadeIn: 'fadeIn 1s ease-in-out', bounce: 'bounce 1s infinite',
      }

    },
  },
  plugins: [],
};
export default config;
