const { Cities_service } = require("../services");
const { Error_Res, Correct_Res } = require("../utils/common");
const { StatusCodes } = require("http-Status-Codes");

async function MakeCities(req , res){

     try {

        const city= await Cities_service.CreateCities({
  
            name:req.body.name
        })

        Correct_Res.data = city;

        return res.json({
          Correct_Res,
        });
        
     } catch (error) {
        Error_Res.message = " Something went wrong .. ";
        // Error_Res.message=
    
        Error_Res.Error.description = error.message;
    
        return res.status(error.statuscode).json({
          Error_Res,
        });
     }

}

module.exports={

   MakeCities,
}