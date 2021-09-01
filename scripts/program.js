const Logger = require( '../util/logger' );
const defaultTemplate = require( '../bin/default' );
const path = require( 'path' );
const genPath = (i) => {
    if( i === '.'  || i === '/' || i === undefined || i === null ){
        return process.cwd();
    }
    else {
        if( !i.includes( '.' ) ){
            Logger.error( 'Path Error: Must use relative path' );
            return process.exit(1);
        }
        else {
            return path.join( process.cwd(), i );
        }
    }
}
const setup = ( args ) => {
    const path = genPath( args[0] );
    Logger.status( `Building Project at ${path}`)
    Logger.split();

    if( args[1] ) {
        Logger.status( `Chosen Template: ${args[1]}` );
    }
}

module.exports = setup;