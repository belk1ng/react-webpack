import { config } from "dotenv";
import webpack from "webpack";

export const dotenvWebpackPlugin = new webpack.DefinePlugin({
  "process.env": JSON.stringify(config().parsed),
});
