#!/usr/bin/env node
const Logger = require( '../util/logger' );
const path = require( 'path' );
const health_test = () => {
    console.log( 'dev/test module' );
}
module.exports = health_test;