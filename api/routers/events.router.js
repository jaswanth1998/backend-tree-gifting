const router = require('express').Router();
const {
    addEventDetails,
    getEventDetails,
    getEventDataById,
    deleteEventDataByID,
    updateEventData,
    getEventDataByName
 } = require('./../services/events.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addEventDetails', requestCheck, addEventDetails);
router.get('/getEventDetails', requestCheck, getEventDetails);
router.get('/getEventDataById/:eventId', requestCheck, getEventDataById);
router.get('/deleteEventDataByID/:eventId', requestCheck, deleteEventDataByID);
router.post('/updateEventData/:eventId', requestCheck, updateEventData);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;