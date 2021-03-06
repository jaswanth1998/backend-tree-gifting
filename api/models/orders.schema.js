const mongoose = require('mongoose');


const orderschema = new mongoose.Schema({
    paymentId: {
        type: String
    },
    vendorName: {
        type: String,
        required: true
    },
    vendorId: {
        type: String,
        required: true
    },
    treeId: {
        type: String,
        required: true
    },
    locationId :{
        type: String,
        required: true  
    },
    paymentId :{
        type: String,
        required: true  
    },
    customerNumber :{
        type: String,
        required: true  
    },
    vendorEmailId: {
        type: String
        // required: true
    },
    panCard:{
        type: String
    },
    eventDate:{
        type:Date,
        required:true
    },
    amountReceived: {
        type: Number,
        required: true
    },
    treeIdOrdered: {
        type: String,
        //required: true
    },
    treeNameOrdered: {
        type: String,
        required: true
    },
    numberOfSpeciesOrdered: {
        type: Number,
        //required: true
    },
    projectName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    senderName: {
        type: String,
        required: true
    },
    senderPhoneNumber: {
        type: Number,
        required: true
    },
    isSenderRepeatUser: {
        type: String,
        required: true
    },
    receiverPhoneNumber: {
        type: Number,
        required: true
    },
    receiverEmailId: {
        type: String,
        required: true
    },
    receiverName: {
        type: String,
        required: true
    },
    modeOfPayment: {
        type: String,
        required: true
    },
    dateAndTimeOfOrder: {
        type: Date,
        //  required: true
    },
    eventId: {
        type: String,
        //   required: true
    },
    // eventName:{
    // type:String,
    // required: true
    //},
    ecardId: {
        type: String,
        //required: true
    },
    //ecardName:{
    //   type:String,
    // required: true
    //  },
    senderMessage: {
        type: String,
        //required: true
    },
    originalId: {
        type: String
    },
    status: {
        type: String,
        required: true,
        enum: ['open', 'in progress', 'planted', 'concluded'],
        default: 'open'
    }
});
const orderData = mongoose.model('Orders', orderschema);
module.exports = {
    orderData
}