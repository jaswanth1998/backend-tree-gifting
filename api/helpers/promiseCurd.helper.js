const {
    appDeafultResponse
} = require('./appResponse.helper')


const addData = (res, model) => {
    return new Promise((resolve, reject) => {
        model.save((err, data) => {
            if (err) reject(err);
            else {
                resolve(data)
                // updateObjectId(model,data)
            };
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

const lookUpAndUnwind = (model, collections, localField, foreignField, as,isUnwid,preserveNulls) => {
    const aggration = []
    aggration.push(
        {
            '$lookup': {
                'from': collections,
                'localField': localField,
                'foreignField': foreignField,
                'as': as
            }
        }
    )
    if(isUnwid){
        aggration.push(
            {
                '$unwind': {
                    'path': '$'+as,
                    'includeArrayIndex': 'string',
                    'preserveNullAndEmptyArrays': false
                }
            }
        )
    }
    return new Promise((resolve, reject) => {
     model.aggregate(
        aggration
    )
    .exec((err,data)=>{
        if(err)reject(err)
        resolve(data)
    });
});

}

module.exports = {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll,
    lookUpAndUnwind
}