const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../utils/asyncHandler')
const {
  Header,
  Course,
  Package,
  Event,
  Teacher,
  Footer,
  SocialMedia
} = require('../models')

// ===== Header =====
// POST
exports.createHeaderInfo = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body
  const image = req.file.fileName

  const newHeader = await Header.create({ title, description, image })
  res.status(201).json({ success: true, message: 'New header created', data: newHeader })
})

// PUT
exports.updateHeaderInfo = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { title, description } = req.body
  const image = req.file?.fileName

  const updatedData = { title, description }
  if (image) updatedData.image = image

  const updated = await Header.findByIdAndUpdate(id, updatedData, { new: true })
  if (!updated) return next(new ErrorResponse('Header not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deleteHeaderInfo = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await Header.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Header not found', 404))

  res.status(200).json({ success: true, message: 'Header deleted' })
})

// ===== Course =====
// POST
exports.createNewCourse = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body
  const image = req.file.fileName

  const newCourse = await Course.create({ title, description, image })
  res.status(201).json({ success: true, message: 'New course created', data: newCourse })
})

// PUT
exports.updateCourse = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { title, description } = req.body
  const image = req.file?.fileName

  const updatedData = { title, description }
  if (image) updatedData.image = image

  const updated = await Course.findByIdAndUpdate(id, updatedData, { new: true })
  if (!updated) return next(new ErrorResponse('Course not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await Course.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Course not found', 404))

  res.status(200).json({ success: true, message: 'Course deleted' })
})

// ===== Package =====
// POST
exports.createNewPackage = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body
  const video = req.file.fileName

  const newPackage = await Package.create({ title, description, video })
  res.status(201).json({ success: true, message: 'New package created', data: newPackage })
})

// PUT
exports.updatePackage = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { title, description } = req.body
  const video = req.file?.fileName

  const updatedData = { title, description }
  if (video) updatedData.video = video

  const updated = await Package.findByIdAndUpdate(id, updatedData, { new: true })
  if (!updated) return next(new ErrorResponse('Package not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deletePackage = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await Package.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Package not found', 404))

  res.status(200).json({ success: true, message: 'Package deleted' })
})

// ===== Event =====
// POST
exports.createNewEvent = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body
  const image = req.file.fileName

  const newEvent = await Event.create({ title, description, image })
  res.status(201).json({ success: true, message: 'New event created', data: newEvent })
})

// PUT
exports.updateEvent = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { title, description } = req.body
  const image = req.file?.fileName

  const updatedData = { title, description }
  if (image) updatedData.image = image

  const updated = await Event.findByIdAndUpdate(id, updatedData, { new: true })
  if (!updated) return next(new ErrorResponse('Event not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await Event.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Event not found', 404))

  res.status(200).json({ success: true, message: 'Event deleted' })
})

// ===== Teacher =====
// POST
exports.createNewTeacher = asyncHandler(async (req, res, next) => {
  const { teacher_name, description, job, rating } = req.body
  const image = req.file.fileName

  const newTeacher = await Teacher.create({ teacher_name, description, job, rating, image })
  res.status(201).json({ success: true, message: 'New teacher created', data: newTeacher })
})

// PUT
exports.updateTeacher = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { teacher_name, description, job, rating } = req.body
  const image = req.file?.fileName

  const updatedData = { teacher_name, description, job, rating }
  if (image) updatedData.image = image

  const updated = await Teacher.findByIdAndUpdate(id, updatedData, { new: true })
  if (!updated) return next(new ErrorResponse('Teacher not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deleteTeacher = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await Teacher.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Teacher not found', 404))

  res.status(200).json({ success: true, message: 'Teacher deleted' })
})

// ===== Footer =====
// POST
exports.createFooterInfo = asyncHandler(async (req, res, next) => {
  const { email, location, phone_number } = req.body
  const newInfo = await Footer.create({ email, location, phone_number })
  res.status(201).json({ success: true, message: 'New footer created', data: newInfo })
})

// PUT
exports.updateFooterInfo = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { email, location, phone_number } = req.body

  const updated = await Footer.findByIdAndUpdate(id, { email, location, phone_number }, { new: true })
  if (!updated) return next(new ErrorResponse('Footer not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deleteFooterInfo = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await Footer.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Footer not found', 404))

  res.status(200).json({ success: true, message: 'Footer deleted' })
})

// ===== Social Media =====
// POST
exports.createSocialMedia = asyncHandler(async (req, res, next) => {
  const { icon, link, color } = req.body
  const newSocialMedia = await SocialMedia.create({ icon, link, color })
  res.status(201).json({ success: true, message: 'New social media created', data: newSocialMedia })
})

// PUT
exports.updateSocialMedia = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const { icon, link, color } = req.body

  const updated = await SocialMedia.findByIdAndUpdate(id, { icon, link, color }, { new: true })
  if (!updated) return next(new ErrorResponse('Social media not found', 404))

  res.status(200).json({ success: true, data: updated })
})

// DELETE
exports.deleteSocialMedia = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const deleted = await SocialMedia.findByIdAndDelete(id)
  if (!deleted) return next(new ErrorResponse('Social media not found', 404))

  res.status(200).json({ success: true, message: 'Social media deleted' })
})
