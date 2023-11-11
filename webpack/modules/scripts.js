export const javaScript = {
  test: /\.(js|jsx)/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};

export const typeScript = {
  test: /\.(ts|tsx)/,
  exclude: /node_modules/,
  use: ["ts-loader"],
};
