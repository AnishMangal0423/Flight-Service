const { StatusCodes } = require("http-Status-Codes");
const AppError=require('../utils/errors/AppError')
const {Error_Res}=require('../utils/common');
const {compare}=require('../utils/helper/dateTime-helper')

async function flight_middleware(req , res , next){
     

        if(!req.body.flightNumber){

             Error_Res.message=" Something went wrong .. Figure it out "
             Error_Res.Error.description=new AppError("FlightNumber can't be Null value ..", StatusCodes.BAD_REQUEST);

             console.log(Error_Res);
            return res.status( StatusCodes.BAD_REQUEST).json({
                 Error_Res
           
            })
        }


        
        if(!req.body.airplaneId){

            Error_Res.message=" Something went wrong .. Figure it out "
            Error_Res.Error.description=new AppError("airplaneId can't be Null value ..", StatusCodes.BAD_REQUEST);

            console.log(Error_Res);
           return res.status( StatusCodes.BAD_REQUEST).json({
                Error_Res
          
           })
       }


       
       if(!req.body.departureAirportId){

        Error_Res.message=" Something went wrong .. Figure it out "
        Error_Res.Error.description=new AppError("departureAirportId can't be Null value ..", StatusCodes.BAD_REQUEST);

        console.log(Error_Res);
       return res.status( StatusCodes.BAD_REQUEST).json({
            Error_Res
      
       })
   }


   
       
   if(!req.body.arrivalAirportId){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("arrivalAirportId can't be Null value ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}


       
if(!req.body.departureTime){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("departureTime can't be Null value ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}




       
if(!req.body.arrivalTime){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("arrivalTime can't be Null value ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}



       
if(!req.body.price ){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("Price can't be Null value ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}


       
if(req.body.price < 0 ){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("Price can't be Negative  ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}



       
if(!req.body.totalSeats){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("ToatlSeats cant  be Null value ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}



       
if(!compare(req.body.arrivalTime, req.body.departureTime)){

    Error_Res.message=" Something went wrong .. Figure it out "
    Error_Res.Error.description=new AppError("Departure Time cant be more then Arrival Time ..", StatusCodes.BAD_REQUEST);

    console.log(Error_Res);
   return res.status( StatusCodes.BAD_REQUEST).json({
        Error_Res
  
   })
}




        next();
}

module.exports=flight_middleware;