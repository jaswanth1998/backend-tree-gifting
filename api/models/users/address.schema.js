const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    houseNo: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    landMark: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }, 
    createdOn: {
        type: Date,
        default: Date.now
    },
    updateOn: {
        type: Date,
        default: Date.now
    }
     
});

const address = mongoose.model('Adress', addressSchema);

module.exports = {
    address
}