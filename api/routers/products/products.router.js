const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addProducts,
    getProducts,
    getProductsById,
    deleteProducts,
    updateProducts
} = require('../../services/products/products.service');

router.post('/addProducts', requestCheck, addProducts);
router.get('/getProducts', requestCheck, getProducts);
router.get('/getProductsById/:productId', requestCheck, getProductsById);
router.get('/deleteProducts/:productId', requestCheck, deleteProducts);
router.post('/updateProducts/:productId', requestCheck, updateProducts);

module.exports = router;