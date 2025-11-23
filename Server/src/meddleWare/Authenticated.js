import normalusers from "../models/Normaluser.model.js";
import { ApiError } from "../utilities/ApiError.js";
import asynHandler from "../utilities/AsyncHandler.js";
const IsAuthenticated = (req, res, next) => {
const token = req.headers.authorization.split(" ")[1];
if(!token){
    throw new ApiError(401,"TOken not found")
}

try {
    const decode= jwt.verify(token, process.env.SECRET_KEY);
    if(!decode){
        throw new ApiError(401,"falied to decode token");
    
    }
    req.user = decode;
    next();
} catch (error) {
    console.log(error);
    throw new ApiError(401,"falied to decode token");
}

}
const verifyOTP = asynHandler(async (req, res) => {
 const{code}=req.body

 if(!code){
     throw new ApiError(400,"All fields are required");
 }
 next();
});





export {
    IsAuthenticated,
    verifyOTP
}