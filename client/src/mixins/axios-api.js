import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default {
  async _request(method, path, data) {
    try {
      const res = await axios[method](`${BASE_URL}/${path}`, data)
      console.log('_REQUEST: ', res.data) // TODO
      if (!res.data.error) {
        return res.data
      }
      throw new Error(res.data.message)
    } catch (e) {
      console.error(`axios-api::_request > ${e}`)
    }
  },

  get(path) {
    return this._request('get', path)
  },

  post(path, data) {
    return this._request('post', path, data)
  },

  put(path, data) {
    return this._request('put', path, data)
  },

  //TODO
  delete(path) {
    return this._request('delete', path)
  },
}