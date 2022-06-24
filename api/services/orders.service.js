const {
    appDeafultResponse
} = require('./../helpers/appResponse.helper')
const {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('./../helpers/promiseCurd.helper');

//const { merchantData } = require('../../merchantData/merchant.schema');
const { orderData } = require('./../models/orders.schema');
const addOrderDetails = async (req, res) => {
    const orderdata = new orderData(req.appData);
    try {
        const data = await addData(res, orderdata);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const getOrderDetails = async (req, res) => {
    try {
        const data = await getAllData(res, orderData);

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getOrderDetailsById = async (req, res) => {
    try {
        
        const data = await find(res, orderData,{
            _id: req.params.orderId
        });
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteOrderDataByID = async (req, res) => {
    try {
        const query = {
            _id: req.params.orderId
        }
        const data = await deleteAll(res, orderData,query);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateOrderData = async (req, res) => {
    try {
        let filter = { _id: req.params.orderId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateAll(res, orderData, filter, query);
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getOrderDataByVendorName = async (req, res) => {
    try {
        const data = await find(res, orderData, { 'vendorName': req.params.vendorName });
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}
module.exports = {
    addOrderDetails,
    getOrderDetails,
    getOrderDetailsById,
    deleteOrderDataByID,
    updateOrderData,
    getOrderDataByVendorName
}