const { Router } = require('express')
const router = Router()
// controllers
const { allEvents, oneEvent } = require('../controllers/eventController')

router.get('/events', allEvents)
router.get('/events/:id', oneEvent)

module.exports = router