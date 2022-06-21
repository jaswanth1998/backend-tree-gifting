const mongoose = require('mongoose');
const { Schema } = require("mongoose");
const trees = {
    treeName:{
        type:String        
    },
    invenoory:{
        type:String
    },
    cost:{
        type:Number,
        
    },
    treeId:{
        type:Schema.Types.ObjectId
    }
}
const ProjectLocationandTrees = {
    projectLocation:{
        type:String
    },
    projectLocationID:{
        type:Schema.Types.ObjectId
    },
    trees:[trees]
}

const projectdetails = {
    projectName:{
        type:String,        
    },
    ProjectLocationandTrees:{
        type:[ProjectLocationandTrees]
    }
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