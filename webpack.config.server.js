const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  name: "server",
  entry: [path.resolve(__dirname, "server/server.js")],
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.generated.js",
    publicPath: "/dist/",
    library: { type: "commonjs2" },
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};

module.exports = config;
