const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { Course } = require('../models')

// Router: /api/popular-courses
// Method: GET
exports.allCourses = asyncHandler(async (req, res, next) => {
    const data = await Course.find()
    res.status(200).json({
        success: true,
        data
    })
})

// Router: /api/popular-courses/:id
// Method: GET
exports.oneCourse = asyncHandler(async (req, res, next) => {
    const data = await Course.findById(req.params.id)
    if (!data) return next(new ErrorResponse('Course is not found'));

    res.status(200).json({
        success: true,
        data
    })
})