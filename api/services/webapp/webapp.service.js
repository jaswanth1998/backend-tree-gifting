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
                        '$regex': req.appData.treeName,
                        '$options' : 'i' 
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
    aggregations.push({
        '$lookup': {
            'from': 'locations',
            'localField': 'ngos.projectDetails.ProjectLocationandTrees.projectLocationID',
            'foreignField': '_id',
            'as': 'locationNames'
        }
    })
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


const showRecommendation = (req, res) => {
    aggregations = []

    aggregateIt = [

        {
            '$lookup': {
                'from': 'ngos',
                'localField': '_id',
                'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId',
                'as': 'ngoTress'
            }
        },
        {
            '$addFields': {
                'trees': '$ngoTress.projectDetails.ProjectLocationandTrees.trees'
            }
        },
        {
            '$lookup': {
                'from': 'locations',
                'localField': 'ngoTress.projectDetails.ProjectLocationandTrees.projectLocationID',
                'foreignField': '_id',
                'as': 'locationNames'
            }
        },
   
        {
            '$lookup': {
                'from': 'ngos',
                'localField': '_id',
                'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId',
                'as': 'result'
            }
        }, {
            '$addFields': {
                'ngoName': '$result.ngoName'
            }
        }, {
            '$project': {
                'result': 0
            }
        }
    ]



    aggregations = [...[
        {
            '$match': {
                'primaryTag': {
                    '$in': [
                        req.appData.primary
                    ]
                }
            }
        }, {
            '$match': {
                'secondaryTag': {
                    '$in': [
                        req.appData.secondary
                    ]
                }
            }
        },

        {
            '$lookup': {
                'from': 'ngos',
                'localField': '_id',
                'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId',
                'as': 'ngoTress'
            }
        },

        {
            '$addFields': {
                'trees': '$ngoTress.projectDetails.ProjectLocationandTrees.trees'
            }
        },

        {
            '$lookup': {
                'from': 'locations',
                'localField': 'ngoTress.projectDetails.ProjectLocationandTrees.projectLocationID',
                'foreignField': '_id',
                'as': 'locationNames'
            }
        },
        // {
        //     '$project': {
        //         'treeName': 1,
        //         'primaryTag': 1,
        //         'secondaryTag': 1,
        //         'icon': 1,
        //         'images': 1,
        //         'isLive': 1,
        //         'treeIntroduction': 1,
        //         'locationNames': 1,
        //         'trees':1,
        //         'price':1
        //     }
        // },
        {
            '$lookup': {
                'from': 'ngos',
                'localField': '_id',
                'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId',
                'as': 'result'
            }
        }, {
            '$addFields': {
                'ngoName': '$result.ngoName'
            }
        }, {
            '$project': {
                'result': 0
            }
        }
    ]]




    treeData.aggregate(
        aggregations
    ).exec((err, data) => {
        if (err) appDeafultResponse(res, false, err);
        console.log(JSON.stringify(data, null, 2))
        if (data.length < 3) {
            treeData.aggregate(
                aggregateIt
            ).exec((err, data1) => {
                if (err) appDeafultResponse(res, false, err);
                appDeafultResponse(res, true, [...data, ...data1]);
            })
        } else {
            appDeafultResponse(res, true, data);
        }

    });

}


module.exports = {
    searchTrees,
    showRecommendation
}