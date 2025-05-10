const { Schema, model } = require('mongoose')

const SocialMedia = new Schema({
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('SocialMedia', SocialMedia)