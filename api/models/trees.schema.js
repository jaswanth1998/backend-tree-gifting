const mongoose = require('mongoose');
const { Schema } = require("mongoose");




const treeschema = new mongoose.Schema({
    treeId: {
        type: String
    },
    treeName: {
        type: String,
        required: true
    },
    primaryTag: {
        type: [String],
        required: true
    },
    secondaryTag: {
        type: [String]
    },
    icon: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    ngoId:
    {
        type: Schema.Types.ObjectId, 
        ref:"ngos"
    }
    ,
    locationId: {
        type: String,
        // required: true
    },
    isLive: {
        type: String,
        required: true
    },
    treeIntroduction: {
        type: String,
        required: true
    },
    originalId: {
        type: String
    },
    price:{
        type: Number
    }
});
const treeData = mongoose.model('Trees', treeschema);

module.exports = {
    treeData
}