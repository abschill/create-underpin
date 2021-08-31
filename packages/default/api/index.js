const express = require( 'express' );
const router = require( './router' );
const api = express();

api.use(router);

module.exports = api;