const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const isProduction = !process.env.ROLLUP_WATCH

module.exports = {
  plugins: [
    require("postcss-import")(),
    tailwindcss("./tailwind.config.js"),
    ...(isProduction ? [purgecss] : [])
  ]
};