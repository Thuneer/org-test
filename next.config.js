// next.config.js
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
  experimental: { esmExternals: true },
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/org-test" : "",
});
