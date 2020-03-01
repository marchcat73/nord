const express = require('express');
const router = express.Router();
const { time } = require('../controllers/payment');

router.get('/', time);

module.exports = router;
