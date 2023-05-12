const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

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
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChatExist = await User.populate(isChatExist, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChatExist.length > 0) {
    res.send(isChatExist[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullchat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullchat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }

  res.json({
    data: isChatExist.length > 0 ? true : false,
  });
});

const fetchChats = asyncHandler(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } }).then((result) =>
      res.send(result)
    );
  } catch (error) {}
});

const createGroupChat = asyncHandler(async (req, res) => {
  res.json({ chats: "chat" });
});

const renameGroup = asyncHandler(async (req, res) => {
  res.json({ chats: "chat" });
});

const removeFromGroup = asyncHandler(async (req, res) => {
  res.json({ chats: "chat" });
});

const addToGroup = asyncHandler(async (req, res) => {
  res.json({ chats: "chat" });
});

module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
};
