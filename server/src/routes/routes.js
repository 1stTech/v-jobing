const router = require('express').Router()

const CreateCountriesMiddleware = require('../shared/middlewares/create-countries')

router.get('/', (req, res) => {
  res.status(200).send('v-jobing OK!')
})

router.get('/create-countries', CreateCountriesMiddleware.getAllCountries)

module.exports = router
