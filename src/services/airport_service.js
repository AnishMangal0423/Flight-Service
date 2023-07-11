const { AirportRepository } = require("../repository");
const AppError = require("../utils/errors/AppError");
const { StatusCodes } = require("http-Status-Codes");
const airportRepository = new AirportRepository();



async function createAirport(data) {
  try {

     console.log('inside service')
    const airport = await airportRepository.create(data);
    console.log("in airportservice "+airport);
    return airport;


  } catch (error) {
    console.log("There is some error in airport create service "+error);

    if (error.name == "SequelizeValidationError" ||  error.name== "SequelizeUniqueConstraintError") {
      let explanation = [];
      // console.log(error);
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      // console.log(explanation);

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airport object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}


async function getAirports(){

    try{
           const airports=await airportRepository.getAll();

           console.log("air "+airports)
           return airports;

    }

    catch(error){

       console.log("hiiiiiiiiiiiiiiii")

      throw new AppError(
        "Cannot Get Airports object ",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }

}




async function getAirport(id){

  try{
         const airport=await airportRepository.get(id);
         return airport;

  }

  catch(error){
// console.log("hello "+error)
// console.log("hwb "+error.statuscode)
// console.log(StatusCodes.NOT_FOUND)
    if(error.statuscode == StatusCodes.NOT_FOUND){

      throw new AppError("U passed wrong id parameter that is out of limit " , error.statuscodes);
    }

    throw new AppError(
      "Cannot Get Airport object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

    
  }

}



async function destroyAirport(id){

  try {
    
      const response=await airportRepository.destroy(id);
      return response;

  } catch (error) {
   
    if(error.statuscode == StatusCodes.NOT_FOUND){

      throw new AppError("U passed wrong id parameter that is Not present in our database " , error.statuscodes);
    }


    throw new AppError(
      "Cannot Delete Airport object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

  }
}




async function updateAirports(data , id){

  try {
    
const airport=await airportRepository.update(data , id);
  return airport;

  } catch (error) {
  
    throw new AppError(
      "Cannot Delete Airport object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

    
  }
}
module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirports
};
