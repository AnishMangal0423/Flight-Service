const { FlightRepository } = require("../repository");
const AppError = require("../utils/errors/AppError");
const { StatusCodes } = require("http-Status-Codes");

const flightRepository = new FlightRepository();

async function CreateFlights(data){


    try {


     const flights = await flightRepository.create(data);
     console.log("f "+flights)
     return flights;


    } catch (error) {
        
      console.log("Find error in flights service fn : Create flights");
      console.log( "ppp" +error)
    

      
    if (error.name == "SequelizeValidationError" || error.name== "SequelizeUniqueConstraintError") {
        let explanation = [];
        // console.log(error);
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
  
        // console.log(explanation);
  
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError(
        "Cannot create a new Airplane object ",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
     

    }
}




module.exports={
    CreateFlights
}