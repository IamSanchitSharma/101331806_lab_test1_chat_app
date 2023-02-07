// This file contains the schema plan for the Message Schema as the Lab Test's requirement


const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

    from_user: {
        type: String
    },
    room: {
        type: String
    },
    message: {
        type: String
    },
    date_sent: {
        type: Date
    }

});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;