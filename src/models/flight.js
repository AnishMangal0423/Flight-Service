"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
   
       // Writing all the associated Rules to it..

       
       this.belongsTo(models.Airplane, {

           foreignKey:'airplaneId',
           as:'airplaneDetail',
           required:true

       })
   
       this.belongsTo(models.Airport, {

        foreignKey:'departureAirportId',
        onDelete:'cascade',
        as:'departureAirportDetails'

    })


    this.belongsTo(models.Airport, {

      foreignKey:'arrivalAirportId',
      onDelete:'cascade',
      as:'arrivalAirportDetails'

  })

    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull:false,
      },

      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },

      departureAirportId: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },

      arrivalAirportId: {
        type: DataTypes.INTEGER,
        allowNull:false, 
      },

      departureTime: {
        type: DataTypes.DATE,
        allowNull:false, 
      },

      arrivalTime: {
        type: DataTypes.DATE,
        allowNull:false, 
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull:false, 
      },

      boardingGates: {
        type: DataTypes.STRING,
      },

      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull:false, 
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
