const { Router } = require('express')
const router = Router()
// controllers
const { allHeaders, oneHeader } = require('../controllers/headerController')

router.get('/headers/info', allHeaders)
router.get('/headers/:id/info', oneHeader)

module.exports = router