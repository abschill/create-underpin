const express = require( 'express' );
const router = require( './router' );
const jsRouter = require( './router/js' );
const cssRouter = require( './router/css' );
const api = express();

api.use(router);
api.use( '/js', jsRouter );
api.use( '/css', cssRouter );
module.exports = api;