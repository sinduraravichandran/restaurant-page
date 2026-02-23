import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import HtmlWebpackPlugin from "html-webpack-plugin";

// These lines are required in ESM to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);


export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            { loader: require.resolve("style-loader") },
            { loader: require.resolve("css-loader") },
], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  devServer: {
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*"],
    static: false,
  },
};