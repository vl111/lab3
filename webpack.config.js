module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};