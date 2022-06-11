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
const { ecardData } = require('./../models/ecards.schema');
const addEcardDetails = async (req, res) => {
    const ecarddata = new ecardData(req.appData);
    try {
        const data = await addData(res, ecarddata);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const getEcardDetails = async (req, res) => {
    try {
        const data = await getAllData(res, ecardData);

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getEcardDataById = async (req, res) => {
    try {
        
        const data = await find(res, ecardData,{
            _id: req.params.ecardId
        });
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteEcardDataByID = async (req, res) => {
    try {
        const query = {
            _id: req.params.ecardId
        }
        const data = await deleteAll(res, ecardData,query);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateEcardData = async (req, res) => {
    try {
        let filter = { _id: req.params.ecardId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateAll(res, ecardData, filter, query);
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getEcardDataByName = async (req, res) => {
    try {
        const data = await find(res, ecardData, { 'ecardName': req.params.ecardName });
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}
module.exports = {
    addEcardDetails,
    getEcardDetails,
    getEcardDataById,
    deleteEcardDataByID,
    updateEcardData,
    getEcardDataByName
}