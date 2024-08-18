const express = require('express');
const router = express.Router();
const googleController= require("../controllers/googleLogin-controller");

router.get('/',googleController.hello );

module.exports=router;