import { merge } from "webpack-merge";
import { WebpackCommonConfig } from "./common.js";
import { miniCssExtractPlugin } from "./plugins/miniCssExtractPlugin.js";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const plugins = [miniCssExtractPlugin];

const ProductionConfig = {
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};

export const WebpackProductionConfig = merge(
  WebpackCommonConfig,
  ProductionConfig
);
