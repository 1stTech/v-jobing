const logger = require('../services/logger')

module.exports = {
  notFound(req, res) {
    const msg = `${req.method} ${req.url} 404, Message: Page not found`
    logger.console('warning', msg)
    logger.file('warning', msg)

    res.status(404).json({ error: true, message: 'Not Found.' })
  },

  development(error, req, res) {
    logger.console('error', error)
    logger.file('error', error)

    res.render('error', {
      title: 'Error',
      error,
    })
  },

  production(error, req, res) {
    logger.file('error', error)
    res.render('error', {
      title: 'Error',
      message: error.message,
    })
  },
}
