const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    dob:{
        type:Date,
        required:true,
    },
    profilePicture:{
        type:String,
        default:""
    },
    refreshToken: {
        type:String,
        default:''
    },
    status: {
        type: String
    }

},
{timestamps:true}
);

module.exports = mongoose.model("user", userSchema);