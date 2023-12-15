const express = require('express');
const router = express.Router();

const catsCtrl = require('../controllers/cats');

// all routes start with /cats

/* GET facts listing. */
router.get('/fact', catsCtrl.show);

module.exports = router;
