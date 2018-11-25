const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send('v-jobing OK!')
})

module.exports = router
