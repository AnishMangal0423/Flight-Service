const {makeAirplane}=require('../../controllers');
const {ModelNumber}=require('../../middlewares');
const express=require('express');


const router=express.Router();


router.post('/' ,ModelNumber,  makeAirplane.MakeAirplane);
router.get('/' , makeAirplane.getairplanes );
router.get('/:id' , makeAirplane.getairplane );


module.exports=router;