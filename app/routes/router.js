/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */

router.use('/collaborators', require('./api/collaboratorRoutes'));

module.exports = router;