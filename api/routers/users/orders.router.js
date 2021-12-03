const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addOrders,
    getOrders,
    getOrdersByUid,
    getOrdersByOrderId,
    deleteOrders,
    updateOrders
} = require('../../services/users/orders.service');

router.post('/addOrders', requestCheck, addOrders);
router.get('/getOrders', requestCheck, getOrders);
router.get('/getOrdersByUid/:uid', requestCheck, getOrdersByUid);
router.get('/getOrdersByOrderId/:orderId', requestCheck, getOrdersByOrderId);
router.get('/deleteOrders/:orderId', requestCheck, deleteOrders);
router.post('/updateOrders/:orderId', requestCheck, updateOrders);

module.exports = router;