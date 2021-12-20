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
    find(res, products, {_id:req.params.productId});
}

const deleteProducts = (req, res) => {
    deleteAll(res, products, {_id:req.params.productId});
}

const updateProducts = (req, res) => {
    let filter = {_id: req.params.productId};
    let query = {
        ...req.appData,
        updateOn: new Date()
    }

    updateOne(res, products, filter, query);
}

const getProductsByType = (req, res) => {
    find(res, products, {productType:req.params.productType});
}

module.exports = {
    addProducts,
    getProducts,
    getProductsById,
    deleteProducts,
    updateProducts,
    getProductsByType
}