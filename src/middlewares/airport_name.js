const { StatusCodes } = require("http-Status-Codes");
const AppError=require('../utils/errors/AppError')
const {Error_Res}=require('../utils/common');

async function airport_check(req , res , next){
     

        if(!req.body.name){

             Error_Res.message=" Something went wrong .. Figure it out "
             Error_Res.Error.description=new AppError("Name of Airport number can't be Null value ..", StatusCodes.BAD_REQUEST);

             console.log(Error_Res);
            return res.status( StatusCodes.BAD_REQUEST).json({
                 Error_Res
           
            })
        }

        if(!req.body.code){

            Error_Res.message=" Something went wrong .. Figure it out "
            Error_Res.Error.description=new AppError("Code of Airport can't be Null value ..", StatusCodes.BAD_REQUEST);

            console.log(Error_Res);
           return res.status( StatusCodes.BAD_REQUEST).json({
                Error_Res
          
           })
       }

       if(!req.body.cityId){

        Error_Res.message=" Something went wrong .. Figure it out "
        Error_Res.Error.description=new AppError("cityId of Airport can't be Null value ..", StatusCodes.BAD_REQUEST);

        console.log(Error_Res);
       return res.status( StatusCodes.BAD_REQUEST).json({
            Error_Res
      
       })
   }

        next();
}

module.exports=airport_check;