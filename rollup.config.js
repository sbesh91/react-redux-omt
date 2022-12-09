const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve");
const replace = require("rollup-plugin-replace");
const OMT = require("@surma/rollup-plugin-off-main-thread");
const babel = require("@rollup/plugin-babel");
const html = require("@open-wc/rollup-plugin-html");

const isProduction = process.env.NODE_ENV === "production";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

module.exports = {
  input: "demo/index.html",
  output: {
    dir: "dist",
    format: "amd",
  },
  context: "globalThis",
  plugins: [
    nodeResolve({
      extensions,
      preferBuiltins: false,
      browser: true,
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      compact: isProduction,
      minified: isProduction,
      configFile: "./babel.config.json",
      extensions,
      include: ["./*"],
      exclude: "node_modules/**",
      sourceMaps: "both",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    OMT(),
    html(),
  ],
};
