const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
           
        },
        profilePic: {
            type: String,
            
        },
        mobileNo: {
            type: Number,
            
        },
        emailId: {
            type: String,
            required: true
        },
        usetType: {
            type: String,
            enum: ['admin','vendor','user'],
            default: 'user',
            required: true,
        },
        createdOn:{
            type:Date,
            default: Date.now,
        },
        updatedOn:{
            type:Date,
            default: Date.now,
        },
        addedBy:{
            type:String,
            default:'system'
        },
        updatedBy:{
            type:String,
            default:'system'
        }

    }
)