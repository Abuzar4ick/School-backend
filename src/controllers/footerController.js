const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { Footer } = require('../models')

// Router: /api/footer/info
// Method: GET
exports.allFooterInfo = asyncHandler(async (req, res, next) => {
    const data = await Footer.find()
    res.status(200).json({
        success: true,
        data
    })
})