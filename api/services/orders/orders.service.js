const {
    // addData,
    // getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');
const {
    appDeafultResponse
} = require('./../../helpers/appResponse.helper')
const {
    addData,
    getAllData,
} = require('../../helpers/promiseCurd.helper');

//const { merchantData } = require('../../merchantData/merchant.schema');
const { orderData } = require('../../models/products/orders.schema');

const addOrderDetils = (req, res) => {
    const orderdata = new orderData(req.appData);
    addData(res, orderdata);
}
const getOrderDetails = async (req, res) => {
    try{
        const data =   await getAllData(res,orderData);
        
        appDeafultResponse(res, true, data);
    }catch(err){
        appDeafultResponse(res, false, err);
    }
}

const getOrderById = (req, res) => {
    find(res, orderData, {_id:req.params.orderId});
}

const deleteOrderByID= (req, res) => {
    deleteAll(res, orderData, {_id:req.params.orderId});
}

const updateOrders = (req, res) => {
    let filter = {_id: req.params.orderId};
    let query = {
        ...req.appData,
        updateOn: new Date()
    }

    updateOne(res, orderData, filter, query);
}

const getordersByProductName = (req, res) => {
    find(res, orderData, {'orderDetails.productName':req.params.productName});
}


const getOrderByFliter= (req,res)=>{
    find(res,orderData,req.appData)
}

module.exports = {
    addOrderDetils,
    getOrderDetails,
    getOrderById,
    deleteOrderByID,
    updateOrders,
    getordersByProductName,
    getOrderByFliter
}