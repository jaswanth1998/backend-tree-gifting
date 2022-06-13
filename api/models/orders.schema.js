const mongoose = require('mongoose');


const orderschema= new mongoose.Schema({
    paymentId: {
        type:String
    },
    vendorName:{
        type:String,
        required: true
    },
    vendorEmailId:{
        type:String,
        required: true
    },
    amountReceived:{
        type:Number,
        required: true
    },
    treeIdOrdered:{
        type:String,
        //required: true
    },
    treeNameOrdered:{
        type:String,
        required: true
    },
    numberOfSpeciesOrdered:{
        type:Number,
        //required: true
    },
    projectName:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    senderName:{
        type:String,
        required: true
    },
    senderPhoneNumber:{
        type:Number,
        required: true
    },
    isSenderRepeatUser:{
        type:Boolean,
        required: true
    },
    receiverPhoneNumber:{
      type:Number,
        required: true
    },
    receiverEmailId:{
        type:String,
        required: true
    },
    receiverName:{
        type:String,
        required: true
    },
    modeOfPayment:{
        type:String,
        required: true
    },
    dateAndTimeOfOrder:{
        type:Date,
      //  required: true
    },
    eventId:{
        type:String,
     //   required: true
    },
   // eventName:{
       // type:String,
       // required: true
    //},
    ecardId:{
        type:String,
        //required: true
    },
    //ecardName:{
     //   type:String,
       // required: true
  //  },
    senderMessage:{
        type:String,
        //required: true
    }
});
const orderData = mongoose.model('Orders',orderschema);
module.exports = {
    orderData
}