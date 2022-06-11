const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addOrderDetils,
    getOrderDetails,
    getOrderById,
    deleteOrderByID,
    updateOrders,
    getordersByProductName
    
} = require('../../services/orders/orders.service');

router.post('/addOrderDetils', requestCheck, addOrderDetils);
router.get('/getOrderDetails', requestCheck, getOrderDetails);
router.get('/getOrderById/:orderId', requestCheck, getOrderById);
router.get('/deleteOrderByID/:orderId', requestCheck, deleteOrderByID);
router.post('/updateOrders/:orderId', requestCheck, updateOrders);
router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;