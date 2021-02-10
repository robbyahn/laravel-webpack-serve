const mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
   .sass('src/app.scss', 'css')
   .setPublicPath('dist');

   module.exports = {
      mode: 'development',
      entry: {
        index: './src/index.js',
      },
      // devtool: 'inline-source-map',
      devServer: {
        contentBase: './dist',
      },
      plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
       title: 'Output Management',
       title: 'Development',
      }),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    };
   // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
   
   