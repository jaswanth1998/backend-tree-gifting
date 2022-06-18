const mongoose = require('mongoose');


const ecardschema= new mongoose.Schema({
    ecardId: {
        type:String
    },
    ecardName:{
        type:String,
        required: true
    },
    html:{
        type:String,
        required: true
    },
    isLive:{
        type:String,
        required: true
    },
    openFor:{
        type:[String],
        required: true
    },
    originalId:{
        type:String
    }

});
const ecardData = mongoose.model('Ecards',ecardschema);
module.exports = {
    ecardData
}