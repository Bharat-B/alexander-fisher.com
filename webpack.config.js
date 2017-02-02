module.exports = {
  entry: "./src/client/entry.tsx",
  output: {
    filename: "client.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx"]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    }],
    preLoaders: [{
      test: /\.js$/,
      loader: "source-map-loader"
    }]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};
