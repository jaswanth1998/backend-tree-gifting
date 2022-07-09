const mongoose = require('mongoose')
const { Schema } = require("mongoose")

chat = {
    type:{
        type:String        
    },
    reply:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now,
        
    }
}

const queriesSchema = new mongoose.Schema({
    querieId:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        
    },
    query:{
        type:String,
        required:true
    },
    chats:[chat],
    status:{
        type:String,
        required:true,
        enum:['open','keep open','resloved','discard']
    }
})

const querieModel = mongoose.model('queries', queriesSchema);

module.exports = {
    querieModel
}