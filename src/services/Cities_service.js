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






async function getCities(){

    try{
           const cities=await citiesRepository.getAll();
           return cities;

    }

    catch(error){
      throw new AppError(
        "Cannot Get cities object ",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }

}




async function getcity(id){

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



async function destroycity(id){

  try {
    
      const city=await citiesRepository.destroy(id);
      return city;

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




async function updatecity(data , id){

  try {
    
const city=await citiesRepository.update(data , id);
  return city;

  } catch (error) {
  
    throw new AppError(
      "Cannot Delete City object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

    
  }
}


module.exports={

    CreateCities,
    getCities,
    getcity,
    destroycity,
    updatecity
}