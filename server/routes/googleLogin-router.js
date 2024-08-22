const express = require('express');
const router = express.Router();
const googleController = require("../controllers/googleLogin-controller");

router.get('/login', googleController.googleLogin);
router.get('/callback', googleController.googleCallback);

module.exports = router;