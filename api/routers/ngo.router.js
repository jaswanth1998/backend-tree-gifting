const router = require('express').Router();
const {
    addNgoDetails,
    getNgoDetails,
    getNgoDataById,
    deleteNgoDataByID,
    updateNgoData,
    getNgoDataByName
 } = require('./../services/ngo.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addNgoDetails', requestCheck, addNgoDetails);
router.get('/getNgoDetails', requestCheck, getNgoDetails);
router.get('/getNgoDataById/:originalId', requestCheck, getNgoDataById);
router.get('/deleteNgoDataByID/:originalId', requestCheck, deleteNgoDataByID);
router.post('/updateNgoData/:originalId', requestCheck, updateNgoData);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;