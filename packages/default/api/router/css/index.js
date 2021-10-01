const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );

router.use( ( req, res, next )=> {
    res.setHeader( 'Content-Type', 'text/css' );
    next();
} );

router.use( express.static( path.join( process.cwd(), 'public/css' ) ) );

module.exports = router;