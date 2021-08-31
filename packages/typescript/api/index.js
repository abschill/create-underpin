const express = require( 'express' );
const api = express();

api.get( '/', async ( req, res ) => {
    res.send( 'Hello World' );
});

module.exports = api;