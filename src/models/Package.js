const { model, Schema } = require('mongoose')

const Package = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('Package', Package)