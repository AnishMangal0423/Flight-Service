const {info}= require('./Info-controller.js')
const express=require('express');


module.exports={

    Info:info,
    makeAirplane:require('./airplane_controller.js')
}