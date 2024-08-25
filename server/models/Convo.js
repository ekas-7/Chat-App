const mongoose = require("mongoose");

const Conschema = new mongoose.Schema({
    members: {
        type: Array,
        required: true,  // Ensure that members is always provided
    },
    messages: [{  // Change to an array to hold multiple messages
        type: String,
    }],
}, {
    timestamps: true
});

const convo = mongoose.model('Convo', Conschema);

module.exports = convo;
