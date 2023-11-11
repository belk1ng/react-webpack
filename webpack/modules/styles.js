import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { config } from "../config.js";

export const styles = {
  test: /\.(sc|c)ss$/,
  use: [
    config.IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader",
  ],
};
