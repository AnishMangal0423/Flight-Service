const express=require('express')
const router=express.Router();
const {info}=require('../../controllers');

router.get('/info' , info)

module.exports=router



