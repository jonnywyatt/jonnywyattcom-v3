var path = require("path");

module.exports = {
  entry: "./src/client/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "index.js",
    publicPath: "/js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
