const express=require('express')

const PORT=3000;
const app=express();

app.get('/' , (req , res)=>{

      res.json({

        name:"Anish",
        fg:"Pranu"
      })
})

app.listen(PORT , function exec(){
    console.log(`My Express Server is ruuning on port ${PORT}`);
})