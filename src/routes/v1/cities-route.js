const express=require('express');
const {makeCity}=require('../../controllers');

const router=express.Router();


router.post('/' , makeCity.MakeCities);

module.exports=router;


