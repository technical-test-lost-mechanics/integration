const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use:
        {
          loader: 'file-loader',
          options: {
            context: path.join(__dirname, '/src'),
            name: '[path][name].[ext]',
            esModule: false,
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use:
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        use: {
          loader: 'ejs-loader',
          options: {
            esModule: false
          }
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html'
    })
  ]
};

const glob = require('glob');
const files = glob.sync(process.cwd() + '/src/view/**/*.ejs');
files.forEach(file => {
  config.plugins.push(new HtmlWebpackPlugin({
    filename: path.basename(file).replace('.ejs', '.html'),
    template: file,
  }));
});

module.exports = config;
