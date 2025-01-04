import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "url('/images/bg.jpg')",
        event_bg: "url('/images/background.svg')",
        card_border_bg: "url('/images/card-border.svg')",
        club_bg: "url('/images/club.png')",
      },
      boxShadow: {
        xs: "1px 1px 0 0 rgba(250, 134, 27, 0.5)",
        md: "3px 3px 0 0 rgba(250, 134, 27, 0.5)",
        "3xl": "10px 10px 0 0 rgba(250, 134, 27, 0.5)",
      },
      dropShadow: {
        sm: "1px 1px 0 rgba(250, 134, 27, 0.5)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
  ],
} satisfies Config;
