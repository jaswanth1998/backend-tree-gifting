const router = require('express').Router();
const {
    addNgoDetails,
    getNgoDetails,
    getNgoDataById,
    deleteNgoDataByID,
    updateNgoData,
    getNgoDataByName,
    vendorProjects,
    updateVendorProjectLive,
    updateVendorProjectLocationLive,
    updateVendorProjectReport
 } = require('./../services/ngo.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addNgoDetails', requestCheck, addNgoDetails);
router.get('/getNgoDetails', requestCheck, getNgoDetails);
router.get('/getNgoDataById/:originalId', requestCheck, getNgoDataById);
router.get('/deleteNgoDataByID/:originalId', requestCheck, deleteNgoDataByID);
router.post('/updateNgoData/:originalId', requestCheck, updateNgoData);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);
router.get('/vendorProjects',requestCheck,vendorProjects)
router.post('/updateVendorProject',requestCheck,updateVendorProjectLive)

router.post('/updateVendorProjectLocationLive',requestCheck,updateVendorProjectLocationLive)
router.post('/updateVendorProjectReport',requestCheck,updateVendorProjectReport)

module.exports = router;