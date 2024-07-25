import mongoose, { Schema,model } from "mongoose";

const userSchema = new Schema({
    name:String,
    surname:String,
    age:Number
})

const userModel = model("user",userSchema);
export default userModel;