const express=require('express')
const router=express.Router();
const {Info}=require('../../controllers');
const airplane_routes=require('./airplane-routes');

router.get('/info' , Info);
router.use('/airplanes' , airplane_routes);

module.exports=router



