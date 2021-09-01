const shell = require( 'shelljs' );
const defaultTemplate = require( '../../bin/default' );
const tsTemplate = require( '../../bin/typescript' );
const Logger = require( '../../util/logger' );
const finalize = (_path) => {
    shell.cd(_path);
    Logger.status( 'Installing Packages..' );
    shell.ls().exec( 'yarn install' )
}
const _default = ( _path ) => {
    defaultTemplate( _path );
    finalize( _path );
}
const _ts = ( _path ) => {
    tsTemplate( _path );
    finalize( _path );
}

module.exports = { _default, _ts };