const CrudRepository = require("./crud_repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {

    super(Airplane);
  }
}

module.exports = AirplaneRepository;
