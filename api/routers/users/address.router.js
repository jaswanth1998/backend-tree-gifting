const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addAddress,
    getAddress,
    getAddressById,
    deleteAddress,
    updateAddress
} = require('../../services/users/address.service');

router.post('/addAddress', requestCheck, addAddress);
router.get('/getAddress', requestCheck, getAddress);
router.get('/getAddressById/:uid', requestCheck, getAddressById);
router.get('/deleteAddress/:uid', requestCheck, deleteAddress);
router.post('/updateAddress/:uid', requestCheck, updateAddress);

module.exports = router;