const mongoose = require('mongoose');


const eventschema= new mongoose.Schema({
    eventId: {
        type:String
    },
    eventName:{
        type:String,
        required: true
    },
    eventImage:{
        type:String,
        required: true
    },
    isLive:{
        type:String,
        required: true
    },
    originalId:{
        type:String
    }

});
const eventData = mongoose.model('Events',eventschema);
module.exports = {
    eventData
}