const mongoose = require('mongoose')

const specSchema = new mongoose.Schema({
    specs:{
        type:String,
        required:true,
        min:3,
        max:20,
    },
    // specLogo:{
    //     type:String,
    //     required:true
    // }
},
{timestamps:true}
);

module.exports = mongoose.model("specializations", specSchema);