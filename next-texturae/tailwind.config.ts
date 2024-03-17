import type { Config } from "tailwindcss";

/**
 * création des variables de couleurs
 * ajout de la librairie daisyui
 * création des thèmes personalisés, clair et sombre
 */

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
    themes: ["light",
    {
      mylighttheme: {
        "primary": "#f4faffff",
        "secondary": "#4f646fff",
        "accent": "#f4faffff",
        "neutral": "#535657ff",
        "base-100": "#f4faffff"
      }
    },
    {
      mydarktheme: {
        "primary": "#535657ff",
        "secondary": "#4f646fff",
        "accent": "#f4faffff",
        "neutral": "#dee7e7ff",
        "base-100": "#535657ff"
      }
    }
  ],
  }
};
export default config;
