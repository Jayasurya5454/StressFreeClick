const express = require('express');
const router = express.Router();
const { getLikeValue, updateLikeValue } = require('../controllers/barisdogonsutcu');

router.get('/count', getLikeValue);
router.put('/updatecount', updateLikeValue);

module.exports = router;
