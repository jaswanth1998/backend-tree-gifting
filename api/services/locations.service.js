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
const { locationData } = require('./../models/locations.schema');
const addLocationsDetails = async (req, res) => {
    const locationdata = new locationData(req.appData);
    try {
        const data = await addData(res, locationdata);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const getLocationDetails = async (req, res) => {
    try {
        const data = await getAllData(res, locationData);

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getLocationById = async (req, res) => {
    try {
        
        const data = await find(res, locationData,{
            _id: req.params.locationId
        });
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteLocationByID = async (req, res) => {
    try {
        const query = {
            _id: req.params.locationId
        }
        const data = await deleteAll(res, locationData,query);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateLocation = async (req, res) => {
    try {
        let filter = { _id: req.params.locationId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateAll(res, locationData, filter, query);
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getLocationDetailsByName = async (req, res) => {
    try {
        const data = await find(res, locationData, { 'locationName': req.params.locationData });
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}
module.exports = {
    addLocationsDetails,
    getLocationDetails,
    getLocationById,
    deleteLocationByID,
    updateLocation,
    getLocationDetailsByName
}