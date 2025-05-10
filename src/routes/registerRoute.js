const { Router } = require('express')
const router = Router()
// controller
const { register } = require('../controllers/registerController')
// limiter
const limiter = require('../middlewares/limiter')
// validators
const { registerValidator } = require('../validators/registerValidator')

router.post('/register', registerValidator, limiter, register)

module.exports = router