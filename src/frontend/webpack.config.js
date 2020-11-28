const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app/App.js',
    output: {
      filename: 'test.js'
    },
    module: {
        rules: [
          {test: /\.css/, loader: ['style-loader', 'css-loader']},
          {test: /\.vue$/, loader: 'vue-loader'},
          {test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=1000000'},
          {
            test: /\.s(c|a)ss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                // Requires sass-loader@^8.0.0
                options: {
                  implementation: require('sass'),
                  sassOptions: {
                    fiber: require('fibers'),
                    indentedSyntax: true // optional
                  },
                },
              },
            ],
        }],
    },
    resolve: {
      modules: [
        path.resolve(__dirname, "src"),
        'node_modules'
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin()
    ]
}
