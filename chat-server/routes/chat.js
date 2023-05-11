
const express =require('express');

const chatController = require("../controllers/chatcontroller");

const {protect} = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect , chatController.accessChat);
router.route('/').get(protect , fetchChats);
router.route('/group').post(protect , createGroupChat);
router.route('/rename').put(protect , renameGroup);
router.route('/groupremove').put(protect , removeFromGroup);
router.route('/groupadd').put(protect , addToGroup);







module.exports = router;