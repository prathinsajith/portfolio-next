import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--card)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        link: "#0077C8",
        muted: "var(--muted)",
        secondary: "var(--secondary)",
        destructive: "var(--destructive)",
      },
    },
  },
  plugins: [],
};

export default config;
