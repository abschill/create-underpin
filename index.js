#!/usr/bin/env node
const yargs = require( 'yargs/yargs' );
const { hideBin } = require( 'yargs/helpers' );
const argv = yargs( hideBin( process.argv ) ).argv;
const _cli = require( './scripts/program' );
const test = require( './bin/test' );
//
// console.log( argv.mode )
if( argv.mode === 'test' ) {
   test();
}
else {
    _cli( argv._, argv.mode );
}
