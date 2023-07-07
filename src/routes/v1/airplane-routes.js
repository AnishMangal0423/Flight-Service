const { makeAirplane }=require('../../controllers');
const express=require('express');

const router=express.Router();


router.post('/' , makeAirplane.MakeAirplane);

module.exports=router;