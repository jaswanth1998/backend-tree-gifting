
    const router = require('express').Router();
const {
    addEcardDetails,
    getEcardDetails,
    getEcardDataById,
    deleteEcardDataByID,
    updateEcardData,
    getEcardDataByName
 } = require('./../services/ecards.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addEcardDetails', requestCheck, addEcardDetails);
router.get('/getEcardDetails', requestCheck, getEcardDetails);
router.get('/getEcardDataById/:ecardId', requestCheck, getEcardDataById);
router.get('/deleteEcardDataByID/:ecardId', requestCheck, deleteEcardDataByID);
router.post('/updateEcardData/:ecardId', requestCheck, updateEcardData);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;