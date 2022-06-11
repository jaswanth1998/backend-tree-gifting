const {
    appDeafultResponse
} = require('./../helpers/appResponse.helper')
const {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('./../helpers/promiseCurd.helper');

//const { merchantData } = require('../../merchantData/merchant.schema');
const { eventData } = require('./../models/events.schema');
const addEventDetails = async (req, res) => {
    const eventdata = new eventData(req.appData);
    try {
        const data = await addData(res, eventdata);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const getEventDetails = async (req, res) => {
    try {
        const data = await getAllData(res, eventData);

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getEventDataById = async (req, res) => {
    try {
        
        const data = await find(res, eventData,{
            _id: req.params.eventId
        });
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteEventDataByID = async (req, res) => {
    try {
        const query = {
            _id: req.params.eventId
        }
        const data = await deleteAll(res, eventData,query);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateEventData = async (req, res) => {
    try {
        let filter = { _id: req.params.eventId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateAll(res, eventData, filter, query);
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getEventDataByName = async (req, res) => {
    try {
        const data = await find(res, eventData, { 'eventName': req.params.eventName });
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}
module.exports = {
    addEventDetails,
    getEventDetails,
    getEventDataById,
    deleteEventDataByID,
    updateEventData,
    getEventDataByName
}