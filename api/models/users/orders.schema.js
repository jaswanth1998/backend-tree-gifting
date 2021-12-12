const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    address: {
        name: {
            type: String,
            required: true
        },
        mobileNo: {
            type: Number,
            required: true,
            minlength: 10,
            maxlength: 12
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
        } 
    },
    coupon: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    discountAmount: {
        type: Number,
        required: true
    },
    orderedDetails: {
        orderCreated: {
            type: Boolean,
            required: true
        },
        orderProcessed: {
            type: Boolean,
            required: true
        },
        orderTransit: {
            type: Boolean,
            required: true
        },
        orderReceived: {
            type: Boolean,
            required: true
        },
        orderRefunded: {
            type: Boolean,
            required: true
        }
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

const orders = mongoose.model('Orders', orderSchema);

module.exports = {
    orders
}