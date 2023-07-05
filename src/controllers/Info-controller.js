const express=require('express');

function info(req , res){

     return res.status(500).json({

               message:"ok",
               info_data:{},
               if:"pranu"
               })
}


module.exports={

    info
}