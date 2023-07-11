const {info}= require('./Info-controller.js')
const express=require('express');


module.exports={

    Info:info,
    makeAirplane:require('./airplane_controller.js'),
    makeCity:require('./Cities_controller.js'),
    makeAirport:require('./airports-controller.js'),
    makeFlight:require('./flight-controller.js')
}