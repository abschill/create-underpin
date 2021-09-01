const chalk = require( 'chalk' );
const figlet = require( 'figlet' );
const status = (msg) => msg?console.log( chalk.blue(msg) ) : console.log();
const error = (msg) => msg?console.log( chalk.red( msg ) ): console.log();
const success = (msg) => msg?console.log( chalk.green( msg ) ) :console.log();
const split = () => console.log( chalk.cyan('~~~~~~~~~~~~~~~~'));

const heading = (hdg) => console.log( chalk.cyan( figlet.textSync(hdg) ) );

const Logger = {
    status,
    error,
    success, 
    split,
    heading
}

module.exports = Logger;