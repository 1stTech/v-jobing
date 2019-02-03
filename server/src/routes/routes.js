const router = require('express').Router()

const Geolocation = require('../shared/models/geolocation')
const geoMiddleware = require('../components/geolocation/geoMiddleware')(Geolocation)
const geoController = require('../components/geolocation/geoController')

router.get('/', (req, res) => {
  res.status(200).send('v-jobing OK!')
})

router.get('/getCoutryList',
  geoMiddleware.getCountryList,
  geoController.getCountryList)

router.get('/getRegionList/:code',
  geoMiddleware.getRegionList,
  geoController.getRegionList)

router.get('/getCityList/:code/:region',
  geoMiddleware.getCityList,
  geoController.getCityList)

module.exports = router
