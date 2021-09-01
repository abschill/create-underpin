const Logger = require( '../util/logger' );
const defaultTemplate = require( '../bin/default' );
const path = require( 'path' );
const shell = require( 'shelljs' );
const genPath = ( i ) => {
    if( i === '.'  || i === '/' || i === undefined || i === null ){
        return process.cwd();
    }
    else {
        if( !i.includes( '.' ) ){
            Logger.error( 'Path Error: Must use relative path' );
            return process.exit( 1 );
        }
        else {
            return path.join( process.cwd(), i );
        }
    }
}
const setup = ( args ) => {
    try{
        const _path = genPath( args[0] );
        Logger.status( `Building Project at ${_path}` )
        Logger.split();
        if( args[1] ) {
            Logger.status( `Chosen Template: ${args[1]}` );
        }
        else {
            Logger.status( 'No Template Chosen ... using default' );
            defaultTemplate(_path);
            shell.cd(_path);
            Logger.status( 'Installing Packages..' );
            shell.ls().exec( 'yarn install' )
        }
        Logger.heading( 'Success' );
        process.exit( 0 );
    }
    catch ( e ) {
        Logger.error( e );
        process.exit( 1 );
    }
    
}

module.exports = setup;