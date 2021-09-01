#!/usr/bin/env node
const yargs = require( 'yargs/yargs' );
const { hideBin } = require( 'yargs/helpers' );
const argv = yargs( hideBin( process.argv ) ).argv;
const _cli = require( './scripts/program' );
_cli( argv._, argv.mode );