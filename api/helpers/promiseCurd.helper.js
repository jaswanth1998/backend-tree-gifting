const {
    appDeafultResponse
} = require('./appResponse.helper')


const addData = (res, model) => {
    return new Promise((resolve, reject) => {
        model.save((err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}
const getAllData = (res, model) => {
    return new Promise((resolve, reject) => {
        model.find({}, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

const find = (res, model, query) => {
    return new Promise((resolve, reject) => {
        model.find(query, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    });
}


const updateOne = (res, model, updateQuery, query) => {
    return new Promise((resolve, reject) => {
        model.updateOne(updateQuery, query, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    });
}
const updateAll = (res, model, updateQuery, query) => {
    return new Promise((resolve, reject) => {
        model.update(updateQuery, query, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    });
}

const deleteOne = (res, model, query) => {
    return new Promise((resolve, reject) => {
        model.deleteOne(query, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    });
}

const deleteAll = (res, model, query) => {
    return new Promise((resolve, reject) => {
        model.deleteMany(query, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    });
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