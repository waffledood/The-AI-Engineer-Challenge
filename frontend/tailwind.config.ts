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
        /* ChatGPT-inspired palette: dark sidebar + darker main area */
        surface: {
          sidebar: "#171717",
          main: "#212121",
          input: "#2f2f2f",
          hover: "#2a2a2a",
        },
        border: {
          DEFAULT: "#3f3f3f",
          subtle: "#2a2a2a",
        },
        text: {
          primary: "#ececec",
          secondary: "#a1a1a1",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
