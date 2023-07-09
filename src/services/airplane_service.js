const { AirplaneRepository } = require("../repository");
const AppError = require("../utils/errors/AppError");
const { StatusCodes } = require("http-Status-Codes");
const airplaneRepository = new AirplaneRepository();

async function createAirpalne(data) {
  try {
    console.log("inside services");

    const airplane = await airplaneRepository.create(data);
    //   console.log(airplane)

    return airplane;
  } catch (error) {
    console.log("There is some error in airplane service");

    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      console.log(error);
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      console.log(explanation);

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airplane object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirpalne,
};
