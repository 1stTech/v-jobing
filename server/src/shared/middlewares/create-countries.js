// const axios = require('axios')

// const logger = require('../services/logger')
// const config = require('../config/config')

// module.exports = {
//   async getAllCountries(req, res, next) {
//     try {
//       console.log('getAllCountries: send request')
//       const response = await axios.get(`http://battuta.medunes.net/api/country/all/?key=${config.battutaMedunesKey}`)
//       // console.log(response)
//       res.status(200).json(response)
//       // next()
//     } catch (e) {
//       logger.console('error', `createCountries.js:getAllCountries Error: ${e}`)
//       next()
//     }
//   },
// }
