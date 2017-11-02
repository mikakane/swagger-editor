import jsYaml from 'js-yaml'
import swagger from '../libs/swagger/swagger'
import pathes from '../libs/swagger/pathes'
import info from '../libs/swagger/info'

import api from '../libs/api'

export const state = () => ({
  info: null,
  pathes: null,
  original: null,
  key: null
})

export const getters = {
  storedKey: () => {
    return localStorage.getItem('APP_KEY')
  },
  FLATTEN_PATHES: (state) => pathes.flatten(state.pathes),
  FIND_BY_OPERATION_ID: (state) => (operationsId) => pathes.findByOperationId(state.pathes, operationsId),
  // exportYaml: (state, getters) => swagger.toYaml(state)
}

export const mutations = {
  SET_SWAGGER (state, swagger) {
    state.original = swagger
    state.info = swagger.info || {}
    state.pathes = swagger.pathes || {}
  },
  SET_KEY (state, key) {
    state.key = key
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('APP_KEY', key)
    }
  },
  SAVE_INFO (state, info) {
    console.log(state, info)
    state.info = info
  },
  SAVE_PATHES (state, pathes) {
    state.pathes = pathes
  },
  SET_PATH (state, path) {
    const pathes = Object.assign({}, state.pathes)
    if (!pathes[path.pathname]) {
      pathes[path.pathname] = {}
    }
    pathes[path.pathname][path.method] = path
    state.pathes = pathes
  }
}

export const actions = {
  async CREATE_NEW (context) {
    var key = Math.random().toString(36).slice(-10)
    var defaultData = {
      openapi: '3.0.0',
      info: {
        title: 'my api doc'
      },
      pathes: {
        '/': {
          'get': {
            operationId: 'root'
          }
        }
      }
    }
    await api.putSwagger(key, defaultData)
    context.commit('SET_SWAGGER', defaultData)
    context.commit('SET_KEY', key)
    return key
  },
  async IMPORT_WITH_KEY (context, key = null) {
    key = key || context.state.key
    console.log(context)
    const swagger = await api.getSwagger(key)
    context.commit('SET_SWAGGER', swagger)
    context.commit('SET_KEY', key)
    return key
  },
  async STORE (context) {
    var data = Object.assign({}, context.state.original, {
      info: context.state.info,
      pathes: context.state.pathes
    })
    var key = context.state.key
    await api.patchSwagger(key, data)
  },
  async ADD_PATH (context, path) {
    context.commit('SET_PATH', path)
    return await Promise.resolve()
  }
}
