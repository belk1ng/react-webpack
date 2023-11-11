import path from "path";
import { paths } from "../config.js";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(paths.public, "index.html"),
});
