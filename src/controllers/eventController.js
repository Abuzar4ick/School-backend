const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const { Event } = require('../models')

// Router: /api/events
// Method: GET
exports.allEvents = asyncHandler(async (req, res, next) => {
    const data = await Event.find()
    res.status(200).json({
        success: true,
        data
    })
})

// Router: /api/events/:id
// Method: GET
exports.oneEvent = asyncHandler(async (req, res, next) => {
    const data = await Event.findById(req.params.id)
    if (!data) return next(new ErrorResponse('Event is not found', 404));

    res.status(200).json({
        success: true,
        data
    })
})