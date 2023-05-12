
const express =require('express');

const chatController = require("../controllers/chatcontroller");

const {protect} = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect , chatController.accessChat);
router.route('/').get(protect , chatController.fetchChats);
router.route('/group').post(protect , chatController.createGroupChat);
router.route('/rename').put(protect , chatController.renameGroup);
router.route('/groupremove').put(protect ,chatController.removeFromGroup);
router.route('/groupadd').put(protect , chatController.addToGroup);







module.exports = router;