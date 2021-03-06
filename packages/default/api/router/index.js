const express = require( 'express' );
const router = express.Router();
const templates = require( '../ssr' );
const data = require( '../template' );
router.get('/', async ( req, res ) => {
    res.send( templates.template( 'home', data ) );
});

module.exports = router;