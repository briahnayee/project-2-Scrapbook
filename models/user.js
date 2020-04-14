const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    }, 
    userName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },
    googleId: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);