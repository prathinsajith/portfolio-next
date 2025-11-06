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
        background: "#F5F6FA",
        foreground: "#001C48",
        surface: "#FFFFFF",
        primary: "#00205B",
        accent: "#D4AF37",
        link: "#0077C8",
        muted: "#E5E7EB",
        secondary: "#475569",
        destructive: "#DC2626",
      },
    },
  },
  plugins: [],
};

export default config;
