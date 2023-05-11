const express = require("express");
const authMiddleware = require('../middleware/authMiddleware');

const userController = require("../controllers/usercontroller");
const router = express.Router();




router.get("/", authMiddleware.protect,userController.getUser)
   .post('/',userController.registerUser)
   .post('/login',userController.authUser);

router.get('/chat', function (req, res) {
  res.send("chat history");
});

module.exports = router;
