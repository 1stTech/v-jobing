const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../..')

module.exports = {
  paths: {
    ROOT_PATH,
  },
  port: process.env.PORT || 3000,
  mongodbUri: {
    local: 'mongodb://localhost:27017/',
    mlab: process.env.MONGODB_MLAB_URL,
    test: process.env.MONGODB_URL,
  },
  battutaMedunesKey: process.env.BATTUTA_MEDUNES_KEY,
}
