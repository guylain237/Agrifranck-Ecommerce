const express = require('express');

const { payement } = require('../Controller/payementController');

const router = express.Router();





router.post('/create-checkout-session',payement);


module.exports = router;