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
    deleteAll,
    lookUpAndUnwind
} = require('./../../helpers/promiseCurd.helper');
const { Types } = require("mongoose");
const mongoose = require('mongoose');

const { treeData } = require('./../../models/trees.schema');

const searchTrees = async (req, res) => {

    aggregations = []

    if (req.appData.treeName) {
        aggregations.push(
            {
                '$match': {
                    'treeName': {
                        '$regex': req.appData.treeName
                    }
                }
            }
        )
    }
    aggregations.push(
        {
            '$lookup': {
                'from': 'ngos',
                'localField': '_id',
                'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId',
                'as': 'ngos'
            }
        },
    )
    if (req.appData.location) {
        aggregations.push({
            '$match': {
                'ngos.projectDetails.ProjectLocationandTrees.projectLocationID': Types.ObjectId(req.appData.location)
            }
        })
    }
   
    treeData.aggregate(
        aggregations
    ).exec((err, data) => {
        if (err) appDeafultResponse(res, false, err);
        appDeafultResponse(res, true, data);
    });


}



module.exports = {
    searchTrees
}