const loader = require( 'html-chunk-loader' );
const Handler = loader({
     root:'views',
     partialInput: {
         '*': {
            meta_title: 'Hello World',
            meta_desc: 'Cool Description Bro'
        }
     }
});
module.exports = Handler;