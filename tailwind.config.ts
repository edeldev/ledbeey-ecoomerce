import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2328",
        secondary: "#59636e",
        footer: "#151B23",
        textFooter: "#818b98",
        container: "#171717",
        accountColor: "#F7F5F4",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
} satisfies Config;
