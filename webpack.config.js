module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname, // カレントディレクトリ
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/, // ファイルが loader の対象となるかを判断する
                loader: 'style!css'
            }
        ]
    }
};
