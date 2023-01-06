/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lucky-body": ["LuckysTale-Body", ...defaultTheme.fontFamily.sans],
        "lucky-bold": ["LuckysTale-Bold-New", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, theme }) => {
      addBase({
        html: {
					scrollBehavior: 'smooth'
				},
        body: {
          fontFamily: theme("fontFamily.open-sans"),
        },
      }),
        addComponents({
          ".screen-responsive": {
            marginInline: "auto",
          },
        })
    }),
  ],
}
