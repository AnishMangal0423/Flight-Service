const express=require('express');
const {makeFlight}=require('../../controllers');
const {flight_middleware}=require('../../middlewares');

const router=express.Router();

router.post('/' , flight_middleware,makeFlight.MakeFlights);
router.get('/',makeFlight.getFlights);
router.get('/:id', makeFlight.getFlight);

// for update --> /api/v1/flights/:id/seats
router.patch('/:id/seats', makeFlight.updateSeats);

module.exports=router;


