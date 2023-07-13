const { FlightRepository } = require("../repository");
const AppError = require("../utils/errors/AppError");
const { StatusCodes } = require("http-Status-Codes");
const{Op}=require('sequelize')

const flightRepository = new FlightRepository();

async function CreateFlights(data){


    try {


     const flights = await flightRepository.create(data);
  
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


async function getAllflight(query){

    const endingDate="T23:59:00.000Z"

     const customfilter={}
    //  const sortFilter=[]

    if(query.trip){

        [departureAirportId , ArrivalAirportId]=query.trip.split('-');
        customfilter.departureAirportId=departureAirportId;
        customfilter.ArrivalAirportId=ArrivalAirportId;
    }


    if(query.price){

        [minprice , maxprice]=query.price.split('-');
        customfilter.price={
            [Op.between]:[minprice,((maxprice == undefined)? 20000000 : maxprice)]
        }
    }


    if(query.travellers){

        customfilter.totalSeats={

            [Op.gte]:query.travellers
        }
    }


    if(query.tripDate){
        console.log("hiiii  "+query.tripDate+endingDate)
       customfilter.departureTime={

        [Op.between]:[query.tripDate  , query.tripDate+endingDate]
       }

    }

// if(query.sort){

//     const params=query.sort.split(',');
//     const sortFilters= params.map((param) => param.split('_'))

//        console.log("fil ",sortFilters)
//     sortFilter=sortFilters
// }

      
    try{

        // console.log("ssort ", sortFilter)
        const flights=await flightRepository.getAllFlight(customfilter);
        console.log("fli "+flights)
        return flights;

 }

 catch(error){
  console.log("error  "+error)
   throw new AppError(
     "Cannot Get Flight object ",
     StatusCodes.INTERNAL_SERVER_ERROR
   );
 }


}




async function getflight(id){

  try{
        
         const flight=await flightRepository.get(id);
         return flight;

  }

  catch(error){
// console.log("hello "+error)
// console.log("hwb "+error.statuscode)
// console.log(StatusCodes.NOT_FOUND)
    if(error.statuscode == StatusCodes.NOT_FOUND){

      throw new AppError("U passed wrong id parameter that is out of limit " , error.statuscodes);
    }

    throw new AppError(
      "Cannot Get Flight object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );

    
  }

}



module.exports={
    CreateFlights,
    getAllflight,
    getflight,
}


