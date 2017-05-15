module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, ,
            { 
                test : /\.css$/ ,
                loaders : [
                    'style-loader' ,
                    'css-loader'
                ]
            } ,
            { 
                test : /\.scss$/ ,
                loaders : [
                    'style-loader' ,
                    'css-loader' ,
                    'autoprefixer-loader',
                    'sass-loader'
                ]
            } ,
            {  
                test : /\.(jpe?g|png)$/ ,
                loader : 'file-loader'
            }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
