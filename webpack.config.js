module.exports = [
  {
    name: 'client',
    entry: './src/client',
    target: 'web',
    output: {
      path: __dirname + '/dist',
      filename: 'client.bundle.js'
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
  },
  {
    name: 'server',
    entry: './src/server',
    target: 'node',
    output: {
      path: __dirname + '/dist',
      filename: 'server.bundle.js'
    },
    resolve: {
      extensions: [
        '.ts',
        '.tsx'
      ]
    },
    externals: {
      express: "commonjs express"
    },
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader!ts-loader'
        }
      ]
    }
  }
]