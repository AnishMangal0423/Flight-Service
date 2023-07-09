const { CitiesRepository } = require("../repository");
const { AirplaneRepository } = require("../repository");
const AppError = require("../utils/errors/AppError");
const citiesRepository=new CitiesRepository();
const { StatusCodes } = require("http-Status-Codes");

async function CreateCities(data){


    try {
        
     const Cities = await citiesRepository.create(data)
     return Cities;


    } catch (error) {
        
      console.log("Find error in Cities service fn : Create Cities");
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

    CreateCities,
}