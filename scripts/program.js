const Logger = require( '../util/logger' );
const path = require( 'path' );
const { _default, _ts } = require( './shell' );
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

const setup = ( args, mode ) => {
    try{
        const _path = genPath( args[0] );
        Logger.status( `Building Project at ${_path}` )
        Logger.split();
        if( !mode ) {
            Logger.status( 'No Mode Chosen ... defaulting' );
            _default( _path );
        }
        else {
            switch( mode ){
                case "ts":
                    _ts( _path );
                    break;
                default:
                    _default( _path );
                    break;
            }
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