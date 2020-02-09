const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const fontpath = require("postcss-fontpath")({
  checkFiles: true,
  ie8Fix: true
});

module.exports = {
  plugins: [
    require("postcss-nested"),
    fontpath,
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")]
      : [])
  ]
};
