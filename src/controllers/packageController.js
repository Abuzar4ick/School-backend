const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { Package } = require('../models')

// Router: /api/packages
// Method: GET
exports.allPackages = asyncHandler(async (req, res, next) => {
    const data = await Package.find()
    res.stauts(200).json({
        success: true,
        data
    })
})

// Router: /api/packages/:id
// Method: GET
exports.onePackage = asyncHandler(async (req, res, next) => {
    const data = await Package.findById(req.params.id)
    if (!data) return next(new ErrorResponse('Package is not found', 404));

    res.stauts(200).json({
        success: true,
        data
    })
})