
const asynHandler=(fun)=>async(req,res,next)=>{
   try{
            return await fun(req,res,next)
        }catch(error){
             const statusCode = typeof error.statusCode === "number" ? error.statusCode : 500;
            res.status(statusCode).json({
                message:error.message,
                success:false,
            })
            console.log(error)//dekh bahi?
        }
}

export  default asynHandler     