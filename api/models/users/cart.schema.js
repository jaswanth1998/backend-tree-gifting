const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
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

const cart = mongoose.model('Cart', cartSchema);

module.exports = {
    cart
}