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

const {
    querieModel
} = require('../models/queries.schema')

const addQuerie = async (req, res) => {
    const QuerieData = new querieModel(req.appData);
    try {
        const data = await addData(res,QuerieData);
        appDeafultResponse(res, true, data)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}

const getQuerie = async (req, res) => {
    try {
        const data = await getAllData(res, querieModel);
        appDeafultResponse(res, true, data)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}
const getOrderByQuery = async (req, res) => {
    try {
        const data = await find(res, querieModel, req.appData)
        appDeafultResponse(res, true, data)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}

const deleteQueryById = async (req, res) => {
    try {
        const query = {
            _id: req.params.queryId
        }
        const data = await deleteAll(res, querieModel, query);
        appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}

const updateQuery  = async ( req,res)=>{
    try{
        let filter = { _id: req.params.queryId };
        let query = {
            ...req.appData,
            updateOn: new Date()
        }
        const data = await updateAll(res, querieModel, filter, query);
        appDeafultResponse(res, true, data);
    }catch(err){
        appDeafultResponse(res, false, err);
    }
}

module.exports = {
    addQuerie,
    getQuerie,
    getOrderByQuery,
    deleteQueryById,
    updateQuery

}