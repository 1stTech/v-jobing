const router = require('express').Router()
const cache = require('apicache').middleware

const Geolocation = require('../shared/models/geolocation')
const geoMiddleware = require('../components/geolocation/geoMiddleware')(Geolocation)
const geoController = require('../components/geolocation/geoController')

router.get('/', (req, res) => {
  res.status(200).send('v-jobing OK!')
})

router.get('/getCoutryList',
  cache('15 minute'),
  geoMiddleware.getCountryList,
  geoController.getCountryList)

router.get('/getRegionList/:code',
  cache('15 minute'),
  geoMiddleware.getRegionList,
  geoController.getRegionList)

router.get('/getCityList/:code/:region',
  cache('15 minute'),
  geoMiddleware.getCityList,
  geoController.getCityList)

module.exports = router
