import jsYaml from 'js-yaml'
import Swagger from '../libs/swagger/swagger'

export const state = () => ({
  // swagger: {}
})

export const getters = {

}

export const mutations = {

}

export const actions = {
  async nuxtServerInit ({ dispatch }, { env }) {
    const key = env.storedKey
    await dispatch('swagger/IMPORT_WITH_KEY', key)
  }
}
