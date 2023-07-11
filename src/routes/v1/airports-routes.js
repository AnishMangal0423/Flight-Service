const {makeAirport}=require('../../controllers');
const {airport_middleware}=require('../../middlewares');
const express=require('express');


const router=express.Router();

console.log('inside routes')
router.post('/' ,airport_middleware,  makeAirport.MakeAirport);
router.get('/' , makeAirport.getairports );
router.get('/:id' , makeAirport.getairport );
router.delete('/:id' , makeAirport.destroyairport);
router.put('/:id' , makeAirport.updateairports)


module.exports=router;