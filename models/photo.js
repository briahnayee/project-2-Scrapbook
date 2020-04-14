const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema ({
    description: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const commentSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
    },
    text: {
        type: String,
        required: true,
    }, 
    comments: [commentSchema],
    userName: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Photo', photoSchema);