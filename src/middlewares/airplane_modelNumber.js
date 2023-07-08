const { StatusCodes } = require('http-status-codes')
const {Error_Res}=require('../utils/common');

async function airplane_modelNumber(req , res , next){
     

        if(!req.body.modelNumber){

             Error_Res.message=" Something went wrong .. Figure it out "
             Error_Res.Error.description="Model number can't be Null value .."

            return res.status(StatusCodes.BAD_REQUEST).json({

               
                Error_Res
            })
        }

        next();
}

module.exports=airplane_modelNumber;