#!/usr/bin/env node
const Logger = require( '../util/logger' );
const path = require( 'path' );
const fs = require( 'fs-extra' );
module.exports = (root)=>{
    Logger.status( 'Selected Typescript template - Fullstack Lit / Express' );
    Logger.split();
    Logger.status( `Creating New Project in \n${root}` );
    Logger.split();
    fs.copySync(  path.resolve(__dirname, '..', 'packages', 'typescript' ), root  );
    setTimeout(()=> {
        Logger.success( 'Typescript Project Installed' );
    });
}