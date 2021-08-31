#!/usr/bin/env node
const Logger = require( '../util/logger' );
const path = require( 'path' );
const fs = require( 'fs-extra' );
module.exports = ()=>{
    const root = process.cwd();
    Logger.status( 'Selected Minimalist template - Fullstack Lit / Express' );
    Logger.split();
    Logger.status( `Creating New Project in \n${root}` );
    Logger.split();
    fs.copySync(  path.resolve(__dirname, '..', 'packages', 'min' ), root  );
}