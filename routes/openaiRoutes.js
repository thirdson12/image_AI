const express = require('express');
const { genarateImage } = require('../controllers/openaiController')  
const router = express.Router();

router.post('/genarateimage', genarateImage);

module.exports = router;
