const { Router } = require('express')
const router = Router()
// controllers
const { allPackages, onePackage } = require('../controllers/packageController')

router.get('/packages', allPackages)
router.get('/packages/:id', onePackage)

module.exports = router