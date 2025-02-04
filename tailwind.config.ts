import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        earth: {
          50: "#f5f3ef",
          100: "#e6e0d8",
          200: "#d5cabb",
          300: "#c2b19b",
          400: "#ab957d",
          500: "#8d7659",
          600: "#735e48",
          700: "#5a493a",
          800: "#443a2f",
          900: "#322b24",
        },
        forest: {
          50: "#f3f7f3",
          100: "#e1ebe1",
          200: "#c5d8c5",
          300: "#a3c1a3",
          400: "#7fa47f",
          500: "#5f835f",
          600: "#4b684b",
          700: "#3d533d",
          800: "#324232",
          900: "#2a362a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
