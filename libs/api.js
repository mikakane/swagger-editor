import axios from 'axios'
import config from './config'

const url = config.api

axios.defaults.baseURL = url

export default {
  getSwagger (key) {
    return axios.get('/swagger/' + key + '/json').then((response) => {
      return response.data
    })
  },
  putSwagger (key, data) {
    return axios.put('/api/swagger/' + key, data).then((response) => {
      return true
    })
  },
  patchSwagger (key, data) {
    return axios.patch('/api/swagger/' + key, data).then((response) => {
      return true
    })
  }
}
