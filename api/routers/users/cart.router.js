const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addCart,
    getCartList,
    getCartListByUid,
    deleteCart,
    updateCart
} = require('../../services/users/cart.service');

router.post('/addCart', requestCheck, addCart);
router.get('/getCartList', requestCheck, getCartList);
router.get('/getCartListByUid/:uid', requestCheck, getCartListByUid);
router.get('/deleteCart/:uid', requestCheck, deleteCart);
router.post('/updateCart/:uid', requestCheck, updateCart);

module.exports = router;