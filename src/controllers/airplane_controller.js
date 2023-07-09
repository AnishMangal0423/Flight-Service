const { airplane_Service } = require("../services");
const { Error_Res, Correct_Res } = require("../utils/common");
const correct_res = require("../utils/common/correct_response");

async function MakeAirplane(req, res) {
  try {
    console.log("inside controller");

    const airplane = await airplane_Service.createAirpalne({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    Correct_Res.data = airplane;

    return res.json({
      Correct_Res,
    });
  } catch (error) {
    // console.log("hiiii  " + error);

    Error_Res.message = " Something went wrong .. ";
    // Error_Res.message=

    Error_Res.Error.description = error.message;

    return res.status(error.statuscode).json({
      Error_Res,
    });
  }
}

async function getairplanes(req, res) {
  try {
    const airplanes = await airplane_Service.getAirplanes();
    Correct_Res.data = airplanes;

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

async function getairplane(req, res) {
  try {
    const airplane = await airplane_Service.getAirplane(req.params.id);
    Correct_Res.data = airplane;

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



async function destroyairplane(req , res){

try {
  
  const airplane=await airplane_Service.destroyAirplane(req.params.id)
  Correct_Res.data = airplane;

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



async function updateairplanes(req , res){

try {
  
const airplane=await airplane_Service.updateAirplanes({

              modelNumber:req.body.modelNumber,
              capacity:req.body.capacity

}, req.params.id);

Correct_Res.data = airplane;

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
  MakeAirplane,
  getairplanes,
  getairplane,
  destroyairplane,
  updateairplanes
};
