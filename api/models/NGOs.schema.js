const mongoose = require('mongoose');

const ngoschema= new mongoose.Schema({
    originalId:{
        type:String
    },
    ngoName:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    spocName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    }

});
const ngoData = mongoose.model('NGOs',ngoschema);
module.exports = {
    ngoData
}