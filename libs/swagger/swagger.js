class Swagger {
  constructor (swagger) {
    this.swagger = swagger
  }

  paths () {
    return this.swagger.paths
  }
}

export default Swagger
