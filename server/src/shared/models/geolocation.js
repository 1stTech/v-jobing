const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  country: { type: String },
  code: { type: String },
  region: [{
    name: { type: String },
    path: { type: Array },
    city: [{
      name: { type: String },
      path: { type: Array },
      latitude: { type: String },
      longitude: { type: String },
    }],
  }],
})

module.exports = mongoose.model('Geolocation', schema)
