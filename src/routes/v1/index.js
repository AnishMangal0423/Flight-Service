const express=require('express')
const router=express.Router();
const airplane_routes=require('./airplane-routes');
const Cities_route=require('./cities-route')
const airports_route=require('./airports-routes');
const flight_route=require('./flight-routes')
const{Info}=require('../../controllers')
// console.log(Info)

router.get('/info' , Info.info);
router.use('/airplanes' , airplane_routes);
router.use('/cities',Cities_route);
router.use('/airports',airports_route );
router.use('/flights',flight_route)

module.exports=router



