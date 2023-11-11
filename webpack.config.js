import { WebpackDevelopmentConfig } from "./webpack/development.js";
import { WebpackProductionConfig } from "./webpack/production.js";
import { config } from "./webpack/config.js";

export default config.IS_DEV
  ? WebpackDevelopmentConfig
  : WebpackProductionConfig;
