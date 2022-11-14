const mongoose = require('mongoose')

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: true,
        default: 'avatar.png'
    }
});

module.exports = mongoose.model('Users', users)