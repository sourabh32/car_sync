import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide an password"],
        
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
})



export const User = mongoose.model.users || mongoose.model("users",userSchema)