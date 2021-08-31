#!/usr/bin/env node
const yargs = require( 'yargs/yargs' );
const { hideBin } = require( 'yargs/helpers' );
const argv = yargs( hideBin( process.argv ) ).argv;
const defaultTemplate = require( './bin/default' );
const Logger = require( './util/logger' );
//console.log( argv );

//has --option of some sort
//console.log( Object.entries(argv).length > 2  )

if( Object.entries( argv ).length > 2  ) {

    Logger.status( 'Starting Underpin Scaffold...')
    Logger.status();

    if( Object.keys( argv ).includes( 'type' ) ) {
        switch( argv.type ){
            default:
                return Logger.status( `Selected Type ${argv.type}` );
        }
    }
    else {
        Logger.error( 'error' );
    }
}
else {
    return defaultTemplate();
}