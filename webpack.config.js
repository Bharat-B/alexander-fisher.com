module.exports = {
  entry: "./src/client/entry.tsx",
  output: {
    filename: "client.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: "ts-loader"
    }]/*,
    preLoaders: [{
      test: /\.js$/,
      loader: "source-map-loader"
    }]*/
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};
