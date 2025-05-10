const { Router } = require('express')
const router = Router()
// controllers
const { allTeachers, oneTeacher } = require('../controllers/teacherController')

router.get('/teachers', allTeachers)
router.get('/teachers/:id', oneTeacher)

module.exports = router