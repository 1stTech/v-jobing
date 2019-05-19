const logger = require('../../shared/services/logger')

module.exports = Geo => ({
  async getCurrencyList(req, res, next) {
    try {
      const list = await Geo.find({}, { currencies: 1 }).sort({ queries: 1 })
      const currencyList = []
      list.forEach((el) => {
        const item = el.currencies
        const currency = {}
        for (const i of item) {
          currency.code = i.code
          currency.name = i.name
          currency.symbol = i.symbol
          currencyList.push(currency)
        }
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
