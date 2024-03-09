import type { Config } from "tailwindcss";


const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "alice-blue": "var(--alice-blue)",
        "platinum": "var(--platinum)",
        "thistle": "var(--thistle)",
        "paynes-gray": "var(--paynes-gray)",
        "davys-gray": "var(--davys-gray)",
      },
      fontFamily: {
        "font-titre": 'var(--font-monkey)',
        "font-text": 'var(--font-rubik)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  }
};
export default config;
