const {
    appDeafultResponse
} = require('./appResponse.helper')


const addData = (res, model) => {
    model.save((err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    });
}
const getAllData = (res, model) => {
    model.find({}, (err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    });
}

const find = (res, model, query) => {
    model.find(query, (err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    })
}


const updateOne = (res, model,updateQuery, query)=> {
    model.updateOne(updateQuery, query,  (err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    })
}
const updateAll = (res, model, updateQuery, query) => {
    model.update(updateQuery, query, (err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    })
}

const deleteOne = (res, model, query) => {
    model.deleteOne(query, (err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    })
}

const deleteAll = (res, model, query) => {
    model.deleteMany(query, (err, data) => {
        if (err) appDeafultResponse(res, false, err);
        else appDeafultResponse(res, true, data);
    })
}

module.exports = {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
}