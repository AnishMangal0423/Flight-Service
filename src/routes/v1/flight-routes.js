const express=require('express');
const {makeFlight}=require('../../controllers');

const router=express.Router();

router.post('/' , makeFlight.MakeFlights);


module.exports=router;


