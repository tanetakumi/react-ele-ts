import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = process.env.NODE_ENV === 'development';

const config: Configuration = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  entry: {
    app: './src/app.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].js',
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|tests|mocks)/,
        use: 'ts-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(bmp|ico|gif|jpe?g|png|svg|ttf|eot|woff?2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      scriptLoading: 'blocking',
      inject: 'body',
      minify: !isDev,
    }),
  ],
  stats: 'errors-only',
  performance: { hints: false },
  optimization: { minimize: !isDev },
  devtool: isDev ? 'inline-source-map' : undefined,
};

export default config;