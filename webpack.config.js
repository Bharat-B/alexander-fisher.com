var path = require('path');
var packageConfig = require('./package.json');
var serverExternals = {};

for (var key in packageConfig.dependencies) {
  serverExternals[key] = "commonjs " + key;
}

module.exports = [
  {
    name: 'client',
    entry: path.resolve(__dirname, 'src/client'),
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'client.bundle.js'
    },
    resolve: {
      extensions: [
        '',
        '.ts',
        '.tsx',
        '.scss'
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
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    }
  },
  {
    name: 'server',
    entry: path.resolve(__dirname, 'src/server'),
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.bundle.js'
    },
    resolve: {
      extensions: [
        '.ts',
        '.tsx'
      ]
    },
    externals: serverExternals,
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