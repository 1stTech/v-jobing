const mongoose = require('mongoose')

const { mongodbUri } = require('../config/config')
const logger = require('../services/logger')

// log to console if environment is dev.
if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true)
}

mongoose.set('useCreateIndex', true)

mongoose.connect(mongodbUri.mlab, { useNewUrlParser: true })

mongoose.connection.on('error', (e) => {
  logger.console('error', `MongoDB connection error: ${e}`)
  logger.file('error', `MongoDB connection error: ${e}`)
})
mongoose.connection.once('open', () => logger.console('info', 'Connected to MongoDB'))
mongoose.connection.on('disconnected', () => logger.console('info', 'Disconnected from MongoDB'))

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    logger.console('error', `Mongoose disconnected through: ${msg}`)
    logger.file('error', `Mongoose disconnected through: ${msg}`)
    callback()
  })
}
// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2')
  })
})
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0)
  })
})
process.on('unhandledRejection', (r) => {
  logger.console('error', `UnhandledRejection: ${r}`)
  logger.file('error', `UnhandledRejection: ${r}`)
})
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app termination', () => {
    process.exit(0)
  })
})

module.exports = {
  connection: mongoose.connection,
}
