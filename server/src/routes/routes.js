const router = require('express').Router()
const cache = require('apicache').middleware

const Geolocation = require('../shared/models/geolocation')
const Tags = require('../shared/models/tags')
const geoMiddleware = require('../components/geolocation/geoMiddleware')(Geolocation)
const geoController = require('../components/geolocation/geoController')
const tagsMiddleware = require('../components/tags/tagsMiddleware')(Tags)
const tagsController = require('../components/tags/tagsController')
const currencyMiddleware = require('../components/currency/currencyMiddleware')(Geolocation)
const currencyController = require('../components/currency/currencyController')

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

router.get('/getTags/',
  tagsMiddleware.getTagsTop,
  tagsController.getTagsTop)

router.get('/getTags/:query',
  tagsMiddleware.getTagsByQueryString,
  tagsController.getTagsByQueryString)

router.get('/getCurrencyList',
  currencyMiddleware.getCurrencyList,
  currencyController.getCurrencyList)

module.exports = router
