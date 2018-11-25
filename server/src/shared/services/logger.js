const chalk = require('chalk')
const fs = require('fs')
const config = require('../config/config')

module.exports = {

  console(level, message) {
    if (level && message) {
      switch (level) {
        case 'info':
          global.console.log(`${chalk.green('> INFO: ')} ${message}`)
          break
        case 'debug':
          global.console.log(`${chalk.blue('> DEBUG: ')} ${message}`)
          break
        case 'warning':
          global.console.log(`${chalk.yellow('> WARNING: ')} ${message}`)
          break
        case 'error':
          global.console.log(`${chalk.red('> ERROR: ')} ${message}`)
          break
        default:
          global.console.log(message)
      }
    }
  },

  file(level, message) {
    const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }
    const date = new Date()
    const fDate = new Intl.DateTimeFormat(undefined, dateOptions).format(date)
    const fTime = new Intl.DateTimeFormat(undefined, timeOptions).format(date)
    const dirPath = `${config.paths.ROOT_PATH}/logs/${level}`
    const filePath = `${config.paths.ROOT_PATH}/logs/${level}/${fDate}.log`
    if (!fs.existsSync(dirPath)) {
      try {
        fs.mkdirSync(dirPath)
      } catch (e) { this.console('error', `Service::logger::file - Folder not created. Error: ${e}`) }
    }
    try {
      fs.appendFileSync(filePath, `${fTime}: ${message}\n`)
    } catch (e) { this.console('error', `Service::logger::file - Writing to file failed. Error: ${e}`) }
  },

}
