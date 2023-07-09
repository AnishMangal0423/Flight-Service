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





async function getcities(req, res) {
    try {
      const cities = await Cities_service.getCities();
      Correct_Res.data = cities;
  
      return res.json({
        Correct_Res,
      });
    } catch (error) {
      Error_Res.message = " Something went wrong .. ";
      Error_Res.Error.description = error.message;
  
      return res.status(error.statuscode).json({
        Error_Res,
      });
    }
  }
  


  async function getcity(req, res) {
    try {
      const city = await Cities_service.getcity(req.params.id);
      Correct_Res.data = city;
  
      return res.json({
        Correct_Res,
      });
    } catch (error) {
      Error_Res.message = " Something went wrong .. ";
      Error_Res.Error.description = error.message;
  
      return res.json({
        Error_Res,
      });
    }
  }
  
  
  
  async function destroycity(req , res){
  
  try {
    
    const city=await Cities_service.destroycity(req.params.id)
    Correct_Res.data = city;
  
    return res.json({
      Correct_Res,
    });
  
  } catch (error) {
    
    Error_Res.message = " Something went wrong .. ";
      Error_Res.Error.description = error.message;
  
      return res.json({
        Error_Res,
      });
  }
  
  }
  
  
  
  async function updatecity(req , res){
  
  try {
    
  const city=await Cities_service.updatecity({
  
              name:req.body.name
  
  }, req.params.id);
  
  Correct_Res.data = city;
  
    return res.json({
      Correct_Res,
    });
  
  
  } catch (error) {
    
    Error_Res.message = " Something went wrong .. ";
      Error_Res.Error.description = error.message;
  
      return res.json({
        Error_Res,
      });
  }
  
  }
  

module.exports={

   MakeCities,
   getcities,
   getcity,
   updatecity,
   destroycity
}