const express = require('express')
const app = express()
const error = require('./middlewares/error')
const { swaggerUi, swaggerSpec } = require('./config/swaggerConfig')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/admin',
    require('./routes/adminRoute'),
    require('./routes/registerRoute')
)
app.use('/api/user',
    require('./routes/courseRoute'),
    require('./routes/headerRoute'),
    require('./routes/eventRoute'),
    require('./routes/packageRoute'),
    require('./routes/teacherRoute'),
    require('./routes/socialMediaRoute')
)

// Error handler
app.use(error)

module.exports = app