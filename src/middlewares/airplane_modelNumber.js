const { StatusCodes } = require("http-Status-Codes");
const AppError=require('../utils/errors/AppError')
const {Error_Res}=require('../utils/common');

async function airplane_modelNumber(req , res , next){
     

        if(!req.body.modelNumber){

             Error_Res.message=" Something went wrong .. Figure it out "
             Error_Res.Error.description=new AppError("Model number can't be Null value ..", StatusCodes.BAD_REQUEST);

             console.log(Error_Res);
            return res.status( StatusCodes.BAD_REQUEST).json({
                 Error_Res
           
            })
        }

        next();
}

module.exports=airplane_modelNumber;