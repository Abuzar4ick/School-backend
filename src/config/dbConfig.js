const mongoose = require('mongoose')

const mongoConnection = async () => {
    try {
        await mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database successfully connected')
    } catch(err) {
        console.error(`Mongodb connecting error: ${err}`)
        process.exit(1)
    }
}

module.exports = mongoConnection