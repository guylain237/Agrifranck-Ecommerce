const express = require('express');
const { setContact } = require('../Controller/Contact.controller');


const router = express.Router();

// contactenvoyer un sms
router.post('/send',setContact);

module.exports = router;