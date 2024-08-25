const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  senderId: {
    type: String, // Change to String
    required: true,
  },
  receiverId: {
    type: String, // Change to String
    required: true,
  },
  conversationId: {
    type: String, // Change to String
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'file'],
    default: 'text',
  },
}, { timestamps: true });

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
