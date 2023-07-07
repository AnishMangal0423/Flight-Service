const { AirplaneRepository } = require('../repository');

const airplaneRepository = new AirplaneRepository();

async function createAirpalne(data) {
  try {
console.log("inside services");

    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log("There is some error in airplane service");
  }
}

module.exports = {
  createAirpalne,
};
