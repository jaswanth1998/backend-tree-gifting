const mongoose = require('mongoose');


const locationschema= new mongoose.Schema({
    locationName:{
        type:String,
        required: true
    },
    pincode:{
        type:Number,
        required: true
    },
    originalId:{
        type:String
    }

});
const locationData = mongoose.model('Locations',locationschema);
module.exports = {
    locationData
}