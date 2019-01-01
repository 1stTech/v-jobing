const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const helmet = require('helmet')
// const cors = require('cors')
// const RateLimit = require('express-rate-limit')

// Set the path to environment variables
const dotenv = require('dotenv')

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
dotenv.config({ path: envFile })

const config = require('./shared/config/config')
const error = require('./shared/middlewares/error-handler')
const router = require('./routes/routes')

// Set connection from DB
require('./shared/services/db')

// const limit = new RateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   max: 50, // limit each IP to 3 requests per windowMs
//   delayMs: 0, // disable delaying - full speed until the max limit is reached
// })

const app = express()
app.use(helmet())
// app.use(cors())
// app.use(limit)
// app.use(express.json())

// log to console if environment is dev.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan((tokens, req, res) => [
    chalk.green('> INFO: '),
    chalk.green(tokens.method(req, res)),
    tokens.url(req, res),
    chalk.yellow(tokens.status(req, res)),
    tokens['response-time'](req, res), 'ms',
    '-', tokens.res(req, res, 'content-length'),
  ].join(' ')))
}

// Routes
app.use(router)

// Error handler
app.use(error.notFound)
app.use(app.get('env') === 'development' ? error.development : error.production)

// START THE SERVER
app.listen(config.port, () => {
  global.console.log(`App is listening on port ${config.port}`)
  global.console.log('NODE_ENV: ', process.env.NODE_ENV)
})

// STOP SERVER
process.on('SIGTERM', () => {
  app.close()
})
