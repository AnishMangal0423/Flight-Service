'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

     /**
      * on javascript level it also provides bindings
      * 
      */
         this.hasMany(models.airports , {

         foreignKey:'cityId',
         onUpdate:'CASCADE',
         onDelete:'CASCADE',

         })

    }
  }
  Cities.init({
    name:{
      type:DataTypes.STRING,
      unique:true,
    }
  }, {
    sequelize,
    modelName: 'Cities',
  });
  return Cities;
};