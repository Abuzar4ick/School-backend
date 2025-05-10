const { Schema, model } = require('mongoose')

const Footer = new Schema({
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }
})

module.exports = model('Footer', Footer)