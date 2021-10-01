const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );

router.use( express.static( path.join( process.cwd(), 'public/js' ) ) );

module.exports = router;