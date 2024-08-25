const Message = require("../models/Message");
const Convo = require("../models/Convo");

const newMessage = async (req, res) => {
  try {
    const { senderId, receiverId, conversationId, text, type } = req.body;

    if (!senderId || !receiverId || !conversationId || !text) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const message = new Message({
      senderId,
      receiverId,
      conversationId,
      text,
      type: type || 'text',
    });

    await message.save();

    await Convo.findByIdAndUpdate(conversationId, { $push: { messages: message._id } }, { new: true });

    return res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error sending new message:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const { id: conversationId } = req.params;

    const messages = await Message.find({ conversationId });

    if (!messages) {
      return res.status(404).json({ error: "No messages found for this conversation." });
    }

    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  newMessage,
  getAllMessages,
};
