const { StatusCodes } = require('http-status-codes')

async function airplane_modelNumber(req , res , next){

        if(!req.modelNumber){

            return res.status(StatusCodes.BAD_REQUEST).json({

               
                success: false,
                data: {},
                Error:{
                    description:" ModelNumber cannot be Null value .. "
                }
            })
        }

        next();
}

module.exports=airplane_modelNumber;