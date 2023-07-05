const {PORT}= require('./config');
const express=require('express')

const app=express();

app.get('/' , (req , res)=>{

    res.json({

      name:"Anish",
      fg:"Pranu Bhandari"
    })
})


app.listen(PORT , function exec(){

      console.log(`Starting My server at Port ${PORT}`);
})
