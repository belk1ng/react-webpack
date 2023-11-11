import { merge } from "webpack-merge";
import { WebpackCommonConfig } from "./common.js";
import { config } from "./config.js";

const devServer = {
  port: config.PORT,
  hot: true,
  historyApiFallback: true,
};

const DevelopmentConfig = {
  devServer,
  devtool: "inline-source-map",
};

export const WebpackDevelopmentConfig = merge(
  WebpackCommonConfig,
  DevelopmentConfig
);
