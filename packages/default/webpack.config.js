
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const path = require( 'path' );
module.exports = {
    devtool:'inline-source-map',
    entry:{
        index: './src/index.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    output:{
        filename:'[name].js',
        path:path.resolve( __dirname, 'public/js' ),
    },
    target:'web',
    plugins:[
         new CleanWebpackPlugin()
     ]
}