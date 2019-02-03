
module.exports = {
  getCountryList(req, res) {
    if (req.errors) {
      res.status(200).json(req.errors)
    } else {
      res.status(200).json({ error: false, data: req.data })
    }
  },

  getRegionList(req, res) {
    if (req.errors) {
      res.status(200).json(req.errors)
    } else {
      res.status(200).json({ error: false, data: req.data })
    }
  },

  getCityList(req, res) {
    if (req.errors) {
      res.status(200).json(req.errors)
    } else {
      res.status(200).json({ error: false, data: req.data })
    }
  },
}
