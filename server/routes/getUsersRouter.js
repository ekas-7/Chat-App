const express = require('express');
const router = express.Router();
const getusersControllers = require("../controllers/getusersControllers");
const convoControllers = require("../controllers/convoControllers");
const messageController = require("../controllers/messageContollers"); // Corrected import path

router.get('/', getusersControllers.hello);
router.post('/addUser', getusersControllers.addUser);
router.get('/getAll', getusersControllers.getUsers);
router.post('/convo/add', convoControllers.newconnection);
router.post('/convo/get', convoControllers.getConvo);

// Fixed the route path to start with a slash
router.post('/message/add', messageController.newMessage);

module.exports = router;
