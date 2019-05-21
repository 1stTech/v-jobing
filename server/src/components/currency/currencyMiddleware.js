const logger = require('../../shared/services/logger')

module.exports = Geo => ({
  async getCurrencyList(req, res, next) {
    try {
      const list = await Geo.aggregate([
        {
          $project: { currencies: 1, _id: 0 },
        },
        {
          $unwind: '$currencies',
        },
        {
          $project: {
            currencies: {
              code: '$currencies.code',
              name: '$currencies.name',
              symbol: '$currencies.symbol',
            },
          },
        },
        {
          $group: {
            _id: null,
            currencies: { $addToSet: '$currencies' },
          },
        },
      ])
      const currencyList = list[0].currencies
      currencyList.forEach((el) => {
        Reflect.deleteProperty(el, '_id')
      })
      req.data = currencyList
      next()
    } catch (e) {
      logger.console('error', `currencyMiddleware.js::getCurrencyList > list not received from DB. Error: ${e}`)
      req.errors = { error: true, message: 'Server error' }
      next()
    }
  },
})
