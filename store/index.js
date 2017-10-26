import jsYaml from 'js-yaml'
import Swagger from '../libs/swagger/swagger'

export const state = () => ({
  swagger: {}
})

export const getters = {
  paths (state) {
    let rtn = []
    if (state.swagger.paths) {
      for (let pathname of Object.keys(state.swagger.paths)) {
        for (let method of Object.keys(state.swagger.paths[pathname])) {
          rtn.push(Object.assign({}, {
            method,
            pathname
          }, state.swagger.paths[pathname][method]))
        }
      }
    }
    return rtn
  },
  findByOperationId: (state) => (operationsId) => {
    if (state.swagger.paths) {
      for (let pathname of Object.keys(state.swagger.paths)) {
        for (let method of Object.keys(state.swagger.paths[pathname])) {
          if (state.swagger.paths[pathname][method].operationId === operationsId) {
            return Object.assign({}, {
              method,
              pathname
            }, state.swagger.paths[pathname][method])
          }
        }
      }
    }
    return null
  },
  exportYaml (state) {
    const yaml = jsYaml.safeDump(state.swagger)
    return yaml
  }
}

export const mutations = {
  IMPORT_SWAGGER (state, swagger) {
    state.swagger = swagger
    localStorage.setItem('SWAGGER', JSON.stringify(swagger))
  },
  RESTORE_SWAGGER (state) {
    const savedData = localStorage.getItem('SWAGGER')
    if (savedData) {
      state.swagger = JSON.parse(savedData)
    }
  },
  ADD_PATH (state, key, path) {
    state.paths[key] = path
  }
}

export const actions = {
  loadYaml (context, yaml) {
    jsYaml.safeLoadAll(yaml, (doc) => {
      console.log(doc)
      context.commit('IMPORT_SWAGGER', doc)
    })
  }
}
