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

const plugins = [htmlWebpackPlugin, dotenvWebpackPlugin, esLintWebpackPlugin];

export const WebpackCommonConfig = {
  entry,
  output,
  module,
  plugins,
  mode: config.IS_DEV ? "development" : "production",
};
