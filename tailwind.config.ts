import type { Config } from "tailwindcss"
import typographyPlugs from "@tailwindcss/typography"

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lucky-head": "LuckysTale-Heading",
        "lucky-body": "LuckysTale-Body",
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono"],
      },
    },
  },
  plugins: [typographyPlugs],
} as Config
