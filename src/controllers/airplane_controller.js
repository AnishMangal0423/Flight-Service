const { airplane_Service } = require("../services");
const {Error_Res , Correct_Res}=require('../utils/common');

async function MakeAirplane(req, res) {
  try {
    console.log("inside controller");

    const airplane = await airplane_Service.createAirpalne({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    
      Correct_Res.data=airplane
     
    return res.json({
          Correct_Res
    });
  } catch (error) {
   
    Error_Res.message=" Something went wrong .. "
    Error_Res.Error.description="Airplane not created ..some error .. Figure it out in airplane-controller "
    
    
    return res.json({
       Error_Res
    });
  }
}

module.exports = {
  MakeAirplane,
};
