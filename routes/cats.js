const express = require('express');
const router = express.Router();

const catsCtrl = require('../controllers/cats');

// all routes start with /cats

/* GET facts listing. */
router.get('/fact', catsCtrl.show);
/* GET manyfacts */
router.get('/manyfacts', catsCtrl.showMany);

module.exports = router;
