var path = require("path")
module.exports = {
    entry: {
        home: ['./src/home'],
        tools: ['./src/tools'],
        money: ['./src/money'],
        report: ['./src/report'],
        generalize: ['./src/generalize']
    },
    output: {
        path: path.join(__dirname, "src"),
        filename: "[name].js"
    },
    externals: {
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            include: [
                path.resolve(__dirname, '../../node_modules/@alife/lba-common')
            ],
            loader: 'url-loader?limit=8192'
        }]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
    },
    plugins: []
}