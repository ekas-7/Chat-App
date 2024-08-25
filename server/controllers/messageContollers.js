const Message = require("../models/Message");
const Convo = require("../models/Convo");

const newMessage = async (req, res) => {
  try {
    // Validate request body
    const { senderId, receiverId, conversationId, text, type } = req.body;
    
    if (!senderId || !receiverId || !conversationId || !text) {
      return res.status(400).json({ error: "All fields are required." }); // Check for required fields
    }

    // Create a new message instance
    const message = new Message({
      senderId,
      receiverId,
      conversationId,
      text,
      type: type || 'text', // Default to 'text' if type is not provided
    });

    // Save the message to the database
    await message.save();

    // Update the conversation text
    await Convo.findByIdAndUpdate(conversationId, { message: text });

    return res.status(201).json({ message: 'Message sent successfully!' }); // Improved response
  } catch (error) {
    console.error("Error sending new message:", error); // Improved error logging
    return res.status(500).json({ error: "Failed to send message" }); // Send a response on error
  }
};

module.exports = {
  newMessage
};
