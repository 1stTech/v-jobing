const logger = require('../../shared/services/logger')

module.exports = Tag => ({
  async getTagsTop(req, res, next) {
    try {
      const tagsList = await Tag.find({}, { title: 1 }).sort({ queries: 1 }).limit(100)
      const tags = []
      tagsList.forEach((el) => {
        tags.push(el.title)
      })
      req.data = tags
      next()
    } catch (e) {
      logger.console('error', `tagsMiddleware.js::getTagsTop > list not received from DB. Error: ${e}`)
      req.errors = { error: true, message: 'Server error' }
      next()
    }
  },

  async getTagsByQueryString(req, res, next) {
    try {
      const tagsList = await Tag.find({ title: { $regex: [req.params.query], $options: 'i' } }).sort({ queries: 1 })
      const tags = []
      tagsList.forEach((el) => {
        tags.push(el.title)
      })
      req.data = tags
      next()
    } catch (e) {
      logger.console('error', `tagsMiddleware.js::getTagsByQueryString > list not received from DB. Error: ${e}`)
      req.errors = { error: true, message: 'Server error' }
      next()
    }
  },
})
