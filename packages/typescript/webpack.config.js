const path = require( 'path' );
module.exports = {
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
        path:path.resolve( __dirname, 'dist' ),
    },
}