const CrudRepository = require("./crud_repository");
const { flight }=require('../models');


class FlightRepository extends CrudRepository{
 
        constructor(){
           super(flight);
        }
}

module.exports=FlightRepository;