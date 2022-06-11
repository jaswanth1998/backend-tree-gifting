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
const { treeData } = require('./../models/trees.schema');
const addTreeDetils = async (req, res) => {
    try {
        const data = new treeData(req.appData);
        await addData(res, data);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const getTreeDetails = async (req, res) => {
    try {
        const data = await getAllData(res, treeData);

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getTreesById = async (req, res) => {
    try {
        const data = await find(res, treeData,{
            _id: req.params.treeId
        });

        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteTreesByID = async (req, res) => {
    try {
        const data = await deleteAll(res, treeData);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const updateTreeData = async (req, res) => {
    try {
        let filter = { _id: req.params.treeId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateOne(res, treeData, filter, query);

        appDeafultResponse(res, true, data);
    }
    catch (err) {
        appDeafultResponse(res, false, err);
        appDeafultResponse(res, true, data);
    }
}

const getordersByTreetName = async (req, res) => {
    try {
        const data = await find(res, treeData, { 'treeName': req.params.treeName });
        find(res, treeData, { 'treeName': req.params.treeName });
    }
    catch (err) {
        appDeafultResponse(res, false, err);
    }
}
module.exports = {
    addTreeDetils,
    getTreeDetails,
    getTreesById,
    deleteTreesByID,
    updateTreeData,
    getordersByTreetName
}