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
    deleteAll,
    lookUpAndUnwind
} = require('./../helpers/promiseCurd.helper');
const { Types } = require("mongoose");
const mongoose = require('mongoose');

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
        // treeData.aggregate(
        //     [
        //         {
        //             $lookup: {
        //                 from: "ngos", // collection name in db
        //                 localField: "ngoId",
        //                 foreignField:{$object:"_id"},
        //                 as: "worksnapsTimeEntries"
        //             }
        //         }
        //     ]
        // ).then((data)=>{
        //     appDeafultResponse(res, true, data);
        // })
        // const data = await getAllData(res, treeData);

        treeData.aggregate(
            [
                {
                  '$lookup': {
                    'from': 'ngos', 
                    'localField': '_id', 
                    'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId', 
                    'as': 'ngoTress'
                  }
                }, {
                  '$lookup': {
                    'from': 'locations', 
                    'localField': 'ngoTress.projectDetails.ProjectLocationandTrees.projectLocationID', 
                    'foreignField': '_id', 
                    'as': 'locationNames'
                  }
                }, {
                  '$project': {
                    'treeName': 1, 
                    'primaryTag': 1, 
                    'secondaryTag': 1, 
                    'icon': 1, 
                    'images': 1, 
                    'isLive': 1, 
                    'treeIntroduction': 1, 
                    'locationNames': 1
                  }
                }, {
                  '$lookup': {
                    'from': 'ngos', 
                    'localField': '_id', 
                    'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId', 
                    'as': 'result'
                  }
                },  {
                    '$addFields': {
                      'ngoName': '$result.ngoName'
                    }
                  },{
                  '$project': {
                    'result': 0
                  }
                }
              ]
        ).exec((err, data) => {
            if (err) appDeafultResponse(res, false, err);
            appDeafultResponse(res, true, data);
        });

        // const data = await lookUpAndUnwind(treeData, "ngos", 'ngoId', '_id', 'ngos', false, true)
        // appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}

const getTreesById = async (req, res) => {
    try {
        treeData.aggregate(
            [
                {
                    '$match': {
                        '_id': Types.ObjectId(req.params.treeId)
                    }
                }, {
                    '$lookup': {
                        'from': 'ngos',
                        'localField': '_id',
                        'foreignField': 'projectDetails.ProjectLocationandTrees.trees.treeId',
                        'as': 'ngoTress'
                    }
                }, {
                    '$lookup': {
                        'from': 'locations',
                        'localField': 'ngoTress.projectDetails.ProjectLocationandTrees.projectLocationID',
                        'foreignField': '_id',
                        'as': 'locationNames'
                    }
                }, {
                    '$project': {
                        'treeName': 1,
                        'primaryTag': 1,
                        'secondaryTag': 1,
                        'icon': 1,
                        'images': 1,
                        'isLive': 1,
                        'treeIntroduction': 1,
                        'locationNames': 1
                    }
                }, {
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
                },{
                    '$project': {
                      'result': 0
                    }
                  }
            ]
        ).exec((err, data) => {
            if (err) appDeafultResponse(res, false, err);
            appDeafultResponse(res, true, data);
        });
        // const data = await find(res, treeData,{
        //     _id: req.params.treeId
        // });

        // appDeafultResponse(res, true, data);
    } catch (err) {
        appDeafultResponse(res, false, err);
    }
}
const deleteTreesByID = async (req, res) => {
    try {
        const query = {
            _id: req.params.treeId
        }
        const data = await deleteAll(res, treeData, query);

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