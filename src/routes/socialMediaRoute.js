const { Router } = require('express')
const router = Router()
// controllers
const { allSocialMedias, oneSocialMedia } = require('../controllers/socialMediaController')

router.get('/social-medias', allSocialMedias)
router.get('/social-medias/:id', oneSocialMedia)

module.exports = router