import path from "path";

import {
  htmlWebpackPlugin,
  dotenvWebpackPlugin,
  esLintWebpackPlugin,
} from "./plugins/index.js";

import {
  fonts,
  images,
  javaScript,
  typeScript,
  styles,
} from "./modules/index.js";

import { paths, config } from "./config.js";

const entry = path.resolve(paths.src, "index.tsx");

const output = {
  filename: "bundle.js",
  path: paths.dist,
};

const module = {
  rules: [fonts, images, javaScript, typeScript, styles],
};

const resolve = {
  alias: {
    "@": paths.src,
    "@components": paths.components,
    "@styles": paths.styles,
  },
  extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
};

const plugins = [htmlWebpackPlugin, dotenvWebpackPlugin, esLintWebpackPlugin];

export const WebpackCommonConfig = {
  entry,
  output,
  module,
  resolve,
  plugins,
  mode: config.IS_DEV ? "development" : "production",
};
