const express = require('express');

const { userCreate, verifyEmail, verified } = require('../Controller/userController');

const router = express.Router();



router.post('/',userCreate);


router.get("/verify/:userId/:uniqueString", verifyEmail);

router.get("/verified", verified);

module.exports = router;