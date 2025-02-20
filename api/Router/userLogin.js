const express = require('express');

const { userLogin } = require('../Controller/userController');

const router = express.Router();





router.post('/',userLogin);


module.exports = router;