'use strict';

/** @type {import('sequelize-cli').Migration} */
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


    await queryInterface.bulkInsert('Seats', [{
   

      airplaneId:2,
      row:1,
      col:"A",
     updatedAt:new Date(),
     createdAt:new Date()
  },
  {
   

    airplaneId:2,
    row:1,
    col:"B",
   updatedAt:new Date(),
   createdAt:new Date()
},
{
   

  airplaneId:2,
  row:1,
  col:"C",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:1,
  col:"D",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:1,
  col:"E",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:1,
  col:"F",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:2,
  col:"A",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:2,
  col:"B",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:2,
  col:"C",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:2,
  col:"D",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:2,
  col:"E",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:2,
  col:"F",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:3,
  col:"A",
 updatedAt:new Date(),
 createdAt:new Date()
},
{
   

  airplaneId:2,
  row:3,
  col:"B",
 updatedAt:new Date(),
 createdAt:new Date()
},

 ])


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
