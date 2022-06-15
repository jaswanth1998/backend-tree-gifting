const mongoose = require('mongoose');





const treeschema= new mongoose.Schema({
    treeId: {
        type:String
    },
    treeName:{
        type:String,
        required: true
    },
    primaryTag:{
        type:[String],
        required: true
    },
    secondaryTag:{
        type:[String]
    },
    icon:{
        type:String,
        required: true
    },
    images:{
        type:[String],
        required: true
    },
    ngoId:{
        type:String,
        // required: true
    },
    locationId:{
        type:String,
        // required: true
    },
    isLive:{
        type:String,
        required: true
    },
    treeIntroduction:{
        type:String,
        required: true
    }

});
const treeData = mongoose.model('Trees',treeschema);
module.exports = {
    treeData
}