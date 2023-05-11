const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");

const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserID param not sent with request");
    return res.sendStatus(400);
  }

  var isChatExist = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $eleMatch: { $eq: req.user_id } } },
      { users: { $eleMatch: { $eq: user_id } } },
    ],
  });
  
  res.json({
    data: isChatExist.length > 0 ? true : false,
  })

  
});

module.exports = {
  accessChat,
};
