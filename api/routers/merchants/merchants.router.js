const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addMerchants,
    getMerchants,
    getMerchantsById,
    deleteMerchants,
    updateMerchants,
    getMerchantsByPincode
    
} = require('../../services/merchants/merchants.service');

router.post('/addMerchant', requestCheck, addMerchants);
router.get('/getAllMerchants', requestCheck, getMerchants);
router.get('/getMerchantsById/:merchantId', requestCheck, getMerchantsById);
router.get('/deleteMerchants/:merchantId', requestCheck, deleteMerchants);
router.post('/updateMerchants/:merchantId', requestCheck, updateMerchants);
router.get('/getMerchantsByPincode/:pincode', requestCheck, getMerchantsByPincode);


module.exports = router;