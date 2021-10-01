const Loader = require( 'html-chunk-loader' );
const Handler = new Loader({
     root:'views',
     _partialInput: {
         head: {
            title: 'Hello World',
            desc: 'Cool Description Bro',
        },
        footer: {
            title: 'Hello From Footer'
        }
     }
});
module.exports = Handler;