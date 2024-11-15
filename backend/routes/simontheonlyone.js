const express = require('express');
const router = express.Router();
const { getLikeValue, updateLikeValue } = require('../controllers/simontheonlyone');

router.get('/count', getLikeValue);
router.put('/updatecount', updateLikeValue);

module.exports = router;
