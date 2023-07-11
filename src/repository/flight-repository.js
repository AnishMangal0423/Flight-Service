const CrudRepository = require("./crud_repository");
const { Flight }=require('../models');


class FlightRepository extends CrudRepository{
 
        constructor(){
           super(Flight);
        }

      // will add some custom functions now-
      
       async getAllFlight(filter){

       
        const response = await Flight.findAll({

            where:filter,
            // order:sort
        })

        return response
       }
}

module.exports=FlightRepository;