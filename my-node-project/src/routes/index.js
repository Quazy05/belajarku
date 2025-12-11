const express = require('express');
const { getData, postData } = require('../controllers');

const router = express.Router();

router.get('/data', getData);
router.post('/data', postData);

module.exports = router;