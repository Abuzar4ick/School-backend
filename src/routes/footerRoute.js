const { Router } = require('express')
const router = Router()
// controllers
const { allFooterInfo } = require('../controllers/footerController')

router.get('/footer/info', allFooterInfo)

module.exports = router