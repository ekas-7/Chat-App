const express = require('express');
const router = express.Router();
const getusersControllers = require("../controllers/getusersControllers");

router.get('/', getusersControllers.hello);
router.post('/addUser', getusersControllers.addUser);
router.get('/getAll', getusersControllers.getUsers);


module.exports = router;