const { model, Schema } = require('mongoose')

const Teacher = new Schema({
    teacher_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = model('Teacher', Teacher)