const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { SocialMedia } = require('../models')

// Router: /social-medias
// Method: GET
exports.allSocialMedias = asyncHandler(async (req, res, next) => {
    const data = await SocialMedia.find()
    res.status(200).json({
        success: true,
        data
    })
})

// Router: /social-medias/:id
// Method: GET
exports.oneSocialMedia = asyncHandler(async (req, res, next) => {
    const data = await SocialMedia.findById(req.params.id)
    if (!data) return next(new ErrorResponse('Social media is not found', 404));

    res.status(200).json({
        success: true,
        data
    })
})