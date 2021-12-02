const { addData, 
    getAllData,
    find ,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');

const { cart } = require('../../models/users/cart.schema');

const addCart = (req, res) => {
    const cartdata = new cart(req.appData);
    addData(res, cartdata);
}

const getCartList = (req, res) => {
    getAllData(res,cart);
}

const getCartListByUid = (req, res) => {
    find(res, cart, {uid:req.params.uid});
}

const deleteCart = (req, res) => {
    deleteAll(res, cart, {uid:req.params.uid,productId:req.params.productId});
}

const updateCart = (req, res) => {
    let filter = {uid:req.params.uid};
    let query = {
        productId : req.appData.productId,
        amount: req.appData.amount,
        updateOn: new Date()
    }

    updateOne(res, cart, filter, query);
}

module.exports = {
    addCart,
    getCartList,
    getCartListByUid,
    deleteCart,
    updateCart
}