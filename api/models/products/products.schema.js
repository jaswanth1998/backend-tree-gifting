const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
    },
    productName: {
        type: String,
        required: true
    },
    merchant:{
        type: String,
        required: true
    },
    productType: {
        type: Object,
    },
    prodNameDesc: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    legnth: {
        type: Number,
        required: true
    },
    miniDesc: {
        type: String,
        
    },
    titleImg: {
        type: String,
    },
    productImages: {
        type: Array,
    },
    link: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    minDiscount: {
        type: Number,
    },
    tags: {
        type: Array,
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