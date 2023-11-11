import ESLintWebpackPlugin from "eslint-webpack-plugin";
import { paths, config } from "../config.js";

export const esLintWebpackPlugin = new ESLintWebpackPlugin({
  context: paths.src,
  extensions: ["js", "jsx", "ts", "tsx", "json"],
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
});
