#!/usr/bin/env node
const Logger = require( '../util/logger' );
module.exports = ()=>{
    const root = process.cwd();
    Logger.status( 'Selected Default template' );
    Logger.split();
    Logger.status( `Creating New Project in \n${root}` );
}