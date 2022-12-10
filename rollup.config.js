import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "rollup-plugin-replace";
import OMT from "@surma/rollup-plugin-off-main-thread";
import babel from "@rollup/plugin-babel";
import html from "@open-wc/rollup-plugin-html";

const isProduction = process.env.NODE_ENV === "production";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
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
      include: ["./**/*"],
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
