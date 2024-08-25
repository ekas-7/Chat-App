
const Convo = require("../models/Convo");

const newconnection = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        // Check if a conversation already exists between sender and receiver
        const exist = await Convo.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (exist) {
            return res.status(200).json({ message: "Conversation already exists", convo: exist });
        } else {
            // Create a new conversation
            const newConvo = new Convo({
                members: [senderId, receiverId],
                messages: []  // Initialize with an empty messages array
            });

            const savedConvo = await newConvo.save();
            return res.status(201).json(savedConvo);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getConvo = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        // Retrieve the conversation between the two users
        const conversation = await Convo.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (conversation) {
            return res.status(200).json(conversation);
        } else {
            return res.status(404).json({ message: "Conversation not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { newconnection, getConvo };
