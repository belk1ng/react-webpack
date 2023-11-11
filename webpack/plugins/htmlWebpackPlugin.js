import path from "path";
import { paths, config } from "../config.js";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(paths.public, "index.html"),
  title: config.TITLE,
});
