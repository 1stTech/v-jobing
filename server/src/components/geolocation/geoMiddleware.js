const logger = require('../../shared/services/logger')

module.exports = Geo => ({
  async getCountryList(req, res, next) {
    try {
      const list = await Geo.find({}, { country: 1 })
      const countries = []
      list.forEach((el) => {
        countries.push(el.country)
      })
      req.data = countries
      next()
    } catch (e) {
      logger.console('error', `geoMiddleware.js::getCountryList > list not received from DB. Error: ${e}`)
      req.errors = { error: true, message: 'Server error' }
      next()
    }
  },

  async getRegionList(req, res, next) {
    try {
      const list = await Geo.findOne({ code: req.params.code }, { region: 1 })
      const regions = []
      list.region.forEach((el) => {
        regions.push(el.name)
      })
      req.data = regions
      next()
    } catch (e) {
      logger.console('error', `geoMiddleware.js::getRegionList > list not received from DB. Error: ${e}`)
      req.errors = { error: true, message: 'Server error' }
      next()
    }
  },

  async getCityList(req, res, next) {
    try {
      const list = await Geo.aggregate([
        {
          $match: { code: req.params.code },
        },
        {
          $project: {
            cityNames: {
              $reduce: {
                input: '$region.city.name',
                initialValue: [],
                in: { $concatArrays: ['$$this', '$$value'] },
              },
            },
          },
        },
      ])
      const cities = list[0].cityNames
      req.data = cities
      next()
    } catch (e) {
      logger.console('error', `geoMiddleware.js::getCityList > list not received from DB. Error: ${e}`)
      req.errors = { error: true, message: 'Server error' }
      next()
    }
  },
})
