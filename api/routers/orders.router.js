const router = require('express').Router();
const {
    addOrderDetails,
    getOrderDetails,
    getOrderDetailsById,
    deleteOrderDataByID,
    updateOrderData,
    getOrderDataByVendorName
 } = require('./../services/orders.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addOrderDetails', requestCheck, addOrderDetails);
router.get('/getOrderDetails', requestCheck, getOrderDetails);
router.get('/getOrderDetailsById/:orderId', requestCheck, getOrderDetailsById);
router.get('/deleteOrderDataByID/:paymentId', requestCheck, deleteOrderDataByID);
router.post('/updateOrderData/:eventId', requestCheck, updateOrderData);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;