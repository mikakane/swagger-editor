import jsYaml from 'js-yaml'

export default {
  toYaml (swagger) {
    const yaml = jsYaml.safeDump(swagger)
    return yaml
  }
}
