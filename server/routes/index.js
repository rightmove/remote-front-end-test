const express = require('express');
const propertiesController = require('../controllers/properties');

const router = express.Router();

router.use('/api/properties', propertiesController);

module.exports = router;
