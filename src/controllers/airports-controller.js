const { airports_Service } = require("../services");
const { Error_Res, Correct_Res } = require("../utils/common");
const correct_res = require("../utils/common/correct_response");



async function MakeAirport(req, res) {
  try {
    
    //  console.log('inside controller'+airports_service)
    const airport = await airports_Service.createAirport({
       name:req.body.name,
       code:req.body.code,
       address:req.body.address,
       cityId:req.body.cityId,

    });

    console.log("airport  "+airport)
    Correct_Res.data = airport;

    return res.json({
      Correct_Res,
    });
  } catch (error) {
    console.log("hiiiiy  " + error);

    Error_Res.message = " Something went wrong .. ";
    // Error_Res.message=

    Error_Res.Error.description = error.message;

    return res.status(400).json({
      Error_Res,
    });
  }
}

async function getairports(req, res) {
  try {
    const airports = await airports_Service.getAirports();
    Correct_Res.data = airports;

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

async function getairport(req, res) {
  try {
    const airport = await airports_Service.getAirport(req.params.id);
    Correct_Res.data = airport;

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



async function destroyairport(req , res){

try {
  
  const airport=await airports_Service.destroyAirport(req.params.id)
  Correct_Res.data = airport;

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



async function updateairports(req , res){

try {
  
const airport=await airports_Service.updateAirports({

    name:req.body.name,
    code:req.body.code,
    address:req.body.address,
    cityId:req.body.cityId,            

}, req.params.id);

Correct_Res.data = airport;

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


module.exports = {
  MakeAirport,
  getairports,
  getairport,
  destroyairport,
  updateairports
};

