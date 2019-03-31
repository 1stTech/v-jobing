/* eslint-disable func-names */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  queries: { type: Number },
  searchQuery: [
    { date: { type: Date } },
  ],
  creatingQuery: [
    { date: { type: Date } },
  ],
})

schema.pre('save', function (next) {
  this.title = this.title.toLowerCase()
  next()
})

module.exports = mongoose.model('Tag', schema)
