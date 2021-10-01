const api = require( './api' );
const PORT = process.env.PORT || 3000;
api.listen( PORT, ()=> console.log( `Server Listening on port ${PORT}` ) );