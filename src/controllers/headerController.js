const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { Header } = require('../models')

// Router: /api/headers/info
// Method: GET
exports.allHeaders = asyncHandler(async (req, res, next) => {
    const data = await Header.find()
    res.status(200).json({
        success: true,
        data
    })
})

// Router: /api/headers/:id/info
// Method: GET
exports.oneHeader = asyncHandler(async (req, res, next) => {
    const data = await Header.findById(req.params.id)
    if (!data) return next(new ErrorResponse('Header info is not found', 404));

    res.status(200).json({
        success: true,
        data
    })
})