const { makeAirplane }=require('../../controllers');
const {ModelNumber}=require('../../middlewares');
const express=require('express');


const router=express.Router();


router.post('/' ,ModelNumber,  makeAirplane.MakeAirplane);

module.exports=router;