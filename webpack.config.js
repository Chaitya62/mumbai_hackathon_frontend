var path = require('path');
var webpack = require('webpack');

module.exports= {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './src/js/main.js'
  ],
  externals:{
    jquery:'jQuery',

  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery': 'jquery',

    }),
  ],
  output: {
    path: __dirname,
    filename:  './app/js/main.js'
  },
  resolve:{
    alias: {
      App: path.resolve(__dirname,'./src/js/components/App.jsx'),
      Components: path.resolve(__dirname,'./src/js/components'),
      applicationStyles: path.resolve(__dirname,'./src/css/')
    },
    extensions: ['.js','.jsx']
  },
  module: {

    loaders:[
      {
        test:  /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},

      {
             test: /\.scss$/,
             use: [{
                 loader: "style-loader"
             }, {
                 loader: "css-loader"
             }, {
                 loader: "sass-loader",
                 options: {
                     includePaths: [path.resolve(__dirname,'./node_modules/foundation-sites/scss')]
                 }
             }]
         },
    ],

  },


};
