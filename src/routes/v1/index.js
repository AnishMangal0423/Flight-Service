const express=require('express')
const router=express.Router();
const airplane_routes=require('./airplane-routes');
const Cities_route=require('./cities-route')
const {}=

// router.get('/info' , Info);
router.use('/airplanes' , airplane_routes);
router.use('/cities',Cities_route);

module.exports=router



