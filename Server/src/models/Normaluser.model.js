import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const UserSchema=new mongoose.Schema({
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
             type:String,
            required:true,
            
        }
})
UserSchema.methods.isPasswordCorrect = async function(password){
 return await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateAccessToken= function(){
  return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      fullName:this.fullName,
      username:this.username,
    },
    process.env.ACCES_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCES_TOKEN_EXPIRY
    }
  )
}
UserSchema.methods.generateRefreshToken=function(){
 return jwt.sign(
    {
      _id:this._id,
      
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}


 const normalusers=mongoose.model("normaluser",UserSchema)
 export default normalusers;