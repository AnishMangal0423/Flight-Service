'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */

const { Op }=require( sequelize);
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     await queryInterface.bulkInsert('Airplanes', [{

         modelNumber:"MIG-S11",
        capacity:199,
        updatedAt:new Date(),
        createdAt:new Date()
     },
    
    {

        modelNumber:"Chanada-11",
        capacity:112,
        updatedAt:new Date(),
        createdAt:new Date()
    }
    ])


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


    // await queryInterface.bulkDelete('Airplane', )
  
  await queryInterface.bulkDelete('Airplanes' , {[Op.or]:[{modelNumber:'MIG-S11'} , {modelNumber:"Chanada-11"}]});
  
  }
};
