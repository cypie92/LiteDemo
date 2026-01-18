import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e0b152",
        "primary-dark": "#c2963f",
        "secondary": "#220A0F",
        "background-light": "#f8f7f6",
        "background-dark": "#201b12",
        "surface-light": "#ffffff",
        "surface-dark": "#2d261a",
      },
      fontFamily: {
        "display": ["var(--font-epilogue)", "sans-serif"],
        "body": ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "md": "0.5rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      boxShadow: {
        'luxury': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'texture': 'radial-gradient(#e0b152 0.5px, transparent 0.5px)',
      }
    },
  },
  plugins: [],
};
export default config;
