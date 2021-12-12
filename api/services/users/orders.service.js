const { addData, 
    getAllData,
    find ,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');

const { orders } = require('../../models/users/orders.schema');

const addOrders = (req, res) => {
    const orderdata = new orders(req.appData);
    addData(res, orderdata);
}

const getOrders = (req, res) => {
    getAllData(res,orders);
}

const getOrdersByUid = (req, res) => {
    find(res, orders, {uid:req.params.uid});
}

const getOrdersByOrderId = (req, res) => {
    find(res, orders, {orderId:req.params.orderId});
}

const deleteOrders = (req, res) => {
    deleteAll(res, orders, {orderId:req.params.orderId});
}

const updateOrders = (req, res) => {
    let filter = {orderId: req.params.orderId};
    let query = {
        uid : req.appData.uid,
        productId : req.appData.productId,
        address : {
            name: req.appData.name,
            mobileNo: req.appData.mobileNo,
            houseNo: req.appData.houseNo,
            area: req.appData.area,
            landMark: req.appData.landMark,
            pincode: req.appData.pincode,
            city: req.appData.city,
            state: req.appData.state,
            country: req.appData.country,
        },
        coupon: req.appData.coupon,
        amount: req.appData.amount,
        discountAmount: req.appData.discountAmount,
        orderedDetails: {
            orderCreated: req.appData.orderCreated,
            orderProcessed: req.appData.orderProcessed,
            orderTransit: req.appData.orderTransit,
            orderReceived: req.appData.orderReceived,
            orderRefunded: req.appData.orderRefunded,
        },
        updateOn: new Date()
    }

    updateOne(res, orders, filter, query);
}

module.exports = {
    addOrders,
    getOrders,
    getOrdersByUid,
    getOrdersByOrderId,
    deleteOrders,
    updateOrders
}