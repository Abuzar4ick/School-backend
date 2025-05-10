const { Router } = require('express')
const router = Router()
// controllers
const { allCourses, oneCourse } = require('../controllers/courseController')

router.get('/popular-courses', allCourses)
router.get('/popular-courses/:id', oneCourse)

module.exports = router