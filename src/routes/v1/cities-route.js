const express=require('express');
const {makeCity}=require('../../controllers');

const router=express.Router();


router.post('/' , makeCity.MakeCities);
router.get('/' , makeCity.getcities );
router.get('/:id' , makeCity.getcity);
router.delete('/:id' ,makeCity.destroycity);
router.put('/:id' , makeCity.updatecity)

module.exports=router;


