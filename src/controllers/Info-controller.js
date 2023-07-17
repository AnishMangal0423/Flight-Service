
function info(req , res){

     return res.status(500).json({

               message:"ok",
               info_data:{},
               if:"pranu",
               loc:"Flight-service"
               })
}


module.exports={

    info
}