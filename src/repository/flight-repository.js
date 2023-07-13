const CrudRepository = require("./crud_repository");
const { Flight, Airplane, Cities, Airport } = require("../models");
const { Sequelize } = require("sequelize");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  // will add some custom functions now-

  async getAllFlight(filter) {
    // console.log(filter)
    const response = await Flight.findAll({
      where: filter,
      // order:sort,

      include: [
        {
          model: Airplane,
          required: true,
          as: "airplaneDetail",
        },

        {
          model: Airport,
          required: true,
          as: "departureAirportDetails",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirportDetails.code")
            ),
          },
          include: [
            {
              model: Cities,
              required: true,
            },
          ],
        },

        {
          model: Airport,
          required: true,
          as: "arrivalAirportDetails",

          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirportDetails.code")
            ),
          },
          include: [
            {
              model: Cities,
              required: true,
            },
          ],
        },
      ],
    });
    console.log("rees ", response);
    return response;
  }


    // Now making different function to decrease seat from our databases--

    async updateRemainingSeat(flightId , seat , dec="true"){

  console.log('inside update ser')
  
   const flight=await Flight.findByPk(flightId);
    console.log(flight);

      if(dec=="true"){
        console.log('hi')
          const response= await flight.decrement('totalSeats' , {by:seat, isNewRecord: true});
          console.log(response)
          return response;

      }

      else{
    
        const response= await flight.increment('totalSeats' , {by:seat});
        console.log(response)
        return response;

      }
    }





}

module.exports = FlightRepository;


/****
 * 
 *   In this Commit Part we basically described or expanded our all join quiries to the same table usinng include and model property
 *   if we not like default naming giving  to our column by using as in both reposiory and model file by including as in foth flight and repo flight we can add naming change
 * 
 * it default takes id as mapping but we can do to other column as well as done here by code
 * 
 */