import path from "path";
import { fileURLToPath } from "url";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "../");

export const paths = {
  root,
  src: path.resolve(root, "src"),
  dist: path.resolve(root, "dist"),
  public: path.resolve(root, "public"),
  components: path.resolve(root, "src", "components"),
  styles: path.resolve(root, "src", "assets", "styles"),
};

export const config = {
  IS_DEV: process.env.NODE_ENV === "development",
  PORT: process.env.PORT || 5173,
  TITLE: process.env.TITLE || "React Application",
};
