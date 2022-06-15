const router = require('express').Router();
const {
    addLocationsDetails,
    getLocationDetails,
    getLocationById,
    deleteLocationByID,
    updateLocation,
    getLocationDetailsByName
 } = require('./../services/locations.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addLocationsDetails', requestCheck, addLocationsDetails);
router.get('/getLocationDetails', requestCheck, getLocationDetails);
router.get('/getLocationById/:locationId', requestCheck, getLocationById);
router.get('/deleteLocationByID/:locationId', requestCheck, deleteLocationByID);
router.post('/updateLocation/:locationId', requestCheck, updateLocation);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;