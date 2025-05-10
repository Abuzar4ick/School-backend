const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'School Backend API',
      version: '1.0.0',
      description: 'Maktab loyihasi uchun REST API hujjati',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      }
    ]
  },
  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJsDoc(options)

module.exports = { swaggerUi, swaggerSpec }
