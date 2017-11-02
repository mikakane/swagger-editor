
const flattenPath = (method,pathname,path) => {
  return Object.assign({}, {method, pathname}, path)
}

export default {
  flatten (pathes) {
    let rtn = []
    if (pathes) {
      for (let pathname of Object.keys(pathes)) {
        for (let method of Object.keys(pathes[pathname])) {
          rtn.push(flattenPath(method, pathname, pathes[pathname][method]))
        }
      }
    }
    return rtn
  },
  findByOperationId: (pathes, operationId) =>  {
    if (pathes) {
      for (let pathname of Object.keys(pathes)) {
        for (let method of Object.keys(pathes[pathname])) {
          if (pathes[pathname][method].operationId === operationId) {
            return flattenPath(method, pathname, pathes[pathname][method])
          }
        }
      }
    }
    return null
  }
}
