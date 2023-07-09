const {makeAirplane}=require('../../controllers');
const {ModelNumber}=require('../../middlewares');
const express=require('express');


const router=express.Router();


router.post('/' ,ModelNumber,  makeAirplane.MakeAirplane);
router.get('/' , makeAirplane.getairplanes );
router.get('/:id' , makeAirplane.getairplane );
router.delete('/:id' , makeAirplane.destroyairplane);
router.put('/:id' , makeAirplane.updateairplanes)


module.exports=router;