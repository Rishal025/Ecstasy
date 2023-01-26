const mongoose = require('mongoose')

const counselorSchema = new mongoose.Schema({
    fullname:{
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
    profilePicture:{
        type:String,
        default:""
    },
    qualification:{
        type:String,
        required:true
    },
    medicalRegNum:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    specializations:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    timeSlot:{
        type:Array,
        default:''
    },
    about:{
        type: String
    },
    languages: {
        type: String
    },
    refreshToken: {
        type:String,
        default:''
    }

},
{timestamps:true}
);

module.exports = mongoose.model("counselor", counselorSchema);