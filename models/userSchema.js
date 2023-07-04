import mongoose from "mongoose";


//Here schema is define that how data will be stored and in which format.
const userSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        a:{ 
            type:Number,
            required:true
        },
        b:{
            type:Number,
            required:true
        },
        id:{
            type:Number,
            required:true
        },
        ans:{
            type:Object,
            default:null
        },
        Time_elapsed:
        {
            type:Number,
            default:null
        }
        
    },
    {timestamps:true }
)

 export const User = mongoose.model("User",userSchema)