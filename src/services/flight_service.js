const { FlightRepository } = require("../repository");
const AppError = require("../utils/errors/AppError");
const { StatusCodes } = require("http-Status-Codes");

async function CreateFlights(data){


    try {
        
     const flights = await FlightRepository.create(data)
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






async function getFlights(){

    try{
           const flight=await FlightRepository.getAll();
           return flight;

    }

    catch(error){
      throw new AppError(
        "Cannot Get cities object ",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }

}




async function getFlight(id){

  try{
         const city=await citiesRepository.get(id);
         return city;

  }

  catch(error){
// console.log("hello "+error)
// console.log("hwb "+error.statuscode)
// console.log(StatusCodes.NOT_FOUND)
    if(error.statuscode == StatusCodes.NOT_FOUND){

      throw new AppError("U passed wrong id parameter that is out of limit " , error.statuscodes);
    }

    throw new AppError(
      "Cannot Get city object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

    
  }

}



async function destroyflight(id){

  try {
    
      const flight=await FlightRepository.destroy(id);
      return flight;

  } catch (error) {
   
    if(error.statuscode == StatusCodes.NOT_FOUND){

      throw new AppError("U passed wrong id parameter that is Not present in our database " , error.statuscodes);
    }


    throw new AppError(
      "Cannot Delete City object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

  }
}




async function updateflight(data , id){

  try {
    
const flight=await FlightRepository.update(data , id);
  return flight;

  } catch (error) {
  
    throw new AppError(
      "Cannot Delete City object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

    
  }
}


module.exports={

    CreateFlights,
    getFlights,
    getFlight,
    destroyflight,
    updateflight
}