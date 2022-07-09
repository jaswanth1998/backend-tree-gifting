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
const { Types } = require("mongoose");

//const { merchantData } = require('../../merchantData/merchant.schema');
const { ngoData } = require('./../models/NGOs.schema');
const addNgoDetails = async (req, res) => {
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
        const query = {
            _id: req.params.originalId
        }
        const data = await deleteAll(res, ngoData, query);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateNgoData = async (req, res) => {
    try {
        let filter = { _id: req.params.originalId };
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

const vendorProjects = async (req, res) => {
    aggetions = [
        {
            '$unwind': {
                'path': '$projectDetails',
                'includeArrayIndex': 'project',
                'preserveNullAndEmptyArrays': false
            }
        }, {
            '$unwind': {
                'path': '$projectDetails.ProjectLocationandTrees',
                'includeArrayIndex': 'locations',
                'preserveNullAndEmptyArrays': false
            }
        }, {
            '$lookup': {
                'from': 'locations',
                'localField': 'projectDetails.ProjectLocationandTrees.projectLocationID',
                'foreignField': '_id',
                'as': 'locationDetails'
            }
        }, {
            '$unwind': {
                'path': '$locationDetails',
                'preserveNullAndEmptyArrays': true
            }
        }
    ]
    ngoData.aggregate(
        aggetions
    ).exec((err, data) => {
        if (err) appDeafultResponse(res, false, err);
        appDeafultResponse(res, true, data);
    });
}

const updateVendorProjectLive = (req, res) => {

    ngoData.updateOne(
        {
            "projectDetails._id": Types.ObjectId(req.appData.projectId)
        },
        {
            'projectDetails.$.live': req.appData.status
        },
        (err, data) => {
            if (err) appDeafultResponse(res, false, err);
            else appDeafultResponse(res, true, data);
        })
}

const updateVendorProjectLocationLive = (req, res) => {
    ngoData.updateOne(
        {
            "projectDetails.ProjectLocationandTrees._id": Types.ObjectId(req.appData.projectLocationId)
        },
        {$set: {"projectDetails.$[i].ProjectLocationandTrees.$[j].live": req.appData.status}},  {arrayFilters: [{"i._id": Types.ObjectId(req.appData.projectId)},{"j._id": Types.ObjectId(req.appData.projectLocationId)}]},
        // {
        //     'projectDetails.$[i].ProjectLocationandTrees.$[j].live': req.appData.status
        // },
        (err, data) => {
            if (err) appDeafultResponse(res, false, err);
            else appDeafultResponse(res, true, data);
        })
}
module.exports = {
    addNgoDetails,
    getNgoDetails,
    getNgoDataById,
    deleteNgoDataByID,
    updateNgoData,
    getNgoDataByName,
    vendorProjects,
    updateVendorProjectLive,
    updateVendorProjectLocationLive
}