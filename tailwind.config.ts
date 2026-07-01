import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#0a0a0c",
        coreRed: "#ff2738",
        coreBlue: "#2388ff",
      },
      boxShadow: {
        red: "0 16px 50px rgba(255,39,56,.22)",
        blue: "0 16px 50px rgba(35,136,255,.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
