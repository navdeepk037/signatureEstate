import mongoose, { mongo } from "mongoose";

const userSchema =new mongoose.Schema({
    username : {
        type :String, 
        required: true,
        unique: true,
    },
    email :{
        type:String, 
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    avatar:{
        type: String, 
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblank-profile-picture&psig=AOvVaw2ZG_pQaNZVMWMYK7CaZRbe&ust=1719334440633000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiV64ba9IYDFQAAAAAdAAAAABAE"
    },
},{timestamps:true})

const User = mongoose.model('User',userSchema);
export default User