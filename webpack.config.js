const path = require('path');
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
module.exports = {
    entry:"./src/index.ts",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
        ]
    },
    resolve:{
        extensions: [ '.ts', '.js']
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname, 'lib'),
    },
    target:'node',
    plugins:[
        new CleanWebpackPlugin()
    ]

}