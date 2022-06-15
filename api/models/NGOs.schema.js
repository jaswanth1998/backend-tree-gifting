const mongoose = require('mongoose');
const projectdetails = {
    projectName:{
        type:String,
        required: true
    },
    projectNumber:{
        type:Number,
        //required: true
    },
    projectLocation:{
        type:[String],
        required: true
    },
    selectedTree:{
        type:String,
        required: true
    },
    inventoryForTree:{
        type:String,
        required: true
    },
    costPerSapling:{
        type:Number,
        required: true
    },
    
}
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
    },
    projectDetails:{

       type:[projectdetails],
       required: true

    }
});
const ngoData = mongoose.model('NGOs',ngoschema);
module.exports = {
    ngoData
}