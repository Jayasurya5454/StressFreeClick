const express = require('express');
const router = express.Router();
const { getLikeValue, updateLikeValue } = require('../controllers/snapurl');

router.get('/count', getLikeValue);
router.put('/updatecount', updateLikeValue);

module.exports = router;
