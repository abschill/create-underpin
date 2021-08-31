const chalk = require( 'chalk' );
const status = (msg) => msg?console.log( chalk.blue(msg) ) : console.log();
const error = (msg) => msg?console.log( chalk.red( msg ) ): console.log();
const success = (msg) => msg?console.log( chalk.green( msg ) ) :console.log();
const split = () => console.log( chalk.cyan('~~~~~~~~~~~~~~~~'));
const Logger = {
    status,
    error,
    success, 
    split
}

module.exports = Logger;