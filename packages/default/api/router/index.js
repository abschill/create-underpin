const express = require( 'express' );
const router = express.Router();
const templates = require( '../ssr' );
const data = require( '../template' );
router.get('/', async ( req, res ) => {
    res.send( templates.template( 'home', { page_title: 'Home Page'} ) );
});

module.exports = router;