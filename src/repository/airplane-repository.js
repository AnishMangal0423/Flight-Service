const CrudRepository = require("./crud_repository");
const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {

    console.log(Airplane);

    super(Airplane);
  }
}

module.exports = AirplaneRepository;
