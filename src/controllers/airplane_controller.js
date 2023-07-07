const { airplane_Service } = require("../services");

async function MakeAirplane(req, res) {
  try {
    console.log("inside controller")
    const airplane = await airplane_Service.createAirpalne({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    return res.json({
      success: true,
      message: "Successfully Created ann airplane",
      data: response,
      error: {},
    });
  } catch (error) {
    console.log("There is some error in airplane-controller");

    return res.json({
      success: false,
      message: "Something went wrong",
      data: {},
      error: error,
    });
  }
}

module.exports = {
        MakeAirplane
};
