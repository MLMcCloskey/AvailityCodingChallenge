const path = require('path');
const router = require('express').Router();
const routes = require('./api');

// passing /api into routes and connecting to routes module
router.use('/api', routes);

// If no API routes are hit, send the React app
router.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;