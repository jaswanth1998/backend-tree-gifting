const {
    appDeafultResponse
} = require('./../../helpers/appResponse.helper')
const {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/promiseCurd.helper');

//const { merchantData } = require('../../merchantData/merchant.schema');
const { ngoData } = require('../../models/NGOs.schema');
const addNgoDetils = async (req, res) => {
    const ngodata = new ngoData(req.appData);
    try {
        const data = await addData(res, ngodata);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const getNgoDetails = async (req, res) => {
    try {
        const data = await getAllData(res, ngoData);

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getNgoDataById = async (req, res) => {
    try {
        const data = await find(res, ngoData);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteNgoDataByID = async (req, res) => {
    try {
        const data = await deleteAll(res, ngoData);
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateNgoData = async (req, res) => {
    try {
        let filter = { _id: req.params.treeId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateAll(res, ngoData, filter, query);
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getNgoDataByName = async (req, res) => {
    try {
        const data = await find(res, ngoData, { 'ngoName': req.params.ngoName });
        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}
module.exports = {
    addNgoDetils,
    getNgoDetails,
    getNgoDataById,
    deleteNgoDataByID,
    updateNgoData,
    getNgoDataByName
}