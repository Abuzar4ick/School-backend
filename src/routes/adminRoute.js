const { Router } = require('express')
const router = Router()
// Controllers
const {
  createHeaderInfo, updateHeaderInfo, deleteHeaderInfo,
  createNewCourse, updateCourse, deleteCourse,
  createNewPackage, updatePackage, deletePackage,
  createNewEvent, updateEvent, deleteEvent,
  createNewTeacher, updateTeacher, deleteTeacher,
  createFooterInfo, updateFooterInfo, deleteFooterInfo,
  createSocialMedia, updateSocialMedia, deleteSocialMedia
} = require('../controllers/adminController')
const { allHeaders, oneHeader } = require('../controllers/headerController')
const { allCourses, oneCourse } = require('../controllers/courseController')
const { allPackages, onePackage } = require('../controllers/packageController')
const { allEvents, oneEvent } = require('../controllers/eventController')
const { allTeachers, oneTeacher } = require('../controllers/teacherController')
const { allSocialMedias, oneSocialMedia } = require('../controllers/socialMediaController')
// Upload image/video
const { storage } = require('../storage/storage')
const multer = require('multer')
const upload = multer({ storage })
// Check an admin token
const isAdmin = require('../middlewares/isAdmin')

// ==== Header Routes ====
router.post('/headers/info', isAdmin, upload.single('image'), createHeaderInfo)
router.put('/headers/:id/info', isAdmin, upload.single('image'), updateHeaderInfo)
router.delete('/headers/:id/info', isAdmin, deleteHeaderInfo)
router.get('/headers/info', isAdmin, allHeaders)
router.get('/headers/:id/info', isAdmin, oneHeader)

// ==== Popular Courses ====
router.post('/popular-courses', isAdmin, upload.single('image'), createNewCourse)
router.put('/popular-courses/:id', isAdmin, upload.single('image'), updateCourse)
router.delete('/popular-courses/:id', isAdmin, deleteCourse)
router.get('/popular-courses', isAdmin, allCourses)
router.get('/popular-courses/:id', isAdmin, oneCourse)

// ==== Packages ====
router.post('/packages', isAdmin, upload.single('video'), createNewPackage)
router.put('/packages/:id', isAdmin, upload.single('video'), updatePackage)
router.delete('/packages/:id', isAdmin, deletePackage)
router.get('/packages', isAdmin, allPackages)
router.get('/packages/:id', isAdmin, onePackage)

// ==== Events ====
router.post('/events', isAdmin, upload.single('image'), createNewEvent)
router.put('/events/:id', isAdmin, upload.single('image'), updateEvent)
router.delete('/events/:id', isAdmin, deleteEvent)
router.get('/events', isAdmin, allEvents)
router.get('/events/:id', isAdmin, oneEvent)

// ==== Teachers ====
router.post('/teachers', isAdmin, upload.single('image'), createNewTeacher)
router.put('/teachers/:id', isAdmin, upload.single('image'), updateTeacher)
router.delete('/teachers/:id', isAdmin, deleteTeacher)
router.get('/teachers', isAdmin, allTeachers)
router.get('/teachers/:id', isAdmin, oneTeacher)

// ==== Footer ====
router.post('/footer', isAdmin, createFooterInfo)
router.put('/footer/:id', isAdmin, updateFooterInfo)
router.delete('/footer/:id', isAdmin, deleteFooterInfo)

// ==== Social Media ====
router.post('/social-medias', isAdmin, createSocialMedia)
router.put('/social-medias/:id', isAdmin, updateSocialMedia)
router.delete('/social-medias/:id', isAdmin, deleteSocialMedia)
router.get('/social-medias', isAdmin, allSocialMedias)
router.get('/social-medias/:id', isAdmin, oneSocialMedia)

module.exports = router