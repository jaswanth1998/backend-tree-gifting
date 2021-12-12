const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productPhotos: {
        type: Array,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    productRate: {
        type: Number,
        required: true
    },
    discountRate: {
        type: Number,
        required: true
    },
    discountType: {
        type: String,
        required: true
    },
    minDiscount: {
        type: Number,
        required: true
    },
    tags: {
        type: Array,
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

const products = mongoose.model('Products', productSchema);

module.exports = {
    products
}