const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { Teacher } = require('../models')

// Router: /teachers
// Method: GET
exports.allTeachers = asyncHandler(async (req, res, next) => {
    const data = await Teacher.find()
    res.status(200).json({
        success: true,
        data
    })
})

// Router: /teachers/:id
// Method: GET
exports.oneTeacher = asyncHandler(async (req, res, next) => {
    const data = await Teacher.findById(req.params.id)
    if (!data) return next(new ErrorResponse('Teacher is not found', 404));

    res.status(200).json({
        success: true,
        data
    })
})