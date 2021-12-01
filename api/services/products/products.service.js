const { addData, 
    getAllData,
    find ,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');

const { products } = require('../../models/products/products.schema');

const addProducts = (req, res) => {
    const productdata = new products(req.appData);
    addData(res, productdata);
}

const getProducts = (req, res) => {
    getAllData(res,products);
}

const getProductsById = (req, res) => {
    find(res, products, {productId:req.params.productId});
}

const deleteProducts = (req, res) => {
    deleteAll(res, products, {productId:req.params.productId});
}

const updateProducts = (req, res) => {
    let filter = {productId: req.params.productId};
    let query = {
        productName : req.appData.productName,
        description : req.appData.description,
        productPhotos : req.appData.productPhotos,
        link: req.appData.link,
        productRate: req.appData.productRate,
        discountRate: req.appData.discountRate,
        discountType: req.appData.discountType,
        minDiscount: req.appData.minDiscount,
        tags: req.appData.tags,
        updateOn: new Date()
    }

    updateOne(res, products, filter, query);
}

module.exports = {
    addProducts,
    getProducts,
    getProductsById,
    deleteProducts,
    updateProducts
}