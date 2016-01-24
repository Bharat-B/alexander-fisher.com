module.exports = {
  entry: './src/main',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx'
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}