const CrudRepository = require("./crud_repository");
const { Cities }=require('../models');


class CityRepository extends CrudRepository{
 
        constructor(){
           super(Cities);
        }
}

module.exports=CityRepository;