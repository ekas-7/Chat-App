const express = require('express');
const router = express.Router();
const getusersControllers = require("../controllers/getusersControllers");
const convoControllers = require("../controllers/convoControllers");
const messageControllers = require("../controllers/messageContollers"); // Corrected import name

router.get('/', getusersControllers.hello);
router.post('/addUser', getusersControllers.addUser);
router.get('/getAll', getusersControllers.getUsers);
router.post('/convo/add', convoControllers.newconnection);
router.post('/convo/get', convoControllers.getConvo);
router.post('/message/add', messageControllers.newMessage);
router.get('/message/get/:id', messageControllers.getAllMessages); // Fixed capitalization

module.exports = router;
